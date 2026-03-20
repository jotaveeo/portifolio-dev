import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Helper function to get skill icon and color
  const getSkillInfo = (techName) => {
    const skill = skills.find((s) => s.name.toLowerCase() === techName.toLowerCase());
    if (skill) {
      return { icon: skill.icon, color: skill.color };
    }
    return { icon: null, color: "#7D43B3" }; // Default color
  };

  return (
    <section id="projects" className="py-20 relative px-2 sm:px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
            Soluções que criei para resolver problemas reais
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => {
            const isComingSoon = project.status === "Em breve" || project.status === "Em desenvolvimento";
            
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`card-cyberpunk overflow-hidden group flex flex-col h-full transition-all duration-500 hover:shadow-neon ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-video sm:aspect-auto sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      isComingSoon ? "grayscale opacity-60" : ""
                    }`}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    {!isComingSoon && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="Ver código no GitHub"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {!isComingSoon && project.demo !== "#" && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="Ver Demo Online"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {project.featured && (
                      <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-primary/20 shadow-lg">
                        Destaque
                      </span>
                    )}
                    {project.status && (
                      <span className={`${
                        isComingSoon ? "bg-muted/80 text-muted-foreground" : "bg-accent/90 text-white"
                      } px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-lg`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech && project.tech.map((tech) => {
                        const info = getSkillInfo(tech);
                        return (
                          <div 
                            key={tech}
                            className="flex items-center gap-2 px-3 py-1 bg-card/50 border border-border/50 rounded-full text-xs font-medium hover:border-primary/50 transition-colors"
                            style={{ color: info.color }}
                          >
                            {info.icon && React.cloneElement(info.icon, {
                              style: { color: info.color, width: 14, height: 14 },
                              className: "flex-shrink-0"
                            })}
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Links (Visible on Mobile or Always) */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                      {!isComingSoon && (
                        <>
                          {project.github !== "#" && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                              <Github className="w-4 h-4" />
                              Código
                            </a>
                          )}
                          {project.demo !== "#" && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                        </>
                      )}
                      {isComingSoon && (
                        <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest italic">
                          Em desenvolvimento • Aguarde
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
