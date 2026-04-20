import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Terminal,
  Globe,
  Zap,
  Server,
  Bot,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import "./bio-page.css";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const stagger = (staggerTime = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerTime } },
});

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Next.js",
];

const STATS = [
  { target: 20, suffix: "+", id: "projects" },
  { target: 6, suffix: "years", id: "experience" },
  { target: 1500, suffix: "+", id: "commits" },
];

const PROJECTS = [
  {
    id: "igreja-redentor",
    name: "Igreja Redentor",
    description:
      "Landing page institucional integrada a fluxos de automação de notícias via WhatsApp.",
    badge: "⛪ Institucional",
    badgeType: "new",
    href: "https://paroquiajesuscristoredentor.netlify.app/",
    color: "#eab308",
    tag: "Landing Page · Automação",
  },
  {
    id: "nocontrole",
    name: "NoControle",
    description:
      "Sistema financeiro completo com landing page, MongoDB, Firebase e backend nativo.",
    badge: "⚡ Live",
    badgeType: "live",
    href: "https://nocontrole-front.netlify.app/",
    color: "#6366f1",
    tag: "SaaS · Fintech",
  },
  {
    id: "portfolio",
    name: "Meu Site Profissional",
    description:
      "Landing page pessoal com automação de e-mails, contato direto e domínio próprio.",
    badge: "🚀 Novo",
    badgeType: "new",
    href: "/",
    color: "#f2572b",
    tag: "Landing Page",
  },
  {
    id: "guia-engenharia",
    name: "Guia de Engenharia IA",
    description:
      "Produto digital com guia de engenharia impulsionada por inteligência artificial, landing page e domínio.",
    badge: "🤖 IA",
    badgeType: "new",
    href: "https://guia-engenharia-ia.netlify.app/",
    color: "#8b5cf6",
    tag: "Educação · IA",
  },
  {
    id: "iptucontrol",
    name: "IPTU Control",
    description:
      "Controle de pagamento de IPTU para imobiliárias. Inclui dashboard, MySQL e painel administrativo.",
    badge: "🏢 B2B",
    badgeType: "live",
    href: "https://iptu-control.netlify.app/",
    color: "#06b6d4",
    tag: "Gestão · Imobiliária",
  },
  {
    id: "photoinlive",
    name: "PhotoInLive",
    description:
      "Plataforma de fotos ao vivo. Contém landing page, banco de dados complexo e backend na AWS.",
    badge: "📸 Cloud",
    badgeType: "live",
    href: "https://photoinlive.netlify.app/",
    color: "#ec4899",
    tag: "Eventos · Plataforma",
  },
  {
    id: "vizinhobot",
    name: "VizinhoBot",
    description:
      "API customizada e backend para automatizar geração e postagens de vídeos para o TikTok.",
    badge: "📱 Social",
    badgeType: "new",
    href: "https://vizinhobot.netlify.app/",
    color: "#ff3e88",
    tag: "Automação · Bot",
  },
  {
    id: "zapbot",
    name: "ZapBot Cobrança",
    description:
      "Sistema integrado para enviar mensagens de cobrança automatizadas diretamente via API do WhatsApp.",
    badge: "💬 Auto",
    badgeType: "new",
    href: "https://zapbotcobranca.netlify.app/",
    color: "#10b981",
    tag: "Automação · Fintech",
  },
];

const SERVICES = [
  {
    icon: <Globe size={20} />,
    title: "Dev Web",
    desc: "Sites, apps e landing pages modernas",
    color: "#f2572b",
  },
  {
    icon: <Bot size={20} />,
    title: "Automações",
    desc: "Bots, integrações e fluxos automáticos",
    color: "#6366f1",
  },
  {
    icon: <Server size={20} />,
    title: "SaaS & APIs",
    desc: "Backends robustos e produtos escaláveis",
    color: "#22d3ee",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Github size={22} />,
    href: "https://github.com/jotaveeo/",
    label: "GitHub",
    color: "#e2e8f0",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://www.linkedin.com/in/jotaveeodev",
    label: "LinkedIn",
    color: "#60a5fa",
  },
  {
    icon: <Instagram size={22} />,
    href: "https://www.instagram.com/joaovitorroliveeira/",
    label: "Instagram",
    color: "#f472b6",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "https://t.me/jotaveeo",
    label: "Telegram",
    color: "#38bdf8",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
      </svg>
    ),
    href: "https://wa.me/5588996047311",
    label: "WhatsApp",
    color: "#4ade80",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
/** Animated number counter */
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        setCount(target);
        clearInterval(t);
      } else setCount(Math.floor(cur));
    }, 25);
    return () => clearInterval(t);
  }, [target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/** Section label with terminal style */
function SectionLabel({ icon, children }) {
  return (
    <div className="bio-section-label">
      {icon}
      <span>{children}</span>
    </div>
  );
}

/** Full-width section divider */
function Divider() {
  return <div className="bio-divider" aria-hidden="true" />;
}

// ─── Section Components ───────────────────────────────────────────────────────

function HeroSection() {
  const { t } = useTranslation();
  return (
    <motion.header
      className="bio-section bio-hero"
      initial="hidden"
      animate="visible"
      variants={stagger(0.1)}
    >
      <motion.div variants={childFade} className="bio-v2-status">
        <span className="bio-v2-status-dot" />
        {t('bio.status')}
      </motion.div>

      <motion.div variants={childFade} className="bio-v2-avatar-wrap">
        <img
          src="/jota.jpg"
          alt="João Vitor — Dev Full Stack"
          className="bio-v2-avatar"
        />
        <div className="bio-v2-avatar-ring" aria-hidden="true" />
      </motion.div>

      <motion.div variants={childFade} className="bio-v2-identity">
        <div className="bio-v2-terminal-label">
          <Terminal size={12} />
          <span>jotaveeo.dev</span>
        </div>
        <h1 className="bio-v2-name">João Vitor Oliveira</h1>
        <p className="bio-v2-role">
          <Code2 size={14} />
          {t('bio.role')}
        </p>
        <p className="bio-v2-bio">
          {t('bio.description')}
        </p>
      </motion.div>

      <motion.div variants={childFade} className="bio-v2-skills-preview">
        {SKILLS.map((s) => (
          <span key={s} className="bio-v2-skill-chip">
            {s}
          </span>
        ))}
      </motion.div>
    </motion.header>
  );
}

function StatsSection() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="bio-section bio-v2-stats"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {STATS.map((s) => (
        <div key={s.id} className="bio-v2-stat-card">
          <span className="bio-v2-stat-number">
            {visible ? (
              <Counter target={s.target} suffix={s.suffix === 'years' ? t('bio.stats.years') : s.suffix} />
            ) : (
              `0${s.suffix === 'years' ? t('bio.stats.years') : s.suffix}`
            )}
          </span>
          <span className="bio-v2-stat-label">{t(`bio.stats.${s.id}`)}</span>
        </div>
      ))}
    </motion.div>
  );
}

