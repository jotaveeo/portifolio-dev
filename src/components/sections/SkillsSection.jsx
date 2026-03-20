import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 relative px-2 sm:px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
            Stack Tecnológica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
            Tecnologias, ferramentas e infraestrutura que utilizo no dia a dia
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <motion.div 
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text-secondary space-mono-regular px-6 py-2 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative"
                  >
                    <div
                      className="card-cyberpunk p-5 text-center cursor-pointer transition-all hover:border-primary/50 hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-primary h-full flex flex-col items-center justify-center bg-card/40 backdrop-blur-sm"
                      tabIndex={0}
                      aria-label={skill.name}
                      style={{
                        borderColor: `${skill.color}15`,
                      }}
                    >
                      {/* Icon with dynamic color */}
                      <div className="mb-4 flex justify-center items-center">
                        {React.cloneElement(skill.icon, {
                          style: {
                            color: skill.color,
                            filter: `drop-shadow(0 0 12px ${skill.color}50)`,
                            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                          },
                          className: "w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110",
                        })}
                      </div>

                      {/* Skill name */}
                      <h4 className="font-semibold text-xs sm:text-sm righteous-regular group-hover:text-primary transition-colors leading-tight">
                        {skill.name}
                      </h4>

                      {/* Subtle accent bar */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                        }}
                      ></div>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 translate-y-2 group-hover:translate-y-0">
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap shadow-2xl border backdrop-blur-md"
                        style={{
                          backgroundColor: `${skill.color}10`,
                          borderColor: `${skill.color}40`,
                          color: skill.color,
                        }}
                      >
                        {skill.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
