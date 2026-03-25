"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      q: "É um curso em vídeo?",
      a: "Não. É um Guia Prático em formato texto/PDF direto ao ponto, desenhado para leitura rápida e consulta diária."
    },
    {
      q: "Para quem é o guia?",
      a: "Desenvolvedores de todos os níveis que querem multiplicar sua produtividade usando IA. Não é recomendado para quem nunca escreveu uma linha de código."
    },
    {
      q: "Vou ter acesso à comunidade?",
      a: "Sim. A comunidade oficial está sendo construída e todos os compradores do Guia terão um convite antecipado com acesso VIP às discussões e conteúdos extras."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 bg-surface-container max-w-4xl mx-auto w-full rounded-t-[40px] mt-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center text-primary mb-16"
      >
        Perguntas Frequentes
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        {faqs.map((faq, i) => (
          <motion.details 
            variants={itemAnim}
            key={i} 
            className="group bg-surface-highest p-6 rounded-2xl cursor-pointer"
          >
            <summary className="font-bold font-display text-lg list-none flex justify-between items-center text-primary">
              {faq.q}
              <ChevronDown className="w-5 h-5 text-primary/40 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-4 text-primary/70 font-sans leading-relaxed">
              {faq.a}
            </p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  );
}
