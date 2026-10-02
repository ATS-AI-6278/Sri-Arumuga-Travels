import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CinematicCanvasLazy } from './components/CinematicCanvasLazy';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { TrustSection } from './components/TrustSection';
import { StorySection } from './components/StorySection';
import { EnquirySection } from './components/EnquirySection';
import { SiteFooter } from './components/SiteFooter';
import { ContactModal } from './components/ContactModal';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { SeoSchema } from './components/SeoSchema';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'services', 'destinations', 'trust', 'story', 'enquire'];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [enquiryDestination, setEnquiryDestination] = useState('');
  const [canvasEnabled, setCanvasEnabled] = useState(false);
  const enquiryFormRef = useRef<HTMLFormElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    if (reducedMotion) {
      setCanvasEnabled(false);
      return;
    }
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setCanvasEnabled(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [reducedMotion]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnquire = useCallback(
    (destination?: string) => {
      if (typeof destination === 'string') {
        setEnquiryDestination(destination);
      }
      document
        .getElementById('enquire')
        ?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      window.setTimeout(() => {
        enquiryFormRef.current
          ?.querySelector<HTMLInputElement>('input')
          ?.focus({ preventScroll: true });
      }, reducedMotion ? 0 : 450);
    },
    [reducedMotion]
  );

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-ink)] text-[var(--color-cream)]">
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <SeoSchema />

      <CinematicCanvasLazy scrollProgress={scrollProgress} enabled={canvasEnabled} />

      <Navigation activeSection={activeSection} onEnquiryClick={() => scrollToEnquire()} />

      <main className="relative z-10 w-full flex flex-col">
        <HeroSection onEnquiryClick={() => scrollToEnquire()} />
        <ServicesSection onEnquiryClick={() => scrollToEnquire()} />
        <DestinationsSection onEnquireRoute={(dest) => scrollToEnquire(dest)} />
        <TrustSection />
        <StorySection onEnquiryClick={() => scrollToEnquire()} />
        <EnquirySection initialDestination={enquiryDestination} formRef={enquiryFormRef} />
      </main>

      <SiteFooter />
      <StickyMobileCTA onEnquiryClick={() => setContactModalOpen(true)} />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onEnquire={() => scrollToEnquire()}
      />
    </div>
  );
}
