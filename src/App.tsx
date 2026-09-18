import React, { useState, useEffect, useCallback } from 'react';
import { CinematicCanvas, InspectionAngle } from './components/CinematicCanvas';
import { StudioInspectionOverlay } from './components/StudioInspectionOverlay';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { ExperienceSection } from './components/ExperienceSection';
import { JourneyVisualSection } from './components/JourneyVisualSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { QuickContactBar } from './components/QuickContactBar';
import { Eye } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [inspectionMode, setInspectionMode] = useState(false);
  const [inspectionAngle, setInspectionAngle] = useState<InspectionAngle>('front34');

  // Prevent background scroll when in Studio Inspection Mode
  useEffect(() => {
    if (inspectionMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [inspectionMode]);

  // Smooth scroll tracking driving the cinematic brand film
  useEffect(() => {
    const handleScroll = () => {
      if (inspectionMode) return;
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setScrollProgress(progress);

      // Section detection
      const sections = ['hero', 'approach', 'experience', 'journey', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inspectionMode]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#08090d] text-[#f4f4f6] selection:bg-[#d4af37] selection:text-black">
      {/* 1. Cinematic Background Layer: Toyota Etios GD & Highway Storytelling / Studio */}
      <CinematicCanvas
        scrollProgress={scrollProgress}
        inspectionMode={inspectionMode}
        inspectionAngle={inspectionAngle}
      />

      {/* 2. Studio Inspection Overlay (When in Neutral Studio Inspection Mode) */}
      {inspectionMode ? (
        <StudioInspectionOverlay
          activeAngle={inspectionAngle}
          onSelectAngle={setInspectionAngle}
          onExitStudio={() => setInspectionMode(false)}
        />
      ) : (
        <>
          {/* 3. Clean Minimal Floating Navigation */}
          <Navigation
            activeSection={activeSection}
            onContactClick={() => setContactModalOpen(true)}
            onOpenInspection={() => setInspectionMode(true)}
          />

          {/* Floating Studio Inspection Quick Pill */}
          <button
            onClick={() => setInspectionMode(true)}
            className="fixed top-24 right-6 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-[#d4af37] hover:text-black transition-all group"
            title="Inspect authentic Toyota Etios GD 3D model in studio lighting"
          >
            <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>Studio Inspection</span>
          </button>

          {/* 4. Main Brand Film & Business Presentation */}
          <main className="relative z-10 w-full flex flex-col">
            {/* HERO */}
            <HeroSection
              onContactClick={() => setContactModalOpen(true)}
              onExploreClick={() => scrollToSection('approach')}
            />

            {/* OUR APPROACH */}
            <ApproachSection onContactClick={() => setContactModalOpen(true)} />

            {/* EXPERIENCE (Comfort, Reliability, Professional Service, Care) */}
            <ExperienceSection onContactClick={() => setContactModalOpen(true)} />

            {/* JOURNEY (Cinematic Toyota Etios Sequence) */}
            <JourneyVisualSection onContactClick={() => setContactModalOpen(true)} />

            {/* ABOUT SRI ARUMUGA TRAVELS */}
            <AboutSection onContactClick={() => setContactModalOpen(true)} />

            {/* CONTACT (Planning Your Next Journey?) */}
            <ContactSection />
          </main>

          {/* 5. Discrete Quick Contact Pill */}
          <QuickContactBar onOpenModal={() => setContactModalOpen(true)} />
        </>
      )}

      {/* 6. Direct Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
