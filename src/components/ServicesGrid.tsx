import React from 'react';
import { 
  AlertTriangle, 
  Droplets, 
  Trash2, 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  Wrench,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data/landingData';
import tecnicoImg from '../assets/images/tecnico_em_servico_1788553005356.jpg';

export const ServicesGrid: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-sky-600" />;
      case 'Toilet':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'Trash2':
        return <Trash2 className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-600" />;
    }
  };

  const generalWhatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Preciso de atendimento ou agendamento de horário para desentupimento em Contagem.'
  )}`;

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-amber-800 bg-amber-50 border border-amber-200">
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
            Serviços Especializados
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Desentupimento Profissional em Contagem
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Desobstrução rápida, limpa e segura para residências, condomínios, comércios e indústrias, sem quebrar pisos.
          </p>
        </div>

        {/* 6-Card Grid (5 Services + 1 High-Conversion CTA Card with Photo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const serviceWhatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <article
                key={service.id}
                id={`card-${service.id}`}
                className="rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {renderIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Problem Trigger */}
                  <div className="p-3 rounded-xl bg-red-50/70 border border-red-100 text-xs">
                    <span className="font-bold text-red-800 block mb-0.5">Sintoma:</span>
                    <p className="text-red-900 leading-relaxed">
                      {service.painTrigger}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                    <span className="font-bold text-emerald-800 block mb-0.5">Nossa Solução:</span>
                    <p className="text-slate-700 leading-relaxed">
                      {service.solution}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Sem quebrar nada
                  </span>

                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-whatsapp-${service.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chamar WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}

          {/* 6th Card: CTA Card with Technician Image */}
          <div
            id="card-cta-tecnico"
            className="rounded-2xl border-2 border-emerald-500/80 bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Image Header with Badge */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
              <img
                src={tecnicoImg}
                alt="Técnico profissional em serviço de desentupimento em Contagem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  Equipe no Local
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  Precisa de Atendimento ou Agendamento?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Converse diretamente conosco no WhatsApp. Você pode solicitar visita rápida ou marcar o dia e período mais conveniente para o seu endereço em Contagem.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                    <Calendar className="w-3 h-3 text-amber-400" /> Horário flexível
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Sem quebrar pisos
                  </span>
                </div>
              </div>

              {/* Direct CTA Button */}
              <div className="pt-4">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-whatsapp-cta-card"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Agendar ou Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="text-amber-400">Atendimento em qualquer tipo de tubulação</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Colunas prediais, galerias pluviais, calhas e caixas de gordura residenciais e comerciais.
            </p>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-whatsapp-services-bottom"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
