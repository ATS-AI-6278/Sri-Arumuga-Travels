import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { createEtiosTextures, buildToyotaEtiosGD } from './EtiosGDModel';

export type InspectionAngle = 'front34' | 'side' | 'rear34' | 'frontClose';

interface CinematicCanvasProps {
  scrollProgress: number; // 0 (Hero) to 1 (Contact)
  inspectionMode?: boolean;
  inspectionAngle?: InspectionAngle;
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({
  scrollProgress,
  inspectionMode = false,
  inspectionAngle = 'front34',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const etiosGroupRef = useRef<THREE.Group | null>(null);
  const wheelsRef = useRef<THREE.Group[]>([]);
  const sceneryGroupRef = useRef<THREE.Group | null>(null);
  const studioFloorRef = useRef<THREE.Mesh | null>(null);

  // Dynamic light references
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const studioKeyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const studioFillLightRef = useRef<THREE.DirectionalLight | null>(null);
  const studioRimLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Camera lerp vectors
  const currentCamPos = useRef(new THREE.Vector3(-3.8, 1.35, 7.2));
  const targetCamPos = useRef(new THREE.Vector3(-3.8, 1.35, 7.2));
  const currentLookAt = useRef(new THREE.Vector3(0, 0.8, 0.3));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.8, 0.3));

  // Interactive Drag / Orbit for Studio Inspection
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const orbitSpherical = useRef({
    radius: 6.2,
    theta: -0.65,
    phi: 1.35,
  });

