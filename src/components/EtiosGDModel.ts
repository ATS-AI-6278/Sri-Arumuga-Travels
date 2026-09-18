import * as THREE from 'three';

/**
 * Creates photorealistic canvas textures for authentic Toyota Etios GD details:
 * - Front smiling chrome grille with Toyota oval emblem
 * - Teardrop headlamps with dual reflector bowls & amber turn signal
 * - Rear boot lid with chrome garnish bar, Toyota logo, ETIOS & GD badges, and HSRP license plate
 * - Vertical corner taillights with red/clear/amber segmentation
 * - 15-inch 8-spoke Toyota Etios alloy wheel face
 */
export function createEtiosTextures() {
  // 1. Signature Smiling Front Grille Texture
  const grilleCanvas = document.createElement('canvas');
  grilleCanvas.width = 1024;
  grilleCanvas.height = 256;
  const gCtx = grilleCanvas.getContext('2d')!;

  // Dark gloss background with horizontal radiator slats
  gCtx.fillStyle = '#111317';
  gCtx.fillRect(0, 0, 1024, 256);

  // Horizontal grille bars
  gCtx.strokeStyle = '#22262e';
  gCtx.lineWidth = 6;
  for (let y = 50; y < 240; y += 22) {
    gCtx.beginPath();
    gCtx.moveTo(40, y);
    gCtx.lineTo(984, y);
    gCtx.stroke();
  }

  // Signature Etios Smiling Chrome Mustache Bar
  gCtx.save();
  const grad = gCtx.createLinearGradient(0, 0, 0, 90);
  grad.addColorStop(0, '#f8fafc');
  grad.addColorStop(0.3, '#cbd5e1');
  grad.addColorStop(0.5, '#ffffff');
  grad.addColorStop(0.7, '#94a3b8');
  grad.addColorStop(1, '#64748b');

  gCtx.fillStyle = grad;
  gCtx.beginPath();
  // Swept smiling upper wing
  gCtx.moveTo(40, 25);
  gCtx.quadraticCurveTo(512, 110, 984, 25);
  gCtx.lineTo(970, 75);
  gCtx.quadraticCurveTo(512, 160, 54, 75);
  gCtx.closePath();
  gCtx.fill();

  // Toyota Oval Emblem Center Plinth
  gCtx.beginPath();
  gCtx.ellipse(512, 115, 65, 45, 0, 0, Math.PI * 2);
  gCtx.fillStyle = '#0f131a';
  gCtx.fill();
  gCtx.lineWidth = 5;
  gCtx.strokeStyle = '#ffffff';
  gCtx.stroke();

  // Toyota Logo (Three Interlocking Ovals)
  gCtx.strokeStyle = '#f1f5f9';
  gCtx.lineWidth = 5;
  // Outer oval
  gCtx.beginPath();
  gCtx.ellipse(512, 115, 52, 34, 0, 0, Math.PI * 2);
  gCtx.stroke();
  // Inner vertical oval (represents customer & company heart)
  gCtx.beginPath();
  gCtx.ellipse(512, 115, 18, 30, 0, 0, Math.PI * 2);
  gCtx.stroke();
  // Inner horizontal oval
  gCtx.beginPath();
  gCtx.ellipse(512, 105, 34, 15, 0, 0, Math.PI * 2);
  gCtx.stroke();
  gCtx.restore();

  const grilleTex = new THREE.CanvasTexture(grilleCanvas);

  // 2. Toyota Etios Teardrop Headlight Texture (Dual Reflector + Amber Indicator)
  const hlCanvas = document.createElement('canvas');
  hlCanvas.width = 512;
  hlCanvas.height = 256;
  const hlCtx = hlCanvas.getContext('2d')!;

  hlCtx.fillStyle = '#0b0d12';
  hlCtx.fillRect(0, 0, 512, 256);

  // Main high-beam chrome reflector cup
  const rGrad = hlCtx.createRadialGradient(200, 128, 10, 200, 128, 100);
  rGrad.addColorStop(0, '#ffffff');
  rGrad.addColorStop(0.4, '#e2e8f0');
  rGrad.addColorStop(0.8, '#475569');
  rGrad.addColorStop(1, '#1e293b');
  hlCtx.fillStyle = rGrad;
  hlCtx.beginPath();
  hlCtx.arc(200, 128, 95, 0, Math.PI * 2);
  hlCtx.fill();

  // Low-beam reflector cup
  const rGrad2 = hlCtx.createRadialGradient(370, 135, 8, 370, 135, 75);
  rGrad2.addColorStop(0, '#ffffff');
  rGrad.addColorStop(0.5, '#cbd5e1');
  rGrad2.addColorStop(1, '#334155');
  hlCtx.fillStyle = rGrad2;
  hlCtx.beginPath();
  hlCtx.arc(370, 135, 70, 0, Math.PI * 2);
  hlCtx.fill();

  // Amber side turn signal indicator (outer corner)
  const aGrad = hlCtx.createRadialGradient(70, 128, 5, 70, 128, 60);
  aGrad.addColorStop(0, '#fef08a');
  aGrad.addColorStop(0.3, '#f59e0b');
  aGrad.addColorStop(0.8, '#d97706');
  aGrad.addColorStop(1, '#78350f');
  hlCtx.fillStyle = aGrad;
  hlCtx.beginPath();
  hlCtx.arc(70, 128, 55, 0, Math.PI * 2);
  hlCtx.fill();

  // Fluted lens ribs
  hlCtx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  hlCtx.lineWidth = 3;
  for (let x = 30; x < 490; x += 15) {
    hlCtx.beginPath();
    hlCtx.moveTo(x, 20);
    hlCtx.lineTo(x, 236);
    hlCtx.stroke();
  }

  const headlightTex = new THREE.CanvasTexture(hlCanvas);

  // 3. Etios High-Deck Rear Boot Garnish, Badges & License Plate Texture
  const bootCanvas = document.createElement('canvas');
  bootCanvas.width = 1024;
  bootCanvas.height = 384;
  const bCtx = bootCanvas.getContext('2d')!;

  // Body color background
  bCtx.fillStyle = '#f3f4f6';
  bCtx.fillRect(0, 0, 1024, 384);

  // Wide Horizontal Chrome Trunk Garnish Strip
  const chromeBootGrad = bCtx.createLinearGradient(0, 80, 0, 150);
  chromeBootGrad.addColorStop(0, '#f8fafc');
  chromeBootGrad.addColorStop(0.3, '#cbd5e1');
  chromeBootGrad.addColorStop(0.5, '#ffffff');
  chromeBootGrad.addColorStop(0.8, '#64748b');
  bCtx.fillStyle = chromeBootGrad;
  bCtx.fillRect(100, 85, 824, 55);

  // Toyota Emblem above chrome bar
  bCtx.strokeStyle = '#334155';
  bCtx.lineWidth = 4;
  bCtx.beginPath();
  bCtx.ellipse(512, 50, 42, 28, 0, 0, Math.PI * 2);
  bCtx.stroke();
  bCtx.beginPath();
  bCtx.ellipse(512, 50, 14, 25, 0, 0, Math.PI * 2);
  bCtx.stroke();
  bCtx.beginPath();
  bCtx.ellipse(512, 42, 27, 12, 0, 0, Math.PI * 2);
  bCtx.stroke();

  // "ETIOS" Chrome Badge on the left
  bCtx.fillStyle = '#1e293b';
  bCtx.font = 'bold 36px sans-serif';
  bCtx.letterSpacing = '8px';
  bCtx.fillText('ETIOS', 130, 72);

  // "GD" Diesel Badge on the right
  bCtx.fillStyle = '#0f172a';
  bCtx.font = 'bold 34px sans-serif';
  bCtx.fillText('GD', 830, 72);
  bCtx.fillStyle = '#b91c1c';
  bCtx.font = 'bold 16px sans-serif';
  bCtx.fillText('D-4D', 830, 42);

  // Indian High-Security Registration Plate (HSRP) Recess
  bCtx.fillStyle = '#111827';
  bCtx.fillRect(320, 165, 384, 150);
  bCtx.fillStyle = '#ffffff';
  bCtx.fillRect(328, 173, 368, 134);

  // IND blue strip
  bCtx.fillStyle = '#1d4ed8';
  bCtx.fillRect(332, 177, 36, 126);
  bCtx.fillStyle = '#ffffff';
  bCtx.font = 'bold 14px sans-serif';
  bCtx.fillText('IND', 335, 245);

  // Number: TN 45 SA 2028 (Sri Arumuga Travels)
  bCtx.fillStyle = '#000000';
  bCtx.font = 'bold 38px monospace';
  bCtx.fillText('TN 45 SA 2028', 385, 252);

  const bootTex = new THREE.CanvasTexture(bootCanvas);

  // 4. Vertical Corner Taillights Texture (Red / Clear / Amber Segmentation)
  const tailCanvas = document.createElement('canvas');
  tailCanvas.width = 256;
  tailCanvas.height = 512;
  const tCtx = tailCanvas.getContext('2d')!;

  // Upper Red Brake / Tail section
  const redGrad1 = tCtx.createLinearGradient(0, 0, 0, 200);
  redGrad1.addColorStop(0, '#b91c1c');
  redGrad1.addColorStop(0.5, '#ef4444');
  redGrad1.addColorStop(1, '#991b1b');
  tCtx.fillStyle = redGrad1;
  tCtx.fillRect(0, 0, 256, 210);

  // Clear White / Amber Reverse & Indicator center band
  const clearGrad = tCtx.createLinearGradient(0, 210, 0, 340);
  clearGrad.addColorStop(0, '#f8fafc');
  clearGrad.addColorStop(0.3, '#f59e0b');
  clearGrad.addColorStop(0.7, '#ffffff');
  clearGrad.addColorStop(1, '#e2e8f0');
  tCtx.fillStyle = clearGrad;
  tCtx.fillRect(0, 210, 256, 130);

  // Lower Red Reflector section
  const redGrad2 = tCtx.createLinearGradient(0, 340, 0, 512);
  redGrad2.addColorStop(0, '#991b1b');
  redGrad2.addColorStop(0.5, '#dc2626');
  redGrad2.addColorStop(1, '#7f1d1d');
  tCtx.fillStyle = redGrad2;
  tCtx.fillRect(0, 340, 256, 172);

  // Fluted lines for automotive lens realism
  tCtx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
  tCtx.lineWidth = 3;
  for (let y = 15; y < 500; y += 14) {
    tCtx.beginPath();
    tCtx.moveTo(10, y);
    tCtx.lineTo(246, y);
    tCtx.stroke();
  }

  const taillightTex = new THREE.CanvasTexture(tailCanvas);

  // 5. Authentic 15-inch 8-Spoke Toyota Etios Alloy Wheel Texture
  const wheelCanvas = document.createElement('canvas');
  wheelCanvas.width = 512;
  wheelCanvas.height = 512;
  const wCtx = wheelCanvas.getContext('2d')!;

  // Background disc brake cavity
  wCtx.fillStyle = '#0f172a';
  wCtx.fillRect(0, 0, 512, 512);

  // Cast iron brake disc
  wCtx.beginPath();
  wCtx.arc(256, 256, 210, 0, Math.PI * 2);
  wCtx.fillStyle = '#475569';
  wCtx.fill();
  wCtx.strokeStyle = '#64748b';
  wCtx.lineWidth = 14;
  wCtx.stroke();

  // Alloy Rim Outer Lip
  wCtx.beginPath();
  wCtx.arc(256, 256, 235, 0, Math.PI * 2);
  wCtx.strokeStyle = '#e2e8f0';
  wCtx.lineWidth = 18;
  wCtx.stroke();

  // 8 Silver Alloy Spokes
  wCtx.save();
  wCtx.translate(256, 256);
  for (let i = 0; i < 8; i++) {
    wCtx.rotate(Math.PI / 4);
    const spokeGrad = wCtx.createLinearGradient(-18, -230, 18, -60);
    spokeGrad.addColorStop(0, '#f8fafc');
    spokeGrad.addColorStop(0.5, '#cbd5e1');
    spokeGrad.addColorStop(1, '#94a3b8');
    wCtx.fillStyle = spokeGrad;
    wCtx.fillRect(-16, -225, 32, 165);

    // Beveled edges
    wCtx.strokeStyle = '#ffffff';
    wCtx.lineWidth = 2;
    wCtx.strokeRect(-16, -225, 32, 165);
  }

  // Center Hub with Toyota Emblem
  wCtx.beginPath();
  wCtx.arc(0, 0, 58, 0, Math.PI * 2);
  wCtx.fillStyle = '#e2e8f0';
  wCtx.fill();
  wCtx.strokeStyle = '#94a3b8';
  wCtx.lineWidth = 4;
  wCtx.stroke();

  // 4 Lug nuts
  for (let j = 0; j < 4; j++) {
    wCtx.rotate(Math.PI / 2);
    wCtx.beginPath();
    wCtx.arc(36, 0, 7, 0, Math.PI * 2);
    wCtx.fillStyle = '#1e293b';
    wCtx.fill();
  }

  // Center Toyota Logo
  wCtx.strokeStyle = '#334155';
  wCtx.lineWidth = 3;
  wCtx.beginPath();
  wCtx.ellipse(0, 0, 24, 16, 0, 0, Math.PI * 2);
  wCtx.stroke();
  wCtx.beginPath();
  wCtx.ellipse(0, 0, 8, 14, 0, 0, Math.PI * 2);
  wCtx.stroke();
  wCtx.restore();

  const wheelTex = new THREE.CanvasTexture(wheelCanvas);

  return {
    grilleTex,
    headlightTex,
    bootTex,
    taillightTex,
    wheelTex,
  };
}

