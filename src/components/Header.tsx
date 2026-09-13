import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, MapPin, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Bairros Atendidos', href: '#cobertura' },
    { name: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notice Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[11px] border border-emerald-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
              ATENDIMENTO EM CONTAGEM
            </span>
            <span className="text-slate-300 text-xs">
              Atendimento ágil no mesmo dia ou agendamento com hora marcada
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Agende o dia e horário ideal
            </span>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                CONTACT_INFO.defaultWhatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-top-whatsapp-link"
              className="flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
            : 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/80 py-3.5'
        }`}
        aria-label="Navegação Principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo-header"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">💧</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight flex items-center gap-1">
                DESENTUPIDORA <span className="text-amber-400">CONTAGEM</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Desentupimento e Hidrojateamento
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:underline underline-offset-8 decoration-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Direct WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                CONTACT_INFO.defaultWhatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white/20" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center sm:hidden gap-2">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                CONTACT_INFO.defaultWhatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp"
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  CONTACT_INFO.defaultWhatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp (Atendimento ou Agendamento)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
