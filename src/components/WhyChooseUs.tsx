import React from 'react';
import { 
  CheckCircle2, 
  MessageCircle,
  Calendar,
  Clock
} from 'lucide-react';
import { WORKFLOW_STEPS, CONTACT_INFO } from '../data/landingData';

export const WhyChooseUs: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar um horário ou solicitar atendimento para desentupimento em Contagem.'
  )}`;

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-amber-800 bg-amber-100/60 border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            Processo Simples e Transparente
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Como Funciona o Atendimento em Contagem
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Do primeiro contato à conclusão do serviço no seu imóvel: atendimento direto, flexibilidade de horários e transparência.
          </p>
        </div>

        {/* STEP-BY-STEP VISUAL WORKFLOW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-black text-lg flex items-center justify-center shadow-md">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {stepItem.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-2 leading-snug">
                  {stepItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Progress visual */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Etapa {index + 1} de 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Agende com facilidade ou solicite atendimento rápido</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nossa equipe atende residências, condomínios e comércios em todas as regiões de Contagem.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-whatsapp-workflow-cta"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950/20" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
