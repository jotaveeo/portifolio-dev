"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PricingPix } from "./PricingPix";

export function Pricing() {
  return (
    <section className="py-32 px-4 relative bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
        >
          Destrave sua produtividade hoje
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-primary/60 mb-20 max-w-2xl mx-auto"
        >
          Receba o Guia Prático, todos os Prompts Essenciais e garanta seu lugar na nossa futura Comunidade.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-surface-highest p-10 md:p-14 rounded-[32px] w-full shadow-[0_24px_48px_rgba(18,19,23,0.04)] text-left relative overflow-hidden flex flex-col h-full"
          >
            {/* Subtle gradient accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Cartão (Stripe)</h3>
            <div className="mb-8 overflow-hidden flex-shrink-0">
              <span className="text-5xl font-extrabold tracking-tighter text-primary">R$ 47,00</span>
              <span className="text-primary/50 ml-2">/pagamento único</span>
            </div>

            <ul className="space-y-4 mb-10 font-sans text-primary/80 flex-grow">
              <li className="flex items-center gap-3">
                <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-primary" /></span> 
                <span>Guia de <i>Engenharia de Software com IA</i></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-primary" /></span> 
                <span>Biblioteca de Prompts e Arquitetura</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-primary" /></span> 
                <span>Acesso vitalício + Atualizações</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-primary" /></span> 
                <span>Convite VIP antecipado para a Comunidade</span>
              </li>
            </ul>

            <a href="https://buy.stripe.com/9B600b2QU5AGfbfeKw1sQ00" className="block text-center w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-full font-medium text-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Pagar com Cartão
            </a>
          </motion.div>

          <PricingPix />
        </div>
      </div>
    </section>
  );
}
