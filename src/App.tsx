import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocalCoverage } from './components/LocalCoverage';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* 1. HEADER (Cabeçalho Fixo / Sticky) */}
      <Header />

      <main className="flex-grow">
        {/* 2. HERO SECTION (Topo da Página / Acima da Dobra) */}
        <Hero />

        {/* 3. SEÇÃO DE SERVIÇOS DE ALTA DEMANDA */}
        <ServicesGrid />

        {/* 4. SEÇÃO "POR QUE CHAMAR NOSSA EQUIPE EM CONTAGEM?" */}
        <WhyChooseUs />

        {/* 5. SEÇÃO DE COBERTURA LOCAL (SEO Georreferenciado) */}
        <LocalCoverage />

        {/* 6. SEÇÃO DE PERGUNTAS FREQUENTES (FAQ com SEO Schema) */}
        <FAQSection />
      </main>

      {/* 7. RODAPÉ (Footer com Informações Institucionais e LGPD) */}
      <Footer />

      {/* Botões Flutuantes de Ação Rápida (Desktop & Mobile) */}
      <FloatingActions />
    </div>
  );
}
