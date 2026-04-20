import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  Lock,
  Phone,
  Globe,
  ExternalLink,
} from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CONTACT_METHODS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "jotasuportetec@gmail.com",
    href: "mailto:jotasuportetec@gmail.com",
    color: "text-primary",
    borderHover: "hover:border-primary/60",
    glowHover: "hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Resposta rápida",
    href: "https://wa.me/5588996047311",
    color: "text-green-400",
    borderHover: "hover:border-green-500/60",
    glowHover: "hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]",
    external: true,
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "/in/jotaveeodev",
    href: "https://www.linkedin.com/in/jotaveeodev",
    color: "text-blue-400",
    borderHover: "hover:border-blue-500/60",
    glowHover: "hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]",
    external: true,
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/jotaveeo",
    label: "GitHub",
    hoverClass: "hover:border-white/40 hover:text-white",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/jotaveeodev",
    label: "LinkedIn",
    hoverClass: "hover:border-blue-500/60 hover:text-blue-400",
    external: true,
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/joaovitorroliveeira/",
    label: "Instagram",
    hoverClass: "hover:border-pink-500/60 hover:text-pink-400",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "https://t.me/jotaveeo",
    label: "Telegram",
    hoverClass: "hover:border-sky-500/60 hover:text-sky-400",
    external: true,
  },
];

// ─── Motion Variants ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

// ─── Input Field ───────────────────────────────────────────────────────────────
function InputField({ label, id, name, type = "text", value, onChange, placeholder, required, hasError, textarea }) {
  const baseClass =
    "w-full px-4 py-3.5 bg-card/60 border-2 rounded-xl text-foreground placeholder-muted-foreground/40 transition-all duration-200 focus:outline-none focus:ring-0 resize-none";
  const errorClass = hasError ? "border-red-500/70 focus:border-red-500" : "border-border/60 hover:border-primary/40 focus:border-primary";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-muted-foreground">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className={`${baseClass} ${errorClass}`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClass} ${errorClass}`}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "João Vitor",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };

  const handleClear = () => {
    setFormData({ from_name: "", to_name: "João Vitor", email: "", subject: "", message: "" });
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(t('contact.form.errorConfig'));
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.from_name,
      to_name: formData.to_name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      subject: formData.subject,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => { setIsSent(true); setIsLoading(false); handleClear(); },
      (err) => {
        console.error("EmailJS error:", err);
        setErrorMsg(t('contact.form.errorSend'));
        setIsLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">
            &gt;_ {t('contact.label')}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold gradient-text mb-4 righteous-regular"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed bree-serif-regular"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          {/* ── Left Panel ── */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {/* Contact methods */}
            <motion.div variants={fadeUp} className="card-cyberpunk p-6 space-y-3">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                &gt;_ {t('contact.channels')}
              </h3>
              {CONTACT_METHODS.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-3.5 rounded-xl bg-card/40 border border-border/40 transition-all duration-200 group ${method.borderHover} ${method.glowHover}`}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-card/60 flex items-center justify-center flex-shrink-0 ${method.color} transition-colors`}>
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{method.label === "WhatsApp" ? "WhatsApp" : method.label}</p>
                    <p className={`text-sm font-semibold truncate group-hover:${method.color} transition-colors`}>
                      {method.label === "WhatsApp" ? t('contact.whatsapp') : method.value}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 ml-auto flex-shrink-0 group-hover:text-muted-foreground transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="card-cyberpunk p-6">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                &gt;_ {t('contact.socials')}
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className={`flex-1 flex items-center justify-center p-3.5 rounded-xl bg-card/40 border border-border/40 text-muted-foreground transition-all duration-200 ${s.hoverClass}`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div variants={fadeUp} className="card-cyberpunk p-5 flex items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t('contact.availability.title')}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t('contact.availability.desc')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Panel — Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <AnimatePresence mode="wait">
              {isSent ? (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="card-cyberpunk p-10 text-center flex flex-col items-center gap-5 min-h-[400px] justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">{t('contact.form.successTitle')}</h3>
                    <p className="text-muted-foreground">{t('contact.form.successMsg')}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button onClick={() => setIsSent(false)} className="btn-neon flex-1 py-3">
                      {t('contact.form.newMsg')}
                    </button>
                    <a
                      href="https://wa.me/5588996047311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon flex-1 py-3 text-center bg-green-500/10 border-green-500/40 text-green-400 hover:bg-green-500/20"
                    >
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Form */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card-cyberpunk p-6 sm:p-8"
                >
                  <motion.div variants={fadeUp} className="mb-7">
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text flex items-center gap-2 mb-1.5">
                      <MessageCircle className="w-6 h-6 text-accent" />
                      {t('contact.form.header')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.form.subtitle')}
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label={t('contact.form.name')}
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                        hasError={!formData.from_name && !!errorMsg}
                      />
                      <InputField
                        label={t('contact.form.email')}
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                        hasError={!formData.email && !!errorMsg}
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <InputField
                        label={t('contact.form.subject')}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('contact.form.subjectPlaceholder')}
                        required
                        hasError={!formData.subject && !!errorMsg}
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <InputField
                        label={t('contact.form.message')}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.messagePlaceholder')}
                        required
                        hasError={!formData.message && !!errorMsg}
                        textarea
                      />
                    </motion.div>

                    {/* Error message */}
                    <AnimatePresence>
                      {errorMsg && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {errorMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div variants={fadeUp} className="flex gap-3">
                      <motion.button
                        type="submit"
                        className="flex-1 btn-neon flex items-center justify-center gap-2.5 py-3.5 font-semibold"
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                      >
                        {isLoading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            {t('contact.form.btnSending')}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            {t('contact.form.btnSend')}
                          </>
                        )}
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={handleClear}
                        className="btn-neon bg-muted/10 text-muted-foreground border-border/50 hover:bg-muted/20 px-5 py-3.5 font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('contact.form.btnClear')}
                      </motion.button>
                    </motion.div>

                    {/* Privacy note */}
                    <motion.div
                      variants={fadeUp}
                      className="flex items-start gap-2.5 p-3.5 bg-primary/5 border border-primary/15 rounded-xl"
                    >
                      <Lock className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t('contact.form.secure')}
                      </p>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
