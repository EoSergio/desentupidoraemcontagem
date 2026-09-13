import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/landingData';

export const FAQSection: React.FC = () => {
  // Track open item indices (default first 2 open for readability)
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-amber-800 bg-amber-100/70 border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Perguntas Frequentes
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Dúvidas Frequentes sobre Nossos Serviços em Contagem
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Respostas transparentes sobre funcionamento, métodos e agendamento de horários.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-amber-100 text-amber-700 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Ainda ficou com alguma dúvida sobre o seu encanamento?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Fale diretamente conosco no WhatsApp para esclarecer dúvidas sobre o seu caso ou agendar a data e o horário mais conveniente.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Olá! Tenho uma dúvida sobre desentupimento em Contagem e gostaria de conversar no WhatsApp.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tirar Dúvida no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
