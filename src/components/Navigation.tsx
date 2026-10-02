import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';

interface NavigationProps {
  onEnquiryClick: () => void;
  activeSection: string;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Why us', href: '#trust' },
  { label: 'Our story', href: '#story' },
  { label: 'Enquire', href: '#enquire' },
];

export const Navigation: React.FC<NavigationProps> = ({
  onEnquiryClick,
  activeSection,
  mobileOpen,
  onMobileOpenChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          isScrolled || mobileOpen
            ? 'bg-[color-mix(in_srgb,var(--color-bg)_92%,white)]/95 backdrop-blur-xl border-b border-[var(--color-line)] shadow-[0_8px_30px_rgba(31,26,23,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 h-[var(--header-h)] flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="flex items-center gap-3"
            aria-label={`${BRAND.name} home`}
            onClick={() => onMobileOpenChange(false)}
          >
            <div className="w-9 h-9 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent-text)] shadow-sm">
              <span className="font-display text-sm font-bold">SA</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-[15px] font-semibold tracking-wide text-[var(--color-ink)]">
                Sri Arumuga
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] font-semibold">
                Travels · Srivilliputtur
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? 'text-[var(--color-accent-text)] bg-[var(--color-accent-soft)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] text-sm font-medium text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden />
              <span className="tabular-nums">{CONTACT_DATA.formattedPhone1}</span>
            </a>
            <button
              type="button"
              onClick={onEnquiryClick}
              className="btn btn-primary !py-2 !px-4 hidden sm:inline-flex text-sm"
            >
              Enquire
            </button>
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
          className="fixed inset-0 z-[45] bg-[var(--color-bg)] lg:hidden pt-24 px-6 pb-[calc(var(--sticky-cta-h)+1.25rem)] flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onMobileOpenChange(false)}
                className="font-display text-2xl py-2 text-[var(--color-ink)] hover:text-[var(--color-accent-text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 border-t border-[var(--color-line)] pt-6">
            <a href={telHref(CONTACT_DATA.phone1)} className="btn btn-primary w-full min-h-12">
              <Phone className="w-4 h-4" aria-hidden />
              Call {CONTACT_DATA.formattedPhone1}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full min-h-12"
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-secondary w-full min-h-12"
              onClick={() => {
                onMobileOpenChange(false);
                onEnquiryClick();
              }}
            >
              Enquiry form
            </button>
          </div>
        </div>
      )}
    </>
  );
};
