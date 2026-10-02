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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
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
        className={`fixed top-0 inset-x-0 z-50 transition-[padding,background-color,border-color] duration-500 ${
          isScrolled || mobileOpen
            ? 'py-3 bg-[color-mix(in_srgb,var(--color-ink)_88%,transparent)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label={`${BRAND.name} home`}
            onClick={() => onMobileOpenChange(false)}
          >
            <div className="w-9 h-9 rounded-sm border border-[var(--color-gold)]/55 bg-black/50 flex items-center justify-center text-[var(--color-gold)]">
              <span className="font-display text-sm font-bold tracking-tight">SA</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold tracking-[0.14em] uppercase text-[var(--color-cream)]">
                Sri Arumuga
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[var(--color-gold)] uppercase">
                Travels · Srivilliputtur
              </span>
            </div>
          </a>

          <nav
            className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium text-white/65"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={`relative py-1 transition-colors hover:text-white ${
                    active ? 'text-[var(--color-gold)]' : ''
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 inset-x-0 h-px bg-[var(--color-gold)]" aria-hidden />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-white/10 bg-white/[0.03] text-xs text-white/80 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-gold)]" aria-hidden />
              <span>{CONTACT_DATA.formattedPhone1}</span>
            </a>
            <button
              type="button"
              onClick={onEnquiryClick}
              className="btn-primary !py-2.5 !px-4 hidden sm:inline-flex"
            >
              Enquire
            </button>
            <button
              type="button"
              className="lg:hidden p-2 rounded-sm border border-white/10 bg-white/5 text-white/85"
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
          className="fixed inset-0 z-[45] bg-[var(--color-ink)]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-[calc(var(--sticky-cta-h)+1.5rem)] flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onMobileOpenChange(false)}
                className="font-display text-2xl tracking-wide text-white/90 hover:text-[var(--color-gold)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <a href={telHref(CONTACT_DATA.phone1)} className="btn-primary w-full">
              <Phone className="w-4 h-4" aria-hidden />
              Call {CONTACT_DATA.formattedPhone1}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              WhatsApp
            </a>
            <button
              type="button"
              className="btn-secondary w-full"
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
