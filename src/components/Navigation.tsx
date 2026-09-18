import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Eye } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface NavigationProps {
  onContactClick: () => void;
  onOpenInspection?: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onContactClick,
  onOpenInspection,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Experience', href: '#experience' },
    { label: 'Journey', href: '#journey' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#080a0f]/90 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 focus:outline-none group"
            aria-label="Sri Arumuga Travels Home"
          >
            <div className="w-9 h-9 rounded-sm border border-[#d4af37]/60 bg-black/60 flex items-center justify-center text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.15)] group-hover:border-[#d4af37] transition-colors">
              <span className="font-display text-sm font-bold tracking-tight">SA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-semibold tracking-[0.2em] text-[#f4f4f6] uppercase">
                Sri Arumuga
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-medium uppercase -mt-0.5">
                Travels
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-medium text-white/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-white relative py-1 ${
                    isActive ? 'text-[#d4af37]' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Direct Phone & Main CTA */}
          <div className="flex items-center gap-3">
            {onOpenInspection && (
              <button
                onClick={onOpenInspection}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 text-xs text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all tracking-wider uppercase font-medium"
                title="Inspect real Toyota Etios GD 3D model in neutral studio"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Studio Inspection</span>
              </button>
            )}

            <a
              href={`tel:${CONTACT_DATA.phone1}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-white/10 bg-white/[0.03] text-xs text-white/80 hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all font-mono"
              title="Call Sri Arumuga Travels directly"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span className="tracking-wider">{CONTACT_DATA.phone1}</span>
            </a>

            <button
              onClick={onContactClick}
              className="px-5 py-2 rounded-sm bg-[#d4af37] hover:bg-[#ebd06b] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] active:scale-95"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm text-white/80 hover:text-white border border-white/10 bg-white/5"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080a0f]/98 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Sri Arumuga Travels
            </span>
            <div className="flex flex-col gap-5">
              {onOpenInspection && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInspection();
                  }}
                  className="flex items-center gap-3 text-left font-display text-xl tracking-wider text-[#d4af37] hover:text-white transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  <span>Studio Inspection</span>
                </button>
              )}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl tracking-wider text-white/90 hover:text-[#d4af37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-3.5">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
              Direct Contact Lines
            </span>
            <a
              href={`tel:${CONTACT_DATA.phone1}`}
              className="flex items-center justify-between p-3.5 rounded-sm border border-white/15 bg-white/5 text-white"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="font-mono text-sm tracking-wider">{CONTACT_DATA.phone1}</span>
              </div>
              <span className="text-xs text-[#d4af37] uppercase font-semibold">Call Line 1</span>
            </a>

            <a
              href={`tel:${CONTACT_DATA.phone2}`}
              className="flex items-center justify-between p-3.5 rounded-sm border border-white/15 bg-white/5 text-white"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="font-mono text-sm tracking-wider">{CONTACT_DATA.phone2}</span>
              </div>
              <span className="text-xs text-[#d4af37] uppercase font-semibold">Call Line 2</span>
            </a>

            <a
              href={`https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(
                CONTACT_DATA.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 rounded-sm bg-emerald-600 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
