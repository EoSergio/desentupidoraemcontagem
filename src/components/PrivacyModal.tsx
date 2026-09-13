import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-3">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs uppercase tracking-wider">Transparência & LGPD</span>
        </div>

        <h3 id="privacy-modal-title" className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
          Política de Privacidade e Proteção de Dados (LGPD)
        </h3>

        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            A <strong>Desentupidora Contagem</strong> valoriza a sua privacidade e segurança. Esta política esclarece como tratamos as informações no âmbito dos atendimentos em Contagem e região, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h4 className="font-bold text-slate-800 text-base mt-4">1. Coleta de Informações</h4>
          <p>
            Coletamos apenas as informações estritamente necessárias para a prestação do serviço de desentupimento ou agendamento solicitado pelo cliente, tais como: nome, WhatsApp de contato, bairro e endereço de atendimento em Contagem. Esses dados são fornecidos voluntariamente quando você clica em nossos botões de contato.
          </p>

          <h4 className="font-bold text-slate-800 text-base mt-4">2. Finalidade do Tratamento</h4>
          <p>
            As informações são utilizadas exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deslocamento da equipe técnica até o endereço solicitado;</li>
            <li>Agendamento do dia e horário escolhidos para o atendimento;</li>
            <li>Elaboração do diagnóstico e orçamento prévio transparente;</li>
            <li>Comunicação sobre o andamento e conclusão do atendimento.</li>
          </ul>

          <h4 className="font-bold text-slate-800 text-base mt-4">3. Não Compartilhamento</h4>
          <p>
            Não comercializamos nem compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade. As informações permanecem em sigilo operacional.
          </p>

          <h4 className="font-bold text-slate-800 text-base mt-4">4. Direitos do Titular</h4>
          <p>
            Você tem o direito de solicitar a confirmação, correção ou exclusão de seus dados de nossa base de contatos a qualquer momento, bastando enviar uma solicitação através do nosso WhatsApp oficial.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
          >
            Entendido e Concordo
          </button>
        </div>
      </div>
    </div>
  );
};
