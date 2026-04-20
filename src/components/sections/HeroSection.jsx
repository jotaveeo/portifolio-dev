import { motion } from "framer-motion";
import { Code, MessageCircle, ChevronDown } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] mix-blend-screen floating-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[150px]"></div>

        {/* Subtle Grid / Scanlines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-left space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-mono text-primary font-medium tracking-wide uppercase">
                  {t('hero.openToWork')}
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1]">
                <span className="block text-foreground">{t('hero.title1')}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">
                  {t('hero.title2')}
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
            >
              <Trans i18nKey="hero.desc">
                {t('hero.desc1')}
                <strong className="text-foreground font-semibold">
                  {t('hero.descName')}
                </strong>
                {t('hero.desc2')}
              </Trans>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <Code className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">{t('hero.btn1')}</span>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-card/80 backdrop-blur border border-border text-foreground font-semibold rounded-lg transition-all hover:bg-card hover:border-accent hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-muted-foreground group-hover:text-accent" />
                <span>{t('hero.btn2')}</span>
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="pt-12 border-t border-border/50"
            >
              <p className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                {t('hero.stack')}
              </p>
              <div className="flex gap-6 text-muted-foreground">
                <span className="hover:text-[#61DAFB] transition-colors cursor-default font-mono">
                  React
                </span>
                <span className="hover:text-[#339933] transition-colors cursor-default font-mono">
                  Node.js
                </span>
                <span className="hover:text-[#3178C6] transition-colors cursor-default font-mono">
                  TypeScript
                </span>
                <span className="hover:text-[#38B2AC] transition-colors cursor-default font-mono">
                  Tailwind
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Image Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="flex-1 relative w-full max-w-lg hidden lg:block"
          >
            {/* Minimalist Tech Illustration / Cyberpunk Frame */}
            <div className="relative aspect-square rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 m-4 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/50 m-4 rounded-br-lg"></div>

              {/* Central "Avatar" / Code structure matching "Engenheiro" vibe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/jota.png"
                  alt="João Vitor"
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-12 -right-6 bg-card/90 backdrop-blur-md border border-border px-4 py-2 rounded-lg shadow-xl font-mono text-xs"
              >
                <span className="text-pink-500">&lt;</span>{t('hero.devBadge')}<span className="text-pink-500">/&gt;</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 -left-6 bg-card/90 backdrop-blur-md border border-border px-4 py-2 rounded-lg shadow-xl font-mono text-xs"
              >
                sys.engineer()
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-widest mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
