import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Estou em Contagem e gostaria de solicitar atendimento ou agendar um horário para desentupimento.'
  )}`;

  return (
    <>
      {/* DESKTOP / TABLET FLOATING WHATSAPP BUTTON (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-2">
        {/* Tooltip bubble */}
        {showTooltip && (
          <div className="bg-slate-900 text-white text-xs font-medium py-2 px-3.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2 max-w-xs animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Atendimento ou agendamento em Contagem!</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* WhatsApp Round Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chamar no WhatsApp"
          className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
          <MessageCircle className="w-7 h-7 fill-white/20 relative z-10" />
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM CONVERSION BAR - 100% WhatsApp */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 flex items-center shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-extrabold text-sm uppercase tracking-wide shadow-lg active:bg-emerald-500 transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-white/20 flex-shrink-0" />
          <span>Chamar no WhatsApp (Atendimento ou Agendamento)</span>
        </a>
      </div>
    </>
  );
};
