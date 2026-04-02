import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ChevronRight,
  Zap,
  Terminal,
  Globe,
  Mail,
} from "lucide-react";
import "./bio-page.css";

// ─── Animation Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Data ────────────────────────────────────────────────────────────────────
const LINKS = [
  {
    id: "portfolio",
    href: "/",
    label: "Portfólio Completo",
    description: "Projetos, skills e experiências",
    badge: "🚀 Novo",
    featured: true,
    icon: <Globe className="bio-v2-link-icon-svg" />,
  },
  {
    id: "nocontrole",
    href: "https://nocontrole-front.netlify.app/",
    label: "NoControle — App Financeiro",
    description: "Controle financeiro inteligente · SaaS",
    badge: "⚡ Live",
    featured: false,
    icon: <Zap className="bio-v2-link-icon-svg" />,
    external: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/jotaveeodev",
    label: "LinkedIn",
    description: "Conecte-se · +300 conexões",
    badge: null,
    icon: <Linkedin className="bio-v2-link-icon-svg" />,
    external: true,
  },
  {
    id: "github",
    href: "https://github.com/jotaveeo/",
    label: "GitHub",
    description: "20+ repositórios públicos",
    badge: null,
    icon: <Github className="bio-v2-link-icon-svg" />,
    external: true,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/joaovitorroliveeira/",
    label: "Instagram",
    description: "Bastidores · Dicas de programação",
    badge: null,
    icon: <Instagram className="bio-v2-link-icon-svg" />,
    external: true,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/558897460356",
    label: "WhatsApp — Contato Direto",
    description: "Disponível para projetos · Resposta rápida",
    badge: "💬 Agora",
    featured: false,
    icon: <MessageCircle className="bio-v2-link-icon-svg" />,
    external: true,
    highlight: true,
  },
  {
    id: "email",
    href: "mailto:contato@jotaveeo.dev",
    label: "E-mail Profissional",
    description: "Projetos freelance · Parcerias",
    badge: null,
    icon: <Mail className="bio-v2-link-icon-svg" />,
  },
];

const SKILLS_PREVIEW = ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Next.js"];

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="bio-v2-stat-number">
      {count}
      {suffix}
    </span>
  );
}

// ─── Link Card ─────────────────────────────────────────────────────────────────
function LinkCard({ link, index }) {
  return (
    <motion.a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`bio-v2-link-card ${link.featured ? "featured" : ""} ${link.highlight ? "highlight" : ""}`}
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="bio-v2-link-icon">{link.icon}</div>

      <div className="bio-v2-link-body">
        <span className="bio-v2-link-label">{link.label}</span>
        <span className="bio-v2-link-desc">{link.description}</span>
      </div>

      <div className="bio-v2-link-right">
        {link.badge && <span className="bio-v2-badge">{link.badge}</span>}
        <ChevronRight className="bio-v2-link-arrow" />
      </div>
    </motion.a>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
const BioPage = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bio-v2-container">
      {/* Background decoration */}
      <div className="bio-v2-bg" aria-hidden="true">
        <div className="bio-v2-glow bio-v2-glow-1" />
        <div className="bio-v2-glow bio-v2-glow-2" />
        <div className="bio-v2-grid" />
      </div>

      <div className="bio-v2-content">
        {/* ── Header ─────────────────────────────────────── */}
        <motion.header
          className="bio-v2-header"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="bio-v2-status">
            <span className="bio-v2-status-dot" />
            Disponível para projetos
          </motion.div>

          {/* Avatar */}
          <motion.div variants={fadeUp} className="bio-v2-avatar-wrap">
            <img src="/jota.jpg" alt="João Vitor — Dev Full Stack" className="bio-v2-avatar" />
            <div className="bio-v2-avatar-ring" aria-hidden="true" />
          </motion.div>

          {/* Identity */}
          <motion.div variants={fadeUp} className="bio-v2-identity">
            <div className="bio-v2-terminal-label">
              <Terminal size={12} />
              <span>jotaveeo.dev</span>
            </div>
            <h1 className="bio-v2-name">João Vitor Oliveira</h1>
            <p className="bio-v2-role">
              <Code2 size={14} />
              Full Stack Developer &amp; Tech Builder
            </p>
            <p className="bio-v2-bio">
              Transformo ideias em produtos digitais reais. Especialista em aplicações web modernas,
              automações e SaaS — do backend robusto ao frontend que impressiona.
            </p>
          </motion.div>

          {/* Skills preview */}
          <motion.div variants={fadeUp} className="bio-v2-skills-preview">
            {SKILLS_PREVIEW.map((skill) => (
              <span key={skill} className="bio-v2-skill-chip">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.header>

        {/* ── Stats ──────────────────────────────────────── */}
        <AnimatePresence>
          {statsVisible && (
            <motion.div
              className="bio-v2-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[
                { target: 20, suffix: "+", label: "Projetos" },
                { target: 6, suffix: " anos", label: "Experiência" },
                { target: 1500, suffix: "+", label: "Commits" },
              ].map((stat) => (
                <div key={stat.label} className="bio-v2-stat-card">
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <span className="bio-v2-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── CTA Principal ──────────────────────────────── */}
        <motion.div
          className="bio-v2-cta-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="bio-v2-section-label">
            <Briefcase size={13} />
            Precisa de um dev experiencnte para seu projeto?
          </p>
          <motion.a
            href="https://wa.me/5588996047311"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-v2-cta-button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} />
            Vamos conversar agora
            <ExternalLink size={14} className="bio-v2-cta-ext" />
          </motion.a>
        </motion.div>

        {/* ── Links ──────────────────────────────────────── */}
        <motion.section
          className="bio-v2-links"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          aria-label="Links"
        >
          <motion.p variants={fadeUp} className="bio-v2-section-label">
            <Globe size={13} />
            Encontre-me em
          </motion.p>

          {LINKS.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </motion.section>

        {/* ── Footer ─────────────────────────────────────── */}
        <motion.footer
          className="bio-v2-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="bio-v2-footer-text">
            © {new Date().getFullYear()} João Vitor Oliveira · Feito com 💜 e muito ☕
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default BioPage;
