import React, { Suspense, useCallback, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SiteFooter } from './components/SiteFooter';
import { Analytics } from './components/Analytics';
import { SeoHead } from './components/seo/SeoHead';
import { RouteJsonLd } from './components/seo/RouteJsonLd';
import { useI18n } from './i18n/I18nProvider';
import { HomePage } from './pages/HomePage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServicePage } from './pages/ServicePage';
import { LocationsHubPage } from './pages/LocationsHubPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
const BlogIndexPage = React.lazy(() =>
  import('./pages/blog/BlogIndexPage').then((m) => ({ default: m.BlogIndexPage }))
);
const BlogPostPage = React.lazy(() =>
  import('./pages/blog/BlogPostPage').then((m) => ({ default: m.BlogPostPage }))
);
const BlogCategoryPage = React.lazy(() =>
  import('./pages/blog/BlogCategoryPage').then((m) => ({ default: m.BlogCategoryPage }))
);
const BlogTagPage = React.lazy(() =>
  import('./pages/blog/BlogTagPage').then((m) => ({ default: m.BlogTagPage }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollToEnquireRef = useRef<(destination?: string) => void>(() => undefined);

  const onEnquiryClick = useCallback(() => {
    if (isHome) {
      scrollToEnquireRef.current();
    } else {
      navigate('/contact');
    }
  }, [isHome, navigate]);

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-ink)]">
      <a href="#main-content" className="skip-link">
        {t.common.skipToContent}
      </a>
      <Analytics />
      <SeoHead />
      <RouteJsonLd />
      <ScrollToTop />

      <Navigation
        activeSection={activeSection}
        onEnquiryClick={onEnquiryClick}
        mobileOpen={mobileNavOpen}
        onMobileOpenChange={setMobileNavOpen}
      />

      <main id="main-content" className="relative z-10 w-full flex flex-col">
        <Suspense fallback={<div className="section-shell pt-[calc(var(--header-h)+2rem)] text-center text-[var(--color-muted)]">Loading…</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onActiveSection={setActiveSection}
                registerScrollToEnquire={(fn) => {
                  scrollToEnquireRef.current = fn;
                }}
              />
            }
          />
          <Route path="/services" element={<ServicesHubPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations" element={<LocationsHubPage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/category/:categorySlug" element={<BlogCategoryPage />} />
          <Route path="/blog/tag/:tagSlug" element={<BlogTagPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
