import React, { useCallback, useMemo, useRef, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { DestinationsSection } from '../components/DestinationsSection';
import { TrustSection } from '../components/TrustSection';
import { StorySection } from '../components/StorySection';
import { EnquirySection } from '../components/EnquirySection';
import { FaqSection } from '../components/FaqSection';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { DESTINATION_PATH_BY_ID, SERVICE_PATH_BY_ID } from '../lib/seoConfig';
import { useNavigate } from 'react-router-dom';

const SECTION_IDS = ['hero', 'services', 'destinations', 'trust', 'story', 'faq', 'enquire'];

interface HomePageProps {
  onActiveSection?: (id: string) => void;
  onEnquiryClick?: () => void;
  registerScrollToEnquire?: (fn: (destination?: string) => void) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onActiveSection,
  registerScrollToEnquire,
}) => {
  const [enquiryDestination, setEnquiryDestination] = useState('');
  const enquiryFormRef = useRef<HTMLFormElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useScrollSpy(sectionIds, false);
  const navigate = useNavigate();

  React.useEffect(() => {
    onActiveSection?.(activeSection);
  }, [activeSection, onActiveSection]);

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
      }, reducedMotion ? 0 : 400);
    },
    [reducedMotion]
  );

  React.useEffect(() => {
    registerScrollToEnquire?.(scrollToEnquire);
  }, [registerScrollToEnquire, scrollToEnquire]);

  return (
    <>
      <HeroSection onEnquiryClick={() => scrollToEnquire()} />
      <ServicesSection
        onEnquiryClick={() => scrollToEnquire()}
        onServiceNavigate={(id) => {
          const path = SERVICE_PATH_BY_ID[id];
          if (path) navigate(path);
        }}
      />
      <DestinationsSection
        onEnquireRoute={(dest) => scrollToEnquire(dest)}
        onDestinationNavigate={(id) => {
          const path = DESTINATION_PATH_BY_ID[id];
          if (path) navigate(path);
        }}
      />
      <TrustSection />
      <StorySection onEnquiryClick={() => scrollToEnquire()} />
      <FaqSection />
      <EnquirySection initialDestination={enquiryDestination} formRef={enquiryFormRef} />
    </>
  );
};
