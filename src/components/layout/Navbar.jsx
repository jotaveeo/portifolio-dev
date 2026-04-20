import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse group-hover:bg-accent transition-colors"></div>
            <div className="font-mono text-sm sm:text-lg font-bold tracking-tight">
              <span className="text-primary">$</span>
              <span className="text-foreground ml-2">joao-vitor</span>
              <span className="text-accent">.</span>
              <span className="text-muted-foreground mr-1">dev</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary align-middle"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-4 absolute">
                  &gt;
                </span>
                <span className="relative z-10">{link.name.toLowerCase()}</span>
              </a>
            ))}
          </div>

          {/* Status Indicator (Desktop) & Language Matcher */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 border border-border/50 rounded-full px-3 py-1 bg-card/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {t('nav.status')}
              </span>
            </div>
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40 overflow-hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center font-mono text-2xl w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-4 border-b border-border/30 w-full"
                >
                  <span className="text-primary mr-2">0{i + 1}.</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
            {/* Status Indicator & Language Matcher (Mobile) */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="mt-auto mb-16 flex flex-col items-center space-y-6"
            >
              <div className="flex items-center space-x-3 border border-border/50 rounded-full px-4 py-2 bg-card/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {t('nav.status')}
                </span>
              </div>
              <LanguageSwitcher className="scale-125" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
