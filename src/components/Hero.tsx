import React from 'react';
import { MessageCircle, Calendar, MapPin, CheckCircle2, Wrench, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    CONTACT_INFO.defaultWhatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-8 pb-16 md:pt-12 md:pb-20 border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Atendimento em Contagem e Região</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Opção de Agendamento de Horário</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy & WhatsApp CTA */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Desentupidora em <span className="text-amber-400">Contagem</span> e Região
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              Solução ágil e limpa para desentupimento de esgotos, ralos, pias, vasos sanitários e caixas de gordura{' '}
              <span className="text-amber-300 font-semibold underline decoration-amber-500/60 underline-offset-4">
                sem quebrar pisos ou paredes
              </span>
              . Solicite atendimento rápido ou <strong className="text-white">agende o melhor dia e horário</strong> diretamente pelo WhatsApp!
            </p>

            {/* CALL TO ACTION (CTA) - Focused on WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp-primary"
                className="group flex items-center justify-center sm:justify-start gap-3.5 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white fill-white/30" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-emerald-100 font-medium">Atendimento Rápido ou Agendamento</span>
                  <span className="block text-base sm:text-lg font-extrabold leading-tight">Chamar no WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Micro-assurances */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                Residências, condomínios, empresas e indústrias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                Pagamento facilitado no PIX ou cartão
              </span>
            </div>
          </div>

          {/* Service & Scheduling Box */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Central de Atendimento Contagem
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  DISPONÍVEL
                </span>
              </div>

              {/* Status information */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Localização em Contagem:</span>
                    <span className="text-slate-200 font-semibold block text-sm">
                      Fácil acesso a todas as regiões da cidade
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Agendamento de Horário:</span>
                    <span className="text-slate-200 font-semibold block text-sm">
                      Turnos pela manhã ou tarde no seu endereço
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Método de Trabalho:</span>
                    <span className="text-slate-200 font-semibold block text-sm">
                      Máquinas rotativas sem quebrar pisos
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Atendimento Transparente:</span>
                    <span className="text-slate-200 font-semibold block text-sm">
                      Orçamento claro e prévio antes da execução
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp schedule trigger */}
              <div className="mt-5 pt-4 border-t border-slate-700/70">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar ou Agendar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 QUICK ICONS ROW */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Agendamento Flexível</h4>
              <p className="text-xs text-slate-400">Escolha o dia e horário ideal</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Chegada Rápida</h4>
              <p className="text-xs text-slate-400">Fácil acesso em Contagem</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sem Quebra-Quebra</h4>
              <p className="text-xs text-slate-400">Maquinário rotativo limpo</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Equipe Qualificada</h4>
              <p className="text-xs text-slate-400">Profissionais experientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
