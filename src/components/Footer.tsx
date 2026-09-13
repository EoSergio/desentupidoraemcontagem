import React, { useState } from 'react';
import { MessageCircle, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Column 1: Brand & Positioning (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                  <span>💧</span>
                </div>
                <div>
                  <span className="text-lg font-black text-white tracking-tight block leading-tight">
                    DESENTUPIDORA <span className="text-amber-400">CONTAGEM</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium tracking-wide block">
                    Desentupimento e Hidrojateamento
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                Especialistas em desobstrução de esgoto, pias, ralos, vasos sanitários e caixas de gordura em Contagem e região. Atendimento ágil e opção de agendamento de horário com pontualidade.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Agendamento Flexível
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Sem Quebrar Pisos
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Navegação Rápida
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#servicos" className="hover:text-amber-400 transition-colors">
                    Serviços de Desentupimento
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                    Como Funciona o Atendimento
                  </a>
                </li>
                <li>
                  <a href="#cobertura" className="hover:text-amber-400 transition-colors">
                    Bairros Atendidos em Contagem
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-amber-400 transition-colors">
                    Perguntas Frequentes (FAQ)
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="hover:text-amber-400 text-left transition-colors underline decoration-slate-600 underline-offset-4"
                  >
                    Política de Privacidade (LGPD)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Base Info (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Canais de Atendimento
              </h4>

              <address className="not-italic space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Localização:</strong> {CONTACT_INFO.mainAddress}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Atendimento:</strong> Agendamento prévio ou atendimento ágil no mesmo dia
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">WhatsApp Direto:</span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                        CONTACT_INFO.defaultWhatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold underline"
                    >
                      {CONTACT_INFO.whatsappDisplay} (Clique para conversar)
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center md:text-left space-y-1">
              <p>
                © {new Date().getFullYear()} Desentupidora Contagem. Todos os direitos reservados.
              </p>
              <p className="text-[11px] text-slate-600">
                Atendimento técnico especializado em conformidade com as normas sanitárias e ambientais.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                Privacidade & LGPD
              </button>
              <span>•</span>
              <a href="#inicio" className="text-slate-400 hover:text-slate-200 transition-colors">
                Voltar ao Topo ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};
