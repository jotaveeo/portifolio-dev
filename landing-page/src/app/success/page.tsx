import Link from 'next/link';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-surface-highest p-10 md:p-14 rounded-[32px] max-w-xl mx-auto shadow-[0_24px_48px_rgba(18,19,23,0.04)] relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-accent" />
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
          Pagamento Confirmado!
        </h1>
        
        <p className="text-lg text-primary/70 mb-8 px-4">
          Parabéns pela sua decisão. Seu acesso ao <strong>Guia de Engenharia de Software com IA</strong> e os bônus está garantido.
        </p>

        <div className="space-y-4 mb-10">
          <div className="bg-[#121317] p-6 rounded-2xl flex items-start text-left border border-white/5">
            <span className="bg-accent/10 p-2 rounded-lg mr-4 mt-1"><MessageCircle className="w-5 h-5 text-accent" /></span>
            <div>
              <h3 className="font-bold text-primary mb-1">Acesso à Comunidade VIP</h3>
              <p className="text-primary/60 text-sm">
                Entre agora no grupo exclusivo para receber o E-book e trocar ideias de arquitetura com IA.
              </p>
            </div>
          </div>
        </div>

        <Link href="https://chat.whatsapp.com/SEU_LINK_AQUI" target="_blank" className="bg-accent text-back rounded-full font-bold px-8 py-4 w-full flex items-center justify-center hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(209,255,77,0.3)]">
          Entrar na Comunidade VIP <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <p className="text-sm text-primary/40 mt-4">
          O E-book será enviado diretamente no grupo e também no seu e-mail.
        </p>
      </div>
    </div>
  );
}