function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="bio-section"
      initial="hidden"
      animate="visible"
      variants={stagger(0.12)}
    >
      <motion.div variants={childFade}>
        <SectionLabel icon={<Zap size={13} />}>
          {t('bio.projects.title')}
        </SectionLabel>
      </motion.div>

      <div className="bio-projects-grid">
        {PROJECTS.map((p) => (
          <motion.a
            key={p.id}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bio-project-card"
            variants={childFade}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            style={{ "--project-color": p.color }}
          >
            <div className="bio-project-accent" />
            <div className="bio-project-body">
              <div className="bio-project-top">
                <span className="bio-project-name">{t(`bio.projects.${p.id}.name`)}</span>
                <span
                  className={`bio-project-badge bio-project-badge--${p.badgeType}`}
                >
                  {t(`bio.projects.${p.id}.badge`)}
                </span>
              </div>
              <p className="bio-project-desc">{t(`bio.projects.${p.id}.description`)}</p>
              <div className="bio-project-footer">
                <span className="bio-project-tag">{t(`bio.projects.${p.id}.tag`)}</span>
                <ExternalLink size={14} className="bio-project-arrow" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="bio-section"
      initial="hidden"
      animate="visible"
      variants={stagger(0.1)}
    >
      <motion.div variants={childFade}>
        <SectionLabel icon={<Briefcase size={13} />}>{t('bio.services.title')}</SectionLabel>
      </motion.div>

      <div className="bio-services-grid">
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s.title}
            className="bio-service-card"
            variants={childFade}
            whileHover={{ y: -3 }}
            style={{ "--service-color": s.color }}
          >
            <div className="bio-service-icon">{s.icon}</div>
            <div>
              <p className="bio-service-title">{t(`bio.services.items.${idx}.title`)}</p>
              <p className="bio-service-desc">{t(`bio.services.items.${idx}.desc`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function CtaSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="bio-section bio-cta-section"
      initial="hidden"
      animate="visible"
      variants={stagger(0.1)}
    >
      <motion.div variants={childFade} className="bio-cta-text">
        <p className="bio-cta-heading">{t('bio.cta.heading')}</p>
        <p className="bio-cta-sub">
          {t('bio.cta.sub')}
        </p>
      </motion.div>

      <motion.div variants={childFade} className="bio-cta-buttons">
        <motion.a
          href="https://wa.me/5588996047311"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-cta-btn bio-cta-btn--primary"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <MessageCircle size={17} />
          {t('bio.cta.wppBtn')}
        </motion.a>
        <motion.a
          href="/"
          className="bio-cta-btn bio-cta-btn--secondary"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Globe size={17} />
          {t('bio.cta.portBtn')}
          <ArrowRight size={15} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

function SocialSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="bio-section"
      initial="hidden"
      animate="visible"
      variants={stagger(0.08)}
    >
      <motion.div variants={childFade}>
        <SectionLabel icon={<Globe size={13} />}>
          {t('bio.social.title')}
        </SectionLabel>
      </motion.div>

      <div className="bio-social-grid">
        {SOCIAL_LINKS.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bio-social-card"
            variants={childFade}
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label={s.label}
            style={{ "--social-color": s.color }}
          >
            <div className="bio-social-icon">{s.icon}</div>
            <span className="bio-social-label">{s.label}</span>
            <ChevronRight size={12} className="bio-social-arrow" />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const BioPage = () => {
  const { t } = useTranslation();
  return (
  <div className="bio-v2-container">
    {/* Adicionando LanguageSwitcher no topo à direita */}
    <div className="absolute top-6 right-6 z-50">
      <LanguageSwitcher />
    </div>

    {/* Background */}
    <div className="bio-v2-bg" aria-hidden="true">
      <div className="bio-v2-glow bio-v2-glow-1" />
      <div className="bio-v2-glow bio-v2-glow-2" />
      <div className="bio-v2-grid" />
    </div>

    <div className="bio-v2-content">
      <HeroSection />
      <Divider />

      <StatsSection />
      <Divider />

      <ProjectsSection />
      <Divider />

      <ServicesSection />
      <Divider />

      <CtaSection />
      <Divider />

      <SocialSection />

      <motion.footer
        className="bio-v2-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <p className="bio-v2-footer-text">
          © {new Date().getFullYear()} João Vitor Oliveira · {t('bio.footer')}
        </p>
      </motion.footer>
    </div>
  </div>
  );
};

export default BioPage;
