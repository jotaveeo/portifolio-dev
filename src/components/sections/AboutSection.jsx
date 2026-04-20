import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import trabalho from "/trabalho.jpeg";

export const AboutSection = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 relative px-2 sm:px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
            {t('about.title1')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t('about.greeting')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.p2')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-all duration-300 hover:shadow-neon"
                tabIndex={0}
                aria-label={t('about.cards.fullstack.title')}
              >
                <Code
                  className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-[#7D43B3] transition-colors"
                  style={{ color: "#7D43B3" }}
                />
                <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#7D43B3] transition-colors">
                  {t('about.cards.fullstack.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.cards.fullstack.desc')}
                </p>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-all duration-300 hover:shadow-neon-blue"
                tabIndex={0}
                aria-label={t('about.cards.problems.title')}
              >
                <Smartphone
                  className="w-8 h-8 text-accent mx-auto mb-3 group-hover:text-[#1f9eac] transition-colors"
                  style={{ color: "#1f9eac" }}
                />
                <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#1f9eac] transition-colors">
                  {t('about.cards.problems.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.cards.problems.desc')}
                </p>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-all duration-300 hover:shadow-neon-pink"
                tabIndex={0}
                aria-label={t('about.cards.innovation.title')}
              >
                <Globe
                  className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-[#BB208D] transition-colors"
                  style={{ color: "#BB208D" }}
                />
                <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#BB208D] transition-colors">
                  {t('about.cards.innovation.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.cards.innovation.desc')}
                </p>
              </motion.div>
            </div>

            {/* Certificates Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                  />
                </svg>
                {t('about.certTitle')}
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { title: "🏆 Top 10 Melhores Alunos - Full Stack", date: "Geração Tech • Dez 2024", highlight: true, color: "yellow" },
                  { title: "Desenvolvedor Full Stack", date: "Geração Tech • Dez 2024", color: "primary" },
                  { title: "O-HACKA-TA-ON 3ª Edição", date: "UNIFOR + M. Dias Branco • Jun 2025", color: "accent" },
                  { title: "Introdução a UX/UI Design", date: "CITINOVA • Mai 2025", color: "pink" },
                  { title: "Siará Tech Summit 2024", date: "Sebrae • Nov 2024", color: "green" },
                  { title: "Bootcamp Bradesco - Java e QA", date: "DIO • Nov 2025", color: "blue" },
                  { title: "Versionamento com Git e GitHub", date: "DIO • Nov 2025", color: "orange" },
                  { title: "Portfólio de Dados em 2 Dias", date: "EBAC • Nov 2025", color: "purple" },
                ].map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative card-cyberpunk p-4 transition-all cursor-pointer ${
                      cert.highlight ? "hover:border-yellow-500/50 bg-yellow-500/5" : "hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                        cert.highlight ? "bg-yellow-500/20 group-hover:bg-yellow-500/30" : "bg-primary/20 group-hover:bg-primary/30"
                      }`}>
                        <svg
                          className={`w-6 h-6 ${cert.highlight ? "text-yellow-500" : "text-primary"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-foreground transition-colors ${cert.highlight ? "group-hover:text-yellow-500" : "group-hover:text-primary"}`}>
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-2 sm:gap-4"
          >
            <div className="space-y-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={trabalho}
                alt="João trabalhando"
                className="rounded-lg neon-glow-blue border border-primary/20"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/imgg (16).jpg"
                alt="João em evento"
                className="rounded-lg neon-glow-pink border border-accent/20"
              />
            </div>
            <div className="space-y-4 mt-8">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/imgg (12).jpg"
                alt="João apresentando"
                className="rounded-lg neon-glow border border-primary/20"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/hackathon.JPG"
                alt="João em equipe"
                className="rounded-lg neon-glow-blue border border-accent/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
