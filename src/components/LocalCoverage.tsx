import React from 'react';
import { MapPin, Navigation, MessageCircle } from 'lucide-react';
import { CONTAGEM_REGIONS, CONTACT_INFO } from '../data/landingData';

export const LocalCoverage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar ou solicitar atendimento para desentupimento no meu bairro em Contagem.'
  )}`;

  return (
    <section id="cobertura" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with requested Title and Subtitle */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-emerald-800 bg-emerald-50 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Atendimento Local em Contagem
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Cobertura Completa em Todos os Bairros de Contagem e Região
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Localização de fácil acesso a todas as regiões de Contagem, para atender seu chamado no menor tempo possível, sem cobrar taxa de deslocamento ou visita.
          </p>
        </div>

        {/* Structured Grid of Contagem Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTAGEM_REGIONS.map((regionGroup) => (
            <div
              key={regionGroup.region}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                  <Navigation className="w-4 h-4 text-amber-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    {regionGroup.region}
                  </h3>
                </div>

                <ul className="space-y-1.5">
                  {regionGroup.neighborhoods.map((bairro) => (
                    <li key={bairro} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>{bairro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                <span>Atendimento ágil</span>
                <span className="text-emerald-700 font-bold">Sem taxa de deslocamento</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scheduling / WhatsApp Prompt */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Não encontrou seu bairro listado acima? Atendemos todas as regiões e proximidades de Contagem.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-whatsapp-coverage-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar ou Agendar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
