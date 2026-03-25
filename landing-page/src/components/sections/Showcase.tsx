"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Showcase() {
  const chapters = [
    { num: "01", title: "O Mindset AI Code Vibes", desc: "Como a IA pensa, como estruturar prompts e programar em par avançado." },
    { num: "02", title: "Dominando as IDEs", desc: "Configurações essenciais para Cursor, Windsurf e Copilot." },
    { num: "03", title: "O Poder dos Agentes", desc: "Delegação de arquitetura e lógica complexa usando IA Agentic (Antigravity)." },
    { num: "04", title: "O Protocolo MCP", desc: "Model Context Protocol explicados: conectando seu agente a ferramentas externas." },
    { num: "05", title: "Integrações Reais", desc: "Automatizando Stripe, bancos de dados, Vercel e APIs de terceiros com IA." },
    { num: "06", title: "Bônus: Acesso à Comunidade", desc: "O primeiro passo para um grupo exclusivo que molda o futuro do código." },
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section className="bg-primary-container text-white py-32 px-4 relative mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/3 sticky top-32"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
            O que tem <br /> por dentro
          </h2>
          <p className="text-primary-fixed-dim text-lg mb-8 leading-relaxed">
            Uma imersão completa na nova era do desenvolvimento. Direto da trincheira: dicas práticas, ferramentas e setups que ninguém te conta.
          </p>
          <div className="flex flex-col gap-2 items-start">
            <span className="bg-surface-highest text-black text-secondary-fixed px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-2">
              Tópicos Abordados
            </span>
            <span className="text-secondary-fixed-dim text-sm">MCP • Antigravity • Cursor/Windsurf • Agentic Coding</span>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {chapters.map((item, index) => (
            <motion.div 
              variants={itemAnim}
              key={index} 
              className="bg-[#242526] p-8 rounded-[24px] border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="block font-display text-accent font-black text-xl mb-4">
                CAP {item.num}
              </span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
