import React from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo/Name */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold gradient-text righteous-regular mb-2">
              {t('footerPort.name')}
            </h3>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs leading-relaxed">
              {t('footerPort.desc')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jotaveeo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card/50 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 text-white transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/jotavee/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card/50 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 text-white transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:jotasuportetec@gmail.com"
              className="p-3 bg-card/50 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 text-white transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/558897460356"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card/50 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 text-white transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t('footerPort.rights')}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
            <span>{t('footerPort.builtWith')}</span>
            <span className="text-primary animate-pulse">💜</span>
            <span>{t('footerPort.andLotsOf')}</span>
            <span className="text-accent underline underline-offset-4 decoration-accent/30 decoration-double">{t('footerPort.coffee')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
