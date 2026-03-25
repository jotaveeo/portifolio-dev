"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 max-w-4xl mx-auto overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-tight mb-6"
      >
        O Novo Padrão: <span className="text-accent">Engenharia de Software com IA</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-primary/70 mb-10 max-w-2xl font-light"
      >
        Ajudando desenvolvedores a dominar o <i>AI Code Vibes</i>. Aprenda a usar Agentes de IA, o Protocolo MCP e Integrações avançadas para construir sistemas completos dez vezes mais rápido.
      </motion.p>

      <motion.a 
        href="https://buy.stripe.com/9B600b2QU5AGfbfeKw1sQ00"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
        className="bg-primary-button text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 hover:scale-105 hover:shadow-2xl transition-all inline-flex"
      >
        Garantir acesso
        <ArrowRight className="w-5 h-5" />
      </motion.a>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="mt-16 w-full max-w-3xl aspect-[21/9] bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl border border-white/50 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden shadow-[0_24px_48px_rgba(42,219,165,0.05)]"
      >
        {/* Placeholder for the abstract geometric visual */}
        <div className="absolute w-64 h-64 bg-accent/30 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-64 h-64 bg-secondary/30 rounded-full blur-3xl -bottom-10 -right-10"></div>
        <span className="font-display font-bold text-primary/40 text-2xl z-10 flex flex-col items-center">
          📚 Guia de Masterização em IA
          <span className="text-sm font-sans font-normal mt-2">Disponível em PDF & Acesso Exclusivo</span>
        </span>
      </motion.div>
    </section>
  );
}