/**
 * Builds an authentic Toyota Etios GD sedan model with accurate real-world dimensions:
 * Length: 4,265 mm (4.265m)
 * Width: 1,695 mm (1.695m)
 * Height: 1,510 mm (1.510m)
 * Wheelbase: 2,550 mm (2.550m)
 * Ground Clearance: 174 mm (0.174m)
 * Boot Capacity: 595 Liters (Prominent high-deck notchback boot)
 */
export function buildToyotaEtiosGD(textures: ReturnType<typeof createEtiosTextures>) {
  const etiosGroup = new THREE.Group();
  etiosGroup.name = 'ToyotaEtiosGD';

  // Authentic Automotive Materials
  // Premium Metallic Pearl White / Silver (Standard executive fleet color for Etios GD)
  const paintMaterial = new THREE.MeshStandardMaterial({
    color: 0xf3f5f8,
    metalness: 0.72,
    roughness: 0.28,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.98,
    roughness: 0.05,
  });

  const satinBlackTrim = new THREE.MeshStandardMaterial({
    color: 0x1c1f26,
    roughness: 0.7,
    metalness: 0.15,
  });

  const automotiveGlass = new THREE.MeshStandardMaterial({
    color: 0x111622,
    metalness: 0.9,
    roughness: 0.05,
    transparent: true,
    opacity: 0.86,
  });

  const headlightMaterial = new THREE.MeshStandardMaterial({
    map: textures.headlightTex,
    roughness: 0.15,
    metalness: 0.85,
    emissive: 0xfff9e6,
    emissiveIntensity: 0.25,
  });

  const taillightMaterial = new THREE.MeshStandardMaterial({
    map: textures.taillightTex,
    roughness: 0.2,
    metalness: 0.4,
    emissive: 0x991122,
    emissiveIntensity: 0.35,
  });

  const tireRubber = new THREE.MeshStandardMaterial({
    color: 0x1b1c20,
    roughness: 0.9,
    metalness: 0.05,
  });

  const alloyWheelMat = new THREE.MeshStandardMaterial({
    map: textures.wheelTex,
    metalness: 0.85,
    roughness: 0.22,
  });

  // -------------------------------------------------------------
  // 1. UNDERBODY PLATFORM (174mm Indian Road Ground Clearance)
  // -------------------------------------------------------------
  // Ground height y = 0.174m
  const floorPanGeo = new THREE.BoxGeometry(1.64, 0.14, 3.8);
  const floorPan = new THREE.Mesh(floorPanGeo, satinBlackTrim);
  floorPan.position.set(0, 0.24, 0);
  floorPan.receiveShadow = true;
  etiosGroup.add(floorPan);

  // Exhaust muffler and tailpipe at rear right
  const mufflerGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.35, 12);
  const muffler = new THREE.Mesh(mufflerGeo, satinBlackTrim);
  muffler.rotation.x = Math.PI / 2;
  muffler.position.set(0.55, 0.24, -1.85);
  etiosGroup.add(muffler);

  const tailpipeGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 12);
  const tailpipe = new THREE.Mesh(tailpipeGeo, chromeMaterial);
  tailpipe.rotation.x = Math.PI / 2;
  tailpipe.position.set(0.55, 0.22, -2.06);
  etiosGroup.add(tailpipe);

  // -------------------------------------------------------------
  // 2. MAIN LOWER BODY & WAISTLINE (Width: 1.695m, Height: up to 0.94m)
  // -------------------------------------------------------------
  // Sculpted lower cabin body shell with gentle curved tumblehome
  const lowerBodyGeo = new THREE.BoxGeometry(1.695, 0.58, 4.02);
  const lowerBody = new THREE.Mesh(lowerBodyGeo, paintMaterial);
  lowerBody.position.set(0, 0.58, 0.05);
  lowerBody.castShadow = true;
  lowerBody.receiveShadow = true;
  etiosGroup.add(lowerBody);

  // Characteristic Etios Door Crease & Side Rocker Bevels
  const rockerGeo = new THREE.BoxGeometry(1.71, 0.14, 2.52);
  const rocker = new THREE.Mesh(rockerGeo, paintMaterial);
  rocker.position.set(0, 0.36, 0);
  rocker.castShadow = true;
  etiosGroup.add(rocker);

  // Black Lower Side Sill Protection Strips
  [-0.855, 0.855].forEach((x) => {
    const sillGeo = new THREE.BoxGeometry(0.02, 0.05, 2.48);
    const sill = new THREE.Mesh(sillGeo, satinBlackTrim);
    sill.position.set(x, 0.28, 0);
    etiosGroup.add(sill);
  });

  // Pull-Type Body-Colored Door Handles
  [-0.865, 0.865].forEach((x) => {
    [-0.45, 0.48].forEach((z) => {
      const handleGeo = new THREE.BoxGeometry(0.03, 0.035, 0.16);
      const handle = new THREE.Mesh(handleGeo, paintMaterial);
      handle.position.set(x, 0.88, z);
      etiosGroup.add(handle);

      // Chrome accent line inside handle
      const hChrome = new THREE.Mesh(
        new THREE.BoxGeometry(0.035, 0.012, 0.14),
        chromeMaterial
      );
      hChrome.position.set(x * 1.01, 0.88, z);
      etiosGroup.add(hChrome);
    });
  });

  // Aerodynamic Body-Colored Side Mirrors with Indicator Slit
  [-0.94, 0.94].forEach((x) => {
    const mirrorGroup = new THREE.Group();
    mirrorGroup.position.set(x, 1.02, 0.82);

    // Stalk
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.03, 0.1, 8),
      satinBlackTrim
    );
    stalk.rotation.z = x > 0 ? -0.4 : 0.4;
    mirrorGroup.add(stalk);

    // Mirror Housing
    const housingGeo = new THREE.BoxGeometry(0.18, 0.11, 0.14);
    const housing = new THREE.Mesh(housingGeo, paintMaterial);
    housing.position.set(x > 0 ? 0.06 : -0.06, 0.04, 0);
    mirrorGroup.add(housing);

    // Indicator Strip on Mirror Outer Edge
    const indGeo = new THREE.BoxGeometry(0.185, 0.018, 0.08);
    const ind = new THREE.Mesh(
      indGeo,
      new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.6,
      })
    );
    ind.position.set(x > 0 ? 0.06 : -0.06, 0.04, 0.02);
    mirrorGroup.add(ind);

    // Mirror Glass Surface
    const mGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.16, 0.09),
      chromeMaterial
    );
    mGlass.position.set(x > 0 ? 0.06 : -0.06, 0.04, -0.071);
    mGlass.rotation.y = Math.PI;
    mirrorGroup.add(mGlass);

    etiosGroup.add(mirrorGroup);
  });

  // -------------------------------------------------------------
  // 3. FRONT BONNET & SCULPTED CHARACTER CREASES
  // -------------------------------------------------------------
  // Length: 1.05m, forward taper towards front grille
  const bonnetGeo = new THREE.BoxGeometry(1.64, 0.28, 1.15);
  const bonnet = new THREE.Mesh(bonnetGeo, paintMaterial);
  bonnet.position.set(0, 0.84, 1.48);
  bonnet.rotation.x = -0.08;
  bonnet.castShadow = true;
  etiosGroup.add(bonnet);

  // Twin Sculpted Longitudinal Bonnet Ridges
  [-0.48, 0.48].forEach((x) => {
    const ridgeGeo = new THREE.BoxGeometry(0.04, 0.02, 1.1);
    const ridge = new THREE.Mesh(ridgeGeo, paintMaterial);
    ridge.position.set(x, 0.98, 1.48);
    ridge.rotation.x = -0.08;
    ridge.castShadow = true;
    etiosGroup.add(ridge);
  });

  // Windshield Cowl & Parked Wipers
  const cowlGeo = new THREE.BoxGeometry(1.58, 0.08, 0.22);
  const cowl = new THREE.Mesh(cowlGeo, satinBlackTrim);
  cowl.position.set(0, 0.94, 0.94);
  etiosGroup.add(cowl);

  // Dual Wipers parked at cowl
  [-0.32, 0.24].forEach((x) => {
    const wiperGeo = new THREE.BoxGeometry(0.02, 0.015, 0.52);
    const wiper = new THREE.Mesh(wiperGeo, satinBlackTrim);
    wiper.rotation.y = Math.PI / 2.3;
    wiper.position.set(x, 0.98, 0.92);
    etiosGroup.add(wiper);
  });

  // -------------------------------------------------------------
  // 4. FRONT NOSE, SMILING GRILLE & TEARDROP HEADLIGHTS
  // -------------------------------------------------------------
  // Front Bumper with sculpted aerodynamic lower valance
  const frontBumperGeo = new THREE.BoxGeometry(1.68, 0.46, 0.38);
  const frontBumper = new THREE.Mesh(frontBumperGeo, paintMaterial);
  frontBumper.position.set(0, 0.52, 2.05);
  frontBumper.castShadow = true;
  etiosGroup.add(frontBumper);

  // Signature Front Grille Plaque with Canvas Smiling Chrome Mustache & Logo
  const grillePlaqueGeo = new THREE.PlaneGeometry(1.18, 0.26);
  const grillePlaque = new THREE.Mesh(
    grillePlaqueGeo,
    new THREE.MeshStandardMaterial({
      map: textures.grilleTex,
      roughness: 0.25,
      metalness: 0.8,
    })
  );
  grillePlaque.position.set(0, 0.77, 2.22);
  etiosGroup.add(grillePlaque);

  // Central Lower Trapezoidal Air Intake Grille (Black with horizontal slats)
  const lowerAirDamGeo = new THREE.BoxGeometry(1.08, 0.22, 0.08);
  const lowerAirDam = new THREE.Mesh(lowerAirDamGeo, satinBlackTrim);
  lowerAirDam.position.set(0, 0.41, 2.23);
  etiosGroup.add(lowerAirDam);

  // Indian High Security Registration Plate (Front: TN 45 SA 2028)
  const frontPlateCanvas = document.createElement('canvas');
  frontPlateCanvas.width = 512;
  frontPlateCanvas.height = 128;
  const fpCtx = frontPlateCanvas.getContext('2d')!;
  fpCtx.fillStyle = '#ffffff';
  fpCtx.fillRect(0, 0, 512, 128);
  fpCtx.fillStyle = '#1d4ed8';
  fpCtx.fillRect(0, 0, 48, 128);
  fpCtx.fillStyle = '#ffffff';
  fpCtx.font = 'bold 22px sans-serif';
  fpCtx.fillText('IND', 4, 75);
  fpCtx.fillStyle = '#000000';
  fpCtx.font = 'bold 48px monospace';
  fpCtx.fillText('TN 45 SA 2028', 75, 82);

  const frontPlateTex = new THREE.CanvasTexture(frontPlateCanvas);
  const frontPlate = new THREE.Mesh(
    new THREE.PlaneGeometry(0.52, 0.13),
    new THREE.MeshBasicMaterial({ map: frontPlateTex })
  );
  frontPlate.position.set(0, 0.38, 2.275);
  etiosGroup.add(frontPlate);

  // Left & Right Fog Lamp Housings (Black Bezels with Round Fog Lamps)
  [-0.64, 0.64].forEach((x) => {
    const fogBezel = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.16, 0.08),
      satinBlackTrim
    );
    fogBezel.position.set(x, 0.41, 2.22);
    etiosGroup.add(fogBezel);

    const fogLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.03, 16),
      chromeMaterial
    );
    fogLens.rotation.x = Math.PI / 2;
    fogLens.position.set(x, 0.41, 2.26);
    etiosGroup.add(fogLens);
  });

  // Authentic Teardrop Headlamp Units (Swept-back from grille to fender)
  [-0.66, 0.66].forEach((x) => {
    const hlGroup = new THREE.Group();
    hlGroup.position.set(x, 0.81, 2.05);
    hlGroup.rotation.y = x > 0 ? 0.22 : -0.22;

    // Outer clear cover with dual reflectors
    const hlLens = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.2, 0.28),
      headlightMaterial
    );
    hlLens.castShadow = true;
    hlGroup.add(hlLens);

    etiosGroup.add(hlGroup);
  });

  // Dual Headlight Volumetric Highway Beams
  const leftHeadlightBeam = new THREE.SpotLight(
    0xfffaed,
    3.0,
    35,
    Math.PI / 7,
    0.35,
    1.2
  );
  leftHeadlightBeam.position.set(-0.66, 0.81, 2.18);
  leftHeadlightBeam.target.position.set(-0.66, 0.1, 22);
  etiosGroup.add(leftHeadlightBeam);
  etiosGroup.add(leftHeadlightBeam.target);

  const rightHeadlightBeam = new THREE.SpotLight(
    0xfffaed,
    3.0,
    35,
    Math.PI / 7,
    0.35,
    1.2
  );
  rightHeadlightBeam.position.set(0.66, 0.81, 2.18);
  rightHeadlightBeam.target.position.set(0.66, 0.1, 22);
  etiosGroup.add(rightHeadlightBeam);
  etiosGroup.add(rightHeadlightBeam.target);

  // -------------------------------------------------------------
  // 5. TALL SEDAN GREENHOUSE (Height: 1.51m, Upright Pillars & Roof)
  // -------------------------------------------------------------
  // Passenger Roof Structure (Gentle arc with subtle roof stiffening ridges)
  const roofGeo = new THREE.BoxGeometry(1.48, 0.58, 2.12);
  const roof = new THREE.Mesh(roofGeo, paintMaterial);
  roof.position.set(0, 1.25, -0.06);
  roof.castShadow = true;
  etiosGroup.add(roof);

  // Subtle Roof Stiffening Corrugations (Etios hallmark weight-saving feature)
  [-0.34, 0.34].forEach((x) => {
    const corrugation = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.015, 1.8),
      paintMaterial
    );
    corrugation.position.set(x, 1.545, -0.06);
    etiosGroup.add(corrugation);
  });

  // Short Roof-Mounted Radio Antenna
  const antennaStalk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.006, 0.01, 0.28, 8),
    satinBlackTrim
  );
  antennaStalk.rotation.x = -0.55;
  antennaStalk.position.set(0, 1.62, -0.92);
  etiosGroup.add(antennaStalk);

  // Windshield (Front Sloped Glass at ~48 degrees)
  const frontWindshield = new THREE.Mesh(
    new THREE.PlaneGeometry(1.44, 0.88),
    automotiveGlass
  );
  frontWindshield.position.set(0, 1.22, 0.98);
  frontWindshield.rotation.x = -0.52;
  etiosGroup.add(frontWindshield);

  // Rear Windshield (Sloping into High Boot)
  const rearWindshield = new THREE.Mesh(
    new THREE.PlaneGeometry(1.42, 0.86),
    automotiveGlass
  );
  rearWindshield.position.set(0, 1.22, -1.1);
  rearWindshield.rotation.x = 0.52;
  rearWindshield.rotation.y = Math.PI;
  etiosGroup.add(rearWindshield);

  // Left & Right Glasshouse (Front Window, Rear Window & C-Pillar Quarter Glass)
  [-0.75, 0.75].forEach((x) => {
    const sideGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(2.08, 0.48),
      automotiveGlass
    );
    sideGlass.position.set(x, 1.24, -0.06);
    sideGlass.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
    etiosGroup.add(sideGlass);

    // Matte Black B-Pillar Trim
    const bPillar = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.52, 0.14),
      satinBlackTrim
    );
    bPillar.position.set(x, 1.24, 0.08);
    etiosGroup.add(bPillar);

    // Authentic Triangular C-Pillar Quarter Window Divider
    const cPillarDivider = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.48, 0.06),
      satinBlackTrim
    );
    cPillarDivider.position.set(x, 1.23, -0.72);
    etiosGroup.add(cPillarDivider);
  });

  // Interior Passenger Cab Silhouette (Dashboard & Headrests visible through glass)
  const dashGeo = new THREE.BoxGeometry(1.36, 0.22, 0.44);
  const dash = new THREE.Mesh(dashGeo, satinBlackTrim);
  dash.position.set(0, 0.94, 0.74);
  etiosGroup.add(dash);

  // Steering Wheel (Right-Hand Drive for Indian Market)
  const steeringWheel = new THREE.Mesh(
    new THREE.TorusGeometry(0.12, 0.018, 8, 20),
    satinBlackTrim
  );
  steeringWheel.position.set(0.36, 1.04, 0.58);
  steeringWheel.rotation.x = 0.45;
  etiosGroup.add(steeringWheel);

  // Front & Rear Seats with Headrests
  [
    { x: -0.34, z: 0.28 },
    { x: 0.34, z: 0.28 },
    { x: -0.34, z: -0.42 },
    { x: 0.34, z: -0.42 },
  ].forEach((pos) => {
    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.48, 0.42),
      satinBlackTrim
    );
    seat.position.set(pos.x, 0.86, pos.z);
    etiosGroup.add(seat);

    const headrest = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.12, 0.1),
      satinBlackTrim
    );
    headrest.position.set(pos.x, 1.18, pos.z);
    etiosGroup.add(headrest);
  });

  // -------------------------------------------------------------
  // 6. HIGH-DECK NOTCHBACK BOOT & REAR FASCIA (595L Boot Capacity)
  // -------------------------------------------------------------
  // High Decklid Boot (Famous tall squared-off Etios trunk design)
  const bootLidGeo = new THREE.BoxGeometry(1.64, 0.42, 0.98);
  const bootLid = new THREE.Mesh(bootLidGeo, paintMaterial);
  bootLid.position.set(0, 0.92, -1.62);
  bootLid.castShadow = true;
  etiosGroup.add(bootLid);

  // Rear Boot Plaque with Canvas: Chrome Garnish Bar, Toyota Logo, ETIOS & GD Badges, HSRP Plate
  const rearBootPlaqueGeo = new THREE.PlaneGeometry(1.22, 0.44);
  const rearBootPlaque = new THREE.Mesh(
    rearBootPlaqueGeo,
    new THREE.MeshStandardMaterial({
      map: textures.bootTex,
      roughness: 0.3,
      metalness: 0.6,
    })
  );
  rearBootPlaque.rotation.y = Math.PI;
  rearBootPlaque.position.set(0, 0.88, -2.125);
  etiosGroup.add(rearBootPlaque);

  // Rear Bumper with High Departure Angle
  const rearBumperGeo = new THREE.BoxGeometry(1.68, 0.48, 0.38);
  const rearBumper = new THREE.Mesh(rearBumperGeo, paintMaterial);
  rearBumper.position.set(0, 0.54, -2.04);
  rearBumper.castShadow = true;
  etiosGroup.add(rearBumper);

  // Rear Red Corner Reflectors on Bumper
  [-0.64, 0.64].forEach((x) => {
    const refGeo = new THREE.BoxGeometry(0.14, 0.035, 0.02);
    const reflector = new THREE.Mesh(
      refGeo,
      new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        roughness: 0.2,
        emissive: 0x991b1b,
        emissiveIntensity: 0.5,
      })
    );
    reflector.position.set(x, 0.46, -2.235);
    etiosGroup.add(reflector);
  });

  // Vertical Corner Taillights Flanking the Boot (Red / Clear / Amber Segmentation)
  [-0.71, 0.71].forEach((x) => {
    const tlGroup = new THREE.Group();
    tlGroup.position.set(x, 0.86, -2.06);
    tlGroup.rotation.y = x > 0 ? -Math.PI / 1.05 : Math.PI / 1.05;

    const tailUnit = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.44, 0.22),
      taillightMaterial
    );
    tlGroup.add(tailUnit);

    etiosGroup.add(tlGroup);
  });

  // Soft Ambient Taillight Illumination
  const tailGlow = new THREE.PointLight(0xcc1122, 1.4, 6);
  tailGlow.position.set(0, 0.86, -2.35);
  etiosGroup.add(tailGlow);

  // -------------------------------------------------------------
  // 7. AUTHENTIC 15-INCH ALLOY WHEELS & HIGH-PROFILE TIRES (185/60 R15)
  // -------------------------------------------------------------
  const wheelsList: THREE.Group[] = [];
  // Wheelbase: 2.55m (z = ±1.275m), Half-track: 0.74m, Ground-height: 0.31m
  const wheelPositions = [
    { x: -0.76, y: 0.31, z: 1.275, isLeft: true },
    { x: 0.76, y: 0.31, z: 1.275, isLeft: false },
    { x: -0.76, y: 0.31, z: -1.275, isLeft: true },
    { x: 0.76, y: 0.31, z: -1.275, isLeft: false },
  ];

  const tireGeometry = new THREE.CylinderGeometry(0.31, 0.31, 0.21, 28);
  const alloyRimDiscGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.22, 24);

  wheelPositions.forEach((pos) => {
    const wheelAssembly = new THREE.Group();
    wheelAssembly.position.set(pos.x, pos.y, pos.z);

    // Tire
    const tire = new THREE.Mesh(tireGeometry, tireRubber);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    wheelAssembly.add(tire);

    // 8-Spoke Alloy Face
    const rimDisc = new THREE.Mesh(alloyRimDiscGeo, alloyWheelMat);
    rimDisc.rotation.z = Math.PI / 2;
    wheelAssembly.add(rimDisc);

    // Chrome Center Hub Cap
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.23, 16),
      chromeMaterial
    );
    hub.rotation.z = Math.PI / 2;
    wheelAssembly.add(hub);

    etiosGroup.add(wheelAssembly);
    wheelsList.push(wheelAssembly);
  });

  // -------------------------------------------------------------
  // 8. PHOTOREALISTIC GROUND CONTACT AMBIENT OCCLUSION SHADOW
  // -------------------------------------------------------------
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 512;
  const sCtx = shadowCanvas.getContext('2d')!;
  const shadowGrad = sCtx.createRadialGradient(128, 256, 20, 128, 256, 220);
  shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
  shadowGrad.addColorStop(0.35, 'rgba(0, 0, 0, 0.5)');
  shadowGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.15)');
  shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = shadowGrad;
  sCtx.fillRect(0, 0, 256, 512);

  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 4.8),
    new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    })
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.set(0, 0.015, 0);
  etiosGroup.add(shadowPlane);

  return {
    group: etiosGroup,
    wheels: wheelsList,
    headlights: [leftHeadlightBeam, rightHeadlightBeam],
    tailGlow,
  };
}
