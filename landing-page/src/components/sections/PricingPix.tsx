"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PricingPix() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/guia-engenharia-ia/api/checkout-pix", { method: "POST" });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro ao gerar link de pagamento Pix. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao processar pagamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.3 }}
      className="bg-surface-highest p-10 md:p-14 rounded-[32px] w-full shadow-[0_24px_48px_rgba(18,19,23,0.04)] text-left relative overflow-hidden flex flex-col h-full"
    >
      {/* Subtle gradient accent inside card */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <h3 className="font-display text-2xl font-bold text-primary mb-2">Pix (Desconto Especial)</h3>
      <div className="mb-8 overflow-hidden flex-shrink-0">
        <span className="text-5xl font-extrabold tracking-tighter text-primary">R$ 37,80</span>
        <span className="text-primary/50 ml-2">/pagamento único</span>
      </div>

      <ul className="space-y-4 mb-10 font-sans text-primary/80 flex-grow">
        <li className="flex items-center gap-3">
          <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-green-500" /></span> 
          <span>Guia de <i>Engenharia de Software com IA</i></span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-green-500" /></span> 
          <span>Biblioteca de Prompts e Arquitetura</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-green-500" /></span> 
          <span>Acesso vitalício + Atualizações</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-[#121317]/5 p-1 rounded-full flex-shrink-0"><Check className="w-4 h-4 text-green-500" /></span> 
          <span>Convite VIP antecipado para a Comunidade</span>
        </li>
      </ul>

      <button 
        disabled={loading}
        onClick={handleCheckout}
        className="w-full mt-auto bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-full font-medium text-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? "Processando..." : "Pagar com Pix"}
      </button>
    </motion.div>
  );
}
