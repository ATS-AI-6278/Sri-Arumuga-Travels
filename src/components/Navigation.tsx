import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { CONTACT_DATA, telHref } from '../lib/contact';
import { useI18n } from '../i18n/I18nProvider';

interface NavigationProps {
  onEnquiryClick: () => void;
  activeSection: string;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

type NavItem = { label: string; to: string };

export const Navigation: React.FC<NavigationProps> = ({
  onEnquiryClick,
  activeSection,
  mobileOpen,
  onMobileOpenChange,
}) => {
  const { t, toggleLocale } = useI18n();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const solid = isScrolled || mobileOpen || !isHome;

  const primaryLinks = useMemo<NavItem[]>(
    () => [
      { label: t.nav.services, to: '/services' },
      { label: t.nav.destinations, to: '/locations' },
      { label: t.nav.blog, to: '/blog' },
    ],
    [t]
  );

  const secondaryLinks = useMemo<NavItem[]>(
    () =>
      isHome
        ? [
            { label: t.nav.trust, to: '/#trust' },
            { label: t.nav.story, to: '/#story' },
            { label: t.nav.faq, to: '/#faq' },
          ]
        : [],
    [t, isHome]
  );

  const menuLinks = useMemo<NavItem[]>(
    () => [
      { label: t.nav.home, to: '/' },
      ...primaryLinks,
      ...secondaryLinks,
      { label: t.nav.enquire, to: '/contact' },
    ],
    [t, primaryLinks, secondaryLinks]
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onMobileOpenChange(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen, onMobileOpenChange]);

  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      window.removeEventListener('keydown', onKey);
    };
  }, [moreOpen]);

  const langBtnClass = solid
    ? 'border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]'
    : 'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/18';

  const linkClass = (active: boolean) =>
    `px-2.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
      solid
        ? active
          ? 'text-[var(--color-accent-text)] bg-[var(--color-accent-soft)]'
          : 'text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]'
        : active
          ? 'text-white bg-white/15'
          : 'text-white/75 hover:text-white hover:bg-white/10'
    }`;

  const renderDesktopLink = (link: NavItem) => {
    if (link.to.includes('#')) {
      const hash = link.to.split('#')[1];
      const active = isHome && activeSection === hash;
      return (
        <a key={link.to} href={link.to} className={linkClass(active)} aria-current={active ? 'true' : undefined}>
          {link.label}
        </a>
      );
    }
    return (
      <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => linkClass(isActive)}>
        {link.label}
      </NavLink>
    );
  };

  const secondaryActive = secondaryLinks.some((l) => {
    const hash = l.to.split('#')[1];
    return isHome && activeSection === hash;
  });

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          solid
            ? 'bg-[color-mix(in_srgb,var(--color-bg)_92%,white)]/95 backdrop-blur-xl border-b border-[var(--color-line)] shadow-[0_8px_30px_rgba(31,26,23,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-[var(--header-h)] flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 min-w-0"
            aria-label={`${t.brand.name} ${t.nav.homeAria}`}
            onClick={() => onMobileOpenChange(false)}
          >
            <picture>
              <source srcSet="/logo-nav.webp" type="image/webp" />
              <img
                src="/logo-nav.png"
                alt="Sri Arumuga Travels"
                width={40}
                height={31}
                className={`h-8 w-auto rounded-md object-contain ${
                  solid
                    ? 'shadow-sm ring-1 ring-[var(--color-line)]'
                    : 'shadow-sm ring-1 ring-white/35 bg-[color-mix(in_srgb,var(--color-bg)_88%,white)]/90'
                }`}
                decoding="async"
              />
            </picture>
            <div className="leading-tight min-w-0">
              <div
                className={`font-display text-[14px] sm:text-[15px] font-semibold tracking-wide truncate ${
                  solid ? 'text-[var(--color-ink)]' : 'text-white'
                }`}
              >
                {t.brand.shortName}
              </div>
              <div
                className={`hidden sm:block text-xs uppercase tracking-[0.16em] font-semibold truncate ${
                  solid ? 'text-[var(--color-accent-text)]' : 'text-[var(--color-accent-soft)]'
                }`}
              >
                {t.brand.navSubtitle}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label={t.nav.primaryNav}>
            {primaryLinks.map(renderDesktopLink)}
            {secondaryLinks.length > 0 && (
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  className={`${linkClass(secondaryActive)} inline-flex items-center gap-1`}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  {t.nav.more}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} aria-hidden />
                </button>
                {moreOpen && (
                  <div
                    role="menu"
                    className="absolute top-full right-0 mt-2 min-w-[10.5rem] rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-lift)] p-1.5 z-50"
                  >
                    {secondaryLinks.map((link) => {
                      const hash = link.to.split('#')[1];
                      const active = isHome && activeSection === hash;
                      return (
                        <a
                          key={link.to}
                          href={link.to}
                          role="menuitem"
                          onClick={() => setMoreOpen(false)}
                          className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                            active
                              ? 'text-[var(--color-accent-text)] bg-[var(--color-accent-soft)]'
                              : 'text-[var(--color-ink-soft)] hover:bg-[var(--color-surface-2)]'
                          }`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleLocale}
              className={`hidden lg:inline-flex items-center px-2.5 py-1.5 rounded-full text-sm font-semibold ${langBtnClass}`}
              aria-label={t.lang.switchAria}
            >
              {t.lang.switchTo}
            </button>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className={`inline-flex items-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-full transition-all text-xs font-semibold ${
                solid
                  ? 'border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-accent)] shadow-sm'
                  : 'border border-white/25 bg-white/12 text-white backdrop-blur-md hover:bg-white/20'
              }`}
              aria-label={`${t.nav.call} ${CONTACT_DATA.formattedPhone1}`}
              title={CONTACT_DATA.formattedPhone1}
            >
              <Phone
                className={`w-3.5 h-3.5 ${solid ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent-soft)]'}`}
                aria-hidden
              />
              <span className="hidden sm:inline font-bold tracking-wide font-mono">
                {CONTACT_DATA.formattedPhone1}
              </span>
            </a>
            <button
              type="button"
              onClick={onEnquiryClick}
              className="btn btn-primary !py-1.5 !px-3 sm:px-3.5 inline-flex text-sm"
            >
              {t.nav.enquireBtn}
            </button>
            <button
              type="button"
              className={`lg:hidden p-2 rounded-xl ${
                solid
                  ? 'border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]'
                  : 'border border-white/25 bg-white/10 text-white backdrop-blur-md'
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => onMobileOpenChange(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[45] bg-[var(--color-bg)] lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.mobileNav}
        >
          <nav className="flex flex-col gap-1" aria-label={t.nav.mobileNav}>
            {menuLinks.map((link) =>
              link.to.includes('#') ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => onMobileOpenChange(false)}
                  className="font-display text-2xl py-2 text-[var(--color-ink)] hover:text-[var(--color-accent-text)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => onMobileOpenChange(false)}
                  className="font-display text-2xl py-2 text-[var(--color-ink)] hover:text-[var(--color-accent-text)]"
                >
                  {link.label}
                </Link>
              )
            )}
            <button
              type="button"
              onClick={toggleLocale}
              className="mt-4 self-start inline-flex items-center px-4 py-2.5 rounded-full text-sm font-semibold border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]"
              aria-label={t.lang.switchAria}
            >
              {t.lang.switchTo}
            </button>
          </nav>
          <div className="flex flex-col gap-3 border-t border-[var(--color-line)] pt-6">
            <button
              type="button"
              className="btn btn-primary w-full min-h-12"
              onClick={() => {
                onMobileOpenChange(false);
                onEnquiryClick();
              }}
            >
              {t.nav.enquireBtn}
            </button>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-accent-text)] py-2"
            >
              <Phone className="w-4 h-4 text-[var(--color-accent)]" aria-hidden />
              {CONTACT_DATA.formattedPhone1}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