  // Track props in refs for animation loop
  const inspectionModeRef = useRef(inspectionMode);
  const inspectionAngleRef = useRef(inspectionAngle);
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    inspectionModeRef.current = inspectionMode;
    inspectionAngleRef.current = inspectionAngle;
    scrollProgressRef.current = scrollProgress;
  }, [inspectionMode, inspectionAngle, scrollProgress]);

  // Set Camera Targets based on mode and angle
  const updateCameraTargets = useCallback(() => {
    if (!sceneRef.current) return;

    if (inspectionModeRef.current) {
      // Clean Studio Inspection Camera Angles
      switch (inspectionAngleRef.current) {
        case 'front34':
          // Front 3/4 beauty angle: smiling chrome mustache, teardrop headlights, hood ridges, tall greenhouse
          targetCamPos.current.set(-3.6, 1.32, 4.2);
          targetLookAt.current.set(0, 0.72, 0.4);
          orbitSpherical.current = { radius: 5.6, theta: -0.7, phi: 1.36 };
          break;
        case 'side':
          // True Side Profile: 4,265mm length, 1,510mm height, 2,550mm wheelbase, 174mm ground clearance, tall greenhouse & C-pillar quarter glass
          targetCamPos.current.set(-5.6, 1.05, 0.05);
          targetLookAt.current.set(0, 0.72, 0.05);
          orbitSpherical.current = { radius: 5.6, theta: -Math.PI / 2, phi: 1.4 };
          break;
        case 'rear34':
          // Rear 3/4 angle: 595L high decklid boot, horizontal chrome trunk garnish, Toyota emblem, ETIOS & GD badges, vertical corner taillights
          targetCamPos.current.set(3.5, 1.35, -4.2);
          targetLookAt.current.set(0, 0.78, -0.4);
          orbitSpherical.current = { radius: 5.5, theta: 2.45, phi: 1.35 };
          break;
        case 'frontClose':
          // Front Close-Up Macro: Toyota central emblem, smiling mustache grille, teardrop reflector bowls, bumper intake, front plate
          targetCamPos.current.set(-0.65, 0.86, 2.85);
          targetLookAt.current.set(0, 0.7, 1.95);
          orbitSpherical.current = { radius: 2.9, theta: -0.22, phi: 1.32 };
          break;
      }
    } else {
      // Cinematic Highway Film - Driven by scroll progress
      const p = Math.max(0, Math.min(1, scrollProgressRef.current));
      if (p < 0.2) {
        // Hero: Opening 3/4 composition
        const local = p / 0.2;
        targetCamPos.current.set(-3.8 + local * 0.8, 1.35 + local * 0.1, 7.2 - local * 1.2);
        targetLookAt.current.set(0, 0.82, 0.3);
      } else if (p < 0.45) {
        // Approach: Side tracking profile
        const local = (p - 0.2) / 0.25;
        targetCamPos.current.set(-5.6 + local * 0.4, 1.25 + local * 0.2, 2.8 - local * 4.2);
        targetLookAt.current.set(0, 0.85, -0.2);
      } else if (p < 0.7) {
        // Experience: Elevated scenic sweep
        const local = (p - 0.45) / 0.25;
        targetCamPos.current.set(3.4 - local * 0.6, 2.6 + local * 0.4, -4.8 + local * 4.4);
        targetLookAt.current.set(0, 0.8, 0);
      } else if (p < 0.88) {
        // Journey: Rear three-quarter chase
        const local = (p - 0.7) / 0.18;
        targetCamPos.current.set(-2.2 + local * 4.2, 1.45 + local * 0.2, -5.8 + local * 2.2);
        targetLookAt.current.set(0, 0.8, 0.1);
      } else {
        // Contact: Parked executive arrival
        const local = (p - 0.88) / 0.12;
        targetCamPos.current.set(2.8 - local * 0.4, 1.35 + local * 0.1, 5.8 - local * 0.4);
        targetLookAt.current.set(0, 0.8, 0);
      }
    }
  }, []);

  // Update lighting and scenery visibility when mode changes
  useEffect(() => {
    updateCameraTargets();

    const scene = sceneRef.current;
    const scenery = sceneryGroupRef.current;
    const studioFloor = studioFloorRef.current;
    const sun = sunLightRef.current;
    const ambient = ambientLightRef.current;
    const studioKey = studioKeyLightRef.current;
    const studioFill = studioFillLightRef.current;
    const studioRim = studioRimLightRef.current;

    if (!scene || !scenery || !sun || !ambient || !studioKey || !studioFill || !studioRim) return;

    if (inspectionMode) {
      // 1. Studio Lighting Active: Neutral 5500K balanced illumination
      scenery.visible = false;
      if (studioFloor) studioFloor.visible = true;

      scene.background = new THREE.Color(0x13161c);
      scene.fog = new THREE.FogExp2(0x13161c, 0.025);

      ambient.color.setHex(0xe2e8f0);
      ambient.intensity = 1.2;

      sun.intensity = 0; // Turn off sunlight

      studioKey.intensity = 2.4;
      studioFill.intensity = 1.4;
      studioRim.intensity = 1.8;
    } else {
      // 2. Cinematic Highway Scenery Active
      scenery.visible = true;
      if (studioFloor) studioFloor.visible = false;

      studioKey.intensity = 0;
      studioFill.intensity = 0;
      studioRim.intensity = 0;

      // Adjust sunlight/ambient according to scroll
      const p = Math.max(0, Math.min(1, scrollProgress));
      if (p < 0.2) {
        scene.background = new THREE.Color(0x0a0d14);
        scene.fog = new THREE.FogExp2(0x0c111c, 0.012);
        ambient.color.setHex(0xd0d8e8);
        ambient.intensity = 0.9;
        sun.color.setHex(0xfff1dc);
        sun.intensity = 2.4;
        sun.position.set(22, 28, 18);
      } else if (p < 0.45) {
        scene.background = new THREE.Color(0x0e131d);
        scene.fog = new THREE.FogExp2(0x0e131d, 0.012);
        ambient.color.setHex(0xffffff);
        ambient.intensity = 1.05;
        sun.color.setHex(0xffffff);
        sun.intensity = 2.8;
        sun.position.set(26, 38, 15);
      } else if (p < 0.7) {
        scene.background = new THREE.Color(0x13141c);
        scene.fog = new THREE.FogExp2(0x13141c, 0.012);
        ambient.color.setHex(0xd4beaa);
        ambient.intensity = 0.95;
        sun.color.setHex(0xffa868);
        sun.intensity = 3.0;
        sun.position.set(-28, 18, 12);
      } else if (p < 0.88) {
        scene.background = new THREE.Color(0x0a0a10);
        scene.fog = new THREE.FogExp2(0x0a0b12, 0.015);
        ambient.color.setHex(0x9da7be);
        ambient.intensity = 0.6;
        sun.color.setHex(0x7688ad);
        sun.intensity = 1.4;
        sun.position.set(15, 14, -12);
      } else {
        scene.background = new THREE.Color(0x07080c);
        scene.fog = new THREE.FogExp2(0x08090e, 0.016);
        ambient.color.setHex(0x354054);
        ambient.intensity = 0.7;
        sun.color.setHex(0xd4af37);
        sun.intensity = 1.6;
        sun.position.set(18, 22, 14);
      }
    }
  }, [inspectionMode, inspectionAngle, scrollProgress, updateCameraTargets]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0d14);
    scene.fog = new THREE.FogExp2(0x0a0d14, 0.012);

    // 2. Perspective Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      250
    );
    camera.position.set(-3.8, 1.35, 7.2);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Photorealistic Highway Lighting
    const ambientLight = new THREE.AmbientLight(0xd9e2ec, 0.85);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(0xfff7e8, 2.6);
    sunLight.position.set(24, 32, 18);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    sunLight.shadow.camera.left = -15;
    sunLight.shadow.camera.right = 15;
    sunLight.shadow.camera.top = 15;
    sunLight.shadow.camera.bottom = -15;
    sunLight.shadow.bias = -0.0003;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // 5. Neutral Studio 3-Point Lighting (Key, Fill, Rim)
    const studioKey = new THREE.DirectionalLight(0xffffff, 0);
    studioKey.position.set(-8, 12, 10);
    studioKey.castShadow = true;
    studioKey.shadow.bias = -0.0003;
    scene.add(studioKey);
    studioKeyLightRef.current = studioKey;

    const studioFill = new THREE.DirectionalLight(0xedf2f7, 0);
    studioFill.position.set(10, 8, 8);
    scene.add(studioFill);
    studioFillLightRef.current = studioFill;

    const studioRim = new THREE.DirectionalLight(0xffffff, 0);
    studioRim.position.set(0, 9, -12);
    scene.add(studioRim);
    studioRimLightRef.current = studioRim;

    // Studio Cyclorama Floor (Neutral Photographic Surface)
    const studioFloorGeo = new THREE.CircleGeometry(16, 48);
    const studioFloorMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d24,
      roughness: 0.6,
      metalness: 0.1,
    });
    const studioFloor = new THREE.Mesh(studioFloorGeo, studioFloorMat);
    studioFloor.rotation.x = -Math.PI / 2;
    studioFloor.position.y = 0;
    studioFloor.receiveShadow = true;
    studioFloor.visible = false;
    scene.add(studioFloor);
    studioFloorRef.current = studioFloor;

    // 6. BUILD AUTHENTIC TOYOTA ETIOS GD SEDAN (REAL INDIAN-MARKET SPECIFICATION)
    const textures = createEtiosTextures();
    const etiosData = buildToyotaEtiosGD(textures);
    scene.add(etiosData.group);
    etiosGroupRef.current = etiosData.group;
    wheelsRef.current = etiosData.wheels;

    // 7. REALISTIC ENVIRONMENT: Scenic South Indian Highway
    const scenery = new THREE.Group();
    scene.add(scenery);
    sceneryGroupRef.current = scenery;

    // Highway Asphalt Surface
    const roadGeo = new THREE.PlaneGeometry(12, 240, 1, 20);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c22,
      roughness: 0.8,
      metalness: 0.05,
    });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.y = 0;
    road.receiveShadow = true;
    scenery.add(road);

    // Highway Lane Lines
    const laneLines = new THREE.Group();
    for (let i = -110; i < 110; i += 7) {
      const line = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18, 3.8),
        new THREE.MeshBasicMaterial({ color: 0xe8ecf2 })
      );
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.01, i);
      laneLines.add(line);
    }
    scenery.add(laneLines);

    // Roadside Solid Shoulder Markings
    const shoulderL = new THREE.Mesh(
      new THREE.PlaneGeometry(0.14, 240),
      new THREE.MeshBasicMaterial({ color: 0xd4af37 })
    );
    shoulderL.rotation.x = -Math.PI / 2;
    shoulderL.position.set(-5.2, 0.01, 0);
    scenery.add(shoulderL);

    const shoulderR = new THREE.Mesh(
      new THREE.PlaneGeometry(0.14, 240),
      new THREE.MeshBasicMaterial({ color: 0xd4af37 })
    );
    shoulderR.rotation.x = -Math.PI / 2;
    shoulderR.position.set(5.2, 0.01, 0);
    scenery.add(shoulderR);

    // Highway Verge / Lush Greenery
    const grassGeo = new THREE.PlaneGeometry(180, 240);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x0c130e,
      roughness: 0.95,
      metalness: 0.02,
    });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(0, -0.02, 0);
    grass.receiveShadow = true;
    scenery.add(grass);

    // Trees along the scenic verge
    const treeMat = new THREE.MeshStandardMaterial({
      color: 0x132219,
      roughness: 0.9,
      flatShading: true,
    });
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x221812,
      roughness: 0.85,
    });

    for (let t = -90; t <= 90; t += 18) {
      [-1, 1].forEach((side) => {
        const treeGroup = new THREE.Group();
        const posX = side * (12 + Math.random() * 8);
        treeGroup.position.set(posX, 0, t + Math.random() * 5);

        // Trunk
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.18, 0.28, 4.5, 6),
          trunkMat
        );
        trunk.position.y = 2.25;
        trunk.castShadow = true;
        treeGroup.add(trunk);

        // Foliage Crown
        const crown = new THREE.Mesh(
          new THREE.ConeGeometry(1.8 + Math.random() * 0.8, 4.2, 6),
          treeMat
        );
        crown.position.y = 5.2;
        crown.castShadow = true;
        treeGroup.add(crown);

        scenery.add(treeGroup);
      });
    }

    // Distant Rolling Western Ghats Contours
    const hillMat = new THREE.MeshStandardMaterial({
      color: 0x0f1522,
      roughness: 0.95,
      flatShading: true,
    });

    for (let h = 0; h < 10; h++) {
      const radius = 28 + Math.random() * 20;
      const height = 18 + Math.random() * 16;
      const hill = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 6), hillMat);
      const side = h % 2 === 0 ? -1 : 1;
      hill.position.set(side * (55 + Math.random() * 25), height / 2 - 2, -100 + h * 22);
      scenery.add(hill);
    }

    // 8. Interactive Mouse / Touch Orbit Controls for Studio Inspection Mode
    const onMouseDown = (e: MouseEvent) => {
      if (!inspectionModeRef.current) return;
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !inspectionModeRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      orbitSpherical.current.theta -= deltaX * 0.008;
      orbitSpherical.current.phi = Math.max(
        0.5,
        Math.min(1.52, orbitSpherical.current.phi - deltaY * 0.008)
      );

      previousMousePosition.current = { x: e.clientX, y: e.clientY };

      // Update target camera position in spherical coordinates around car center
      const r = orbitSpherical.current.radius;
      const p = orbitSpherical.current.phi;
      const t = orbitSpherical.current.theta;

      targetCamPos.current.set(
        r * Math.sin(p) * Math.sin(t),
        r * Math.cos(p) + 0.3,
        r * Math.sin(p) * Math.cos(t)
      );
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      if (!inspectionModeRef.current) return;
      orbitSpherical.current.radius = Math.max(
        2.2,
        Math.min(10.0, orbitSpherical.current.radius + e.deltaY * 0.005)
      );

      const r = orbitSpherical.current.radius;
      const p = orbitSpherical.current.phi;
      const t = orbitSpherical.current.theta;

      targetCamPos.current.set(
        r * Math.sin(p) * Math.sin(t),
        r * Math.cos(p) + 0.3,
        r * Math.sin(p) * Math.cos(t)
      );
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('wheel', onWheel, { passive: true });

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Natural Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Highway subtle suspension breathing (disabled in studio inspection)
      if (etiosGroupRef.current) {
        if (!inspectionModeRef.current) {
          etiosGroupRef.current.position.y = Math.sin(elapsed * 2.8) * 0.008;
        } else {
          etiosGroupRef.current.position.y = 0;
        }
      }

      // Smooth camera interpolation towards target
      if (cameraRef.current) {
        currentCamPos.current.lerp(targetCamPos.current, 0.06);
        currentLookAt.current.lerp(targetLookAt.current, 0.06);

        cameraRef.current.position.copy(currentCamPos.current);
        cameraRef.current.lookAt(currentLookAt.current);
      }

      // Subtle wheel rotation during transit in highway mode
      if (wheelsRef.current && !inspectionModeRef.current) {
        wheelsRef.current.forEach((w) => {
          w.rotation.x += delta * 2.5;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('wheel', onWheel);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full z-0 transition-opacity duration-700 ${
        inspectionMode ? 'pointer-events-auto cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      }`}
      aria-label="Cinematic 3D Toyota Etios GD View"
    />
  );
};
