"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container py-12 px-6 border-t border-primary/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="font-display font-bold text-xl text-primary/90">
          AI System Lab
        </div>
        
        <div className="flex gap-8 text-sm font-sans text-primary/60">
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>
        
        <p className="text-xs text-primary/40 font-sans">
          © {new Date().getFullYear()} AI System Lab. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
