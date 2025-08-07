import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./App.css";
import trabalho from "/trabalho.jpeg";

// Importa as fontes via JS para garantir que todas estejam disponíveis
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Bree+Serif&family=Bungee&family=Permanent+Marker&family=Righteous&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Unbounded:wght@200..900&display=swap";
document.head.appendChild(fontLink);
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MessageCircle,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMariadb,
  SiPrisma,
  SiJest,
  SiExpress,
  SiSequelize,
  SiDocker,
  SiPostman,
  SiFigma,
  SiNpm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function App() {
  // EmailJS formulário de contato
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "João Vitor Oliveira",
    email: "",
    subject: "",
    message: "",
    reply_to: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleContactChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMsg("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    emailjs
      .send(
        "service_abcxlvp", // Substitua pelo seu Service ID
        "template_ef9vay2", // Substitua pelo seu Template ID
        formData,
        "pdENJf7j-iR6SbzM9" // Substitua pela sua Public Key
      )
      .then(
        (result) => {
          setIsSent(true);
          setIsLoading(false);
        },
        (error) => {
          setIsSent(false);
          setIsLoading(false);
          setErrorMsg(
            "Não foi possível enviar. Tente novamente ou use outro canal."
          );
        }
      );
  };

  const handleClearForm = () => {
    setFormData({
      from_name: "",
      to_name: "João Vitor Oliveira",
      email: "",
      subject: "",
      message: "",
      reply_to: "",
    });
    setErrorMsg("");
  };
  const [isVisible, setIsVisible] = useState({});
  const [typingText, setTypingText] = useState("");
  const fullText = "Desenvolvedor Full Stack";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "NoControle - Financeiro",
      description:
        "Organize, visualize, defina metas e elimine dívidas. Tudo em um só lugar, de forma simples e inteligente.",
      image: "/nocontrole.png",
      tech: ["TypeScript", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/jotaveeo/",
      demo: "https://nocontrole-front.netlify.app/",
      featured: true,
    },
    {
      title: "DripStore E-commerce",
      description:
        "Plataforma completa de e-commerce com frontend React e backend Node.js. Sistema de autenticação, carrinho de compras e integração com banco de dados.",
      image: "/banner1.png",
      tech: ["React", "Node.js", "MySQL", "Express", "Prisma"],
      github: "https://github.com/jotaveeo/",
      demo: "https://dripstore-gt.netlify.app/",
      featured: false,
    },
    {
      title: "Memória a Dois",
      description:
        "Aplicativo de memórias compartilhadas para casais com funcionalidades de upload de fotos, timeline e notificações.",
      image: "/bannermemoria.png",
      tech: ["React", "Node.js", "MySQL", "Socket.io"],
      github: "#",
      demo: "#",
      status: "Em desenvolvimento",
      featured: false,
    },
    {
      title: "ZapBot-Cobrança",
      description:
        "Robô de cobrança automatizada para WhatsApp com integração de APIs e sistema de agendamento.",
      image: "/zapbot.png",
      tech: ["Node.js", "JavaScript", "WhatsApp API"],
      github: "#",
      demo: "https://zapbotcobranca.netlify.app/",
    },
    {
      title: "VizinhoBot-Vídeos",
      description:
        "Robô de postagem automatizada de vídeos para TikTok com sistema de agendamento e análise de performance.",
      image: "/vizinhobot.png",
      tech: ["Node.js", "TikTok API", "FFmpeg"],
      github: "#",
      demo: "https://vizinhobot.netlify.app/",
    },
    {
      title: "WebMercado",
      description:
        "Plataforma de e-commerce completa com painel administrativo e sistema de pagamentos integrado.",
      image: "/bannerdev.jpg",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Gerador de Recibos",
      description:
        "Aplicativo para geração de recibos para pequenos negócios com templates personalizáveis e exportação em PDF.",
      image: "/bannerdev.jpg",
      tech: ["Node.js", "PDF-lib", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "DownloadVideos",
      description:
        "Site simples para fazer download de vídeos de diversas plataformas, podendo escolher a qualidade e o formato do arquivo.",
      image: "/bannerdev.jpg",
      tech: ["Node.js", "React", "Express"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    { name: "HTML", category: "Frontend", icon: <FaHtml5 /> },
    { name: "JavaScript", category: "Frontend", icon: <FaJs /> },
    { name: "TypeScript", category: "Frontend", icon: <SiTypescript /> },
    { name: "React", category: "Frontend", icon: <FaReact /> },
    { name: "Next.js", category: "Frontend", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss /> },
    { name: "Node.js", category: "Backend", icon: <FaNodeJs /> },
    { name: "Express", category: "Backend", icon: <SiExpress /> },
    { name: "Sequelize", category: "Backend", icon: <SiSequelize /> },
    { name: "MySQL", category: "Backend", icon: <SiMysql /> },
    { name: "MariaDB", category: "Backend", icon: <SiMariadb /> },
    { name: "Prisma ORM", category: "Backend", icon: <SiPrisma /> },
    { name: "Python", category: "Backend", icon: <FaPython /> },
    { name: "Git", category: "Tools", icon: <FaGit /> },
    { name: "AWS", category: "Tools", icon: <FaAws /> },
    { name: "Jest", category: "Tools", icon: <SiJest /> },
    { name: "Docker", category: "Tools", icon: <SiDocker /> },
    { name: "VS Code", category: "Tools", icon: <VscVscode /> },
    { name: "Postman", category: "Tools", icon: <SiPostman /> },
    { name: "Figma", category: "Tools", icon: <SiFigma /> },
    { name: "NPM", category: "Tools", icon: <SiNpm /> },
  ];

  const skillCategories = {
    Frontend: skills.filter((skill) => skill.category === "Frontend"),
    Backend: skills.filter((skill) => skill.category === "Backend"),
    Tools: skills.filter((skill) => skill.category === "Tools"),
  };

  return (
    <div className="min-h-screen bg-background text-foreground scan-lines">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with terminal style */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="font-mono text-sm sm:text-lg">
                <span className="text-green-400">$</span>
                <span className="text-foreground ml-2">joao-vitor</span>
                <span className="text-primary">.</span>
                <span className="text-accent">dev</span>
              </div>
            </div>

            {/* Navigation with code-style comments */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-sm">
              <a
                href="#home"
                className="group flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground">// </span>
                <span className="group-hover:text-primary">home</span>
              </a>
              <a
                href="#about"
                className="group flex items-center space-x-2 hover:text-accent transition-colors"
              >
                <span className="text-muted-foreground">// </span>
                <span className="group-hover:text-accent">about</span>
              </a>
              <a
                href="#skills"
                className="group flex items-center space-x-2 hover:text-pink-500 transition-colors"
              >
                <span className="text-muted-foreground">// </span>
                <span className="group-hover:text-pink-500">skills</span>
              </a>
              <a
                href="#projects"
                className="group flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <span className="text-muted-foreground">// </span>
                <span className="group-hover:text-green-400">projects</span>
              </a>
              <a
                href="#contact"
                className="group flex items-center space-x-2 hover:text-yellow-400 transition-colors"
              >
                <span className="text-muted-foreground">// </span>
                <span className="group-hover:text-yellow-400">contact</span>
              </a>
            </div>

            {/* Status indicator */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-xs font-mono">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">online</span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                v2.0.1
              </div>
            </div>

            {/* Mobile status indicator */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono">online</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-2 sm:px-4"
      >
        {/* Subtle animated background + scanlines + partículas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-accent/10 rounded-full blur-2xl floating-animation"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          {/* Scanlines overlay */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(180deg,transparent,transparent_6px,#fff1_7px,transparent_8px)]"></div>
          {/* Partículas simples */}
          <div
            className="absolute left-10 top-10 w-2 h-2 bg-primary/40 rounded-full animate-ping"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute right-16 bottom-16 w-1.5 h-1.5 bg-accent/40 rounded-full animate-ping"
            style={{ animationDuration: "3.2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
          <div className="text-center space-y-8 sm:space-y-12">
            {/* Terminal window */}
            <div className="block bg-card/90 backdrop-blur border border-border rounded-xl overflow-x-auto shadow-2xl w-full max-w-full focus-within:ring-2 focus-within:ring-primary font-[Fira_Code,monospace]">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-card border-b border-border font-[Fira_Code,monospace]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full shadow-md"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full shadow-md"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full shadow-md"></div>
                </div>
                <div className="text-xs text-muted-foreground hidden sm:block">
                  joao-vitor@portfolio:~
                </div>
                <div className="w-4 h-4"></div>
              </div>

              {/* Terminal content */}
              <div className="p-4 sm:p-6 text-xs sm:text-sm space-y-2 sm:space-y-3 text-left font-[Fira_Code,monospace]">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-foreground">whoami</span>
                </div>
                <div className="text-accent ml-3 sm:ml-4 font-bold">
                  joão-vitor-oliveira
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-foreground">cat role.txt</span>
                </div>
                <div className="text-foreground ml-3 sm:ml-4 font-semibold">
                  Full Stack Developer & Problem Solver
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-foreground">ls -la skills/</span>
                </div>
                <div className="ml-3 sm:ml-4 space-y-1">
                  <div className="text-primary font-semibold">
                    drwxr-xr-x frontend/
                  </div>
                  <div className="text-accent font-semibold">
                    drwxr-xr-x backend/
                  </div>
                  <div className="text-pink-500 font-semibold">
                    drwxr-xr-x databases/
                  </div>
                  <div className="text-yellow-400 font-semibold">
                    drwxr-xr-x tools/
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-foreground">echo $PASSION</span>
                </div>
                <div
                  className="text-primary ml-3 sm:ml-4 typing-animation font-semibold inline-block"
                  style={{ whiteSpace: "pre" }}
                >
                  "Transformar ideias em código que impacta vidas"
                </div>
              </div>
            </div>

            {/* Main title */}
            <div className="space-y-4 sm:space-y-0">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide">
                <span className="gradient-text righteous-regular">
                  João Vitor Oliveira TC
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground bree-serif-regular">
                  <span
                    className="inline-flex items-center"
                    style={{ verticalAlign: "middle", whiteSpace: "pre" }}
                  >
                    {typingText}
                    <span
                      className="w-2"
                      style={{
                        height: "1em", // altura igual ao texto
                        background: "var(--muted-foreground)",
                        borderRadius: 2,
                        marginLeft: "0.25em",
                        display: "inline-block",
                        animation: "pulse 1s infinite",
                        verticalAlign: "middle",
                      }}
                    ></span>
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 space-mono-regular">
                Especializado em criar experiências digitais excepcionais com
                <br />
                <span className="font-semibold" style={{ color: "#61DAFB" }}>
                  {" "}
                  React
                </span>
                ,
                <span className="font-semibold" style={{ color: "#339933" }}>
                  {" "}
                  Node.js
                </span>
                ,
                <span className="font-semibold" style={{ color: "#3178C6" }}>
                  {" "}
                  TypeScript
                </span>{" "}
                e
                <span className="font-semibold" style={{ color: "#F7DF1E" }}>
                  {" "}
                  JavaScript
                </span>
                .
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0 mb-8">
              <a
                href="#projects"
                className="btn-neon group w-full sm:w-auto flex items-center justify-center gap-2 "
              >
                <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explorar Projetos</span>
              </a>
              <a
                href="#contact"
                className="btn-neon group w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Iniciar Conversa</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="https://github.com/jotaveeo" className="group">
                <div className="p-3 sm:p-4 rounded-xl border border-border group-hover:border-primary transition-all group-hover:neon-glow">
                  <Github className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-primary transition-colors" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/jotaveeodev"
                className="group"
              >
                <div className="p-3 sm:p-4 rounded-xl border border-border group-hover:border-accent transition-all group-hover:neon-glow-blue">
                  <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-accent transition-colors" />
                </div>
              </a>
              <a href="mailto:joaovitorgoku10@gmail.com" className="group">
                <div className="p-3 sm:p-4 rounded-xl border border-border group-hover:border-pink-500 transition-all group-hover:neon-glow-pink">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-pink-500 transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* About Section */}
      <section id="about" className="py-20 relative px-2 sm:px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
              ...mas pode me chamar de João
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
              Conheça a pessoa por trás dos códigos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Prazer, me chamo João! 👨🏽‍💻
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com mais de 6 anos de experiência em tecnologias, sou
                  apaixonado por criar soluções que fazem a diferença. Minha
                  jornada começou com curiosidade pela tecnologia e se
                  transformou em uma carreira dedicada à excelência no
                  desenvolvimento de software.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Um desenvolvedor dedicado e sempre em busca de novos desafios
                  e aprendizados. Acredito no poder da tecnologia para
                  transformar o mundo e estou comprometido em contribuir para
                  essa transformação.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div
                  className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-neon"
                  tabIndex={0}
                  aria-label="Desenvolvimento Full Stack"
                >
                  <Code
                    className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-[#7D43B3] transition-colors"
                    style={{ color: "#7D43B3" }}
                  />
                  <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#7D43B3] transition-colors">
                    Desenvolvimento Full Stack
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Especializado em React, Node.js e arquiteturas modernas
                  </p>
                  <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-xs text-primary px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap font-mono">
                    React, Node.js, Arquitetura Moderna
                  </span>
                </div>
                {/* Card 2 */}
                <div
                  className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-neon-blue"
                  tabIndex={0}
                  aria-label="Resolução de Problemas"
                >
                  <Smartphone
                    className="w-8 h-8 text-accent mx-auto mb-3 group-hover:text-[#1f9eac] transition-colors"
                    style={{ color: "#1f9eac" }}
                  />
                  <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#1f9eac] transition-colors">
                    Resolução de Problemas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Abordagem analítica e pensamento criativo
                  </p>
                  <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-xs text-accent px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap font-mono">
                    Pensamento Analítico & Criativo
                  </span>
                </div>
                {/* Card 3 */}
                <div
                  className="card-cyberpunk p-5 text-center group relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-neon-pink"
                  tabIndex={0}
                  aria-label="Inovação Constante"
                >
                  <Globe
                    className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-[#BB208D] transition-colors"
                    style={{ color: "#BB208D" }}
                  />
                  <h4 className="font-semibold mb-2 righteous-regular group-hover:text-[#BB208D] transition-colors">
                    Inovação Constante
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sempre aprendendo e aplicando novas tecnologias
                  </p>
                  <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-xs text-pink-500 px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap font-mono">
                    Aprendizado & Novas Tecnologias
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-4">
                <img
                  src={trabalho}
                  alt="João trabalhando"
                  className="rounded-lg neon-glow-blue"
                />
                <img
                  src="/imgg (16).jpg"
                  alt="João em evento"
                  className="rounded-lg neon-glow-pink"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/imgg (12).jpg"
                  alt="João apresentando"
                  className="rounded-lg neon-glow"
                />
                <img
                  src="/hackathon.JPG"
                  alt="João em equipe"
                  className="rounded-lg neon-glow-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative px-2 sm:px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
              Habilidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-center mb-8 gradient-text-secondary space-mono-regular">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {categorySkills.map((skill, index) => {
                      // Cores por tecnologia
                      let iconColor = "#7D43B3";
                      let tooltip = "";
                      switch (skill.name) {
                        case "HTML":
                          iconColor = "#E44D26";
                          tooltip = "Linguagem de marcação para web";
                          break;
                        case "JavaScript":
                          iconColor = "#F7DF1E";
                          tooltip = "Linguagem de programação dinâmica";
                          break;
                        case "TypeScript":
                          iconColor = "#3178C6";
                          tooltip = "JavaScript tipado";
                          break;
                        case "React":
                          iconColor = "#61DAFB";
                          tooltip = "Biblioteca para interfaces";
                          break;
                        case "Next.js":
                          iconColor = "#000";
                          tooltip = "Framework React SSR";
                          break;
                        case "Tailwind CSS":
                          iconColor = "#38BDF8";
                          tooltip = "Framework CSS utilitário";
                          break;
                        case "Node.js":
                          iconColor = "#339933";
                          tooltip = "JavaScript no backend";
                          break;
                        case "Express":
                          iconColor = "#000";
                          tooltip = "Framework Node.js";
                          break;
                        case "MySQL":
                          iconColor = "#00758F";
                          tooltip = "Banco de dados relacional";
                          break;
                        case "MariaDB":
                          iconColor = "#003545";
                          tooltip = "Banco de dados relacional";
                          break;
                        case "Prisma ORM":
                          iconColor = "#0C344B";
                          tooltip = "ORM para Node.js";
                          break;
                        case "Python":
                          iconColor = "#3776AB";
                          tooltip = "Linguagem de programação";
                          break;
                        case "Git":
                          iconColor = "#F05032";
                          tooltip = "Controle de versão";
                          break;
                        case "AWS":
                          iconColor = "#FF9900";
                          tooltip = "Serviços em nuvem";
                          break;
                        case "Jest":
                          iconColor = "#C21325";
                          tooltip = "Testes automatizados";
                          break;
                        case "Docker":
                          iconColor = "#2496ED";
                          tooltip = "Containerização";
                          break;
                        case "VS Code":
                          iconColor = "#007ACC";
                          tooltip = "Editor de código";
                          break;
                        case "Postman":
                          iconColor = "#FF6C37";
                          tooltip = "Testes de API";
                          break;
                        case "Figma":
                          iconColor = "#F24E1E";
                          tooltip = "Design UI/UX";
                          break;
                        case "NPM":
                          iconColor = "#CB3837";
                          tooltip = "Gerenciador de pacotes";
                          break;
                        default:
                          iconColor = "#7D43B3";
                          tooltip = skill.name;
                      }
                      return (
                        <div
                          key={skill.name}
                          className="card-cyberpunk p-6 text-center group cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-primary animate-fadein"
                          tabIndex={0}
                          aria-label={skill.name}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="mb-3 flex justify-center">
                            {React.cloneElement(skill.icon, {
                              style: {
                                color: iconColor,
                                transition: "color 0.3s",
                              },
                              className:
                                "w-8 h-8 group-hover:scale-110 group-hover:drop-shadow-neon transition-all",
                            })}
                          </div>
                          <h4 className="font-semibold text-sm righteous-regular group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          {/* Tooltip */}
                          <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-xs text-primary px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap font-mono z-10">
                            {tooltip}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative px-2 sm:px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
              Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
              Soluções que criei para resolver problemas reais
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-cyberpunk overflow-hidden group ${project.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => {
                      // Busca o ícone correspondente na lista de skills
                      const skillIconObj = skills.find((s) => s.name === tech);
                      let iconColor = "#7D43B3";
                      switch (tech) {
                        case "HTML":
                          iconColor = "#E44D26";
                          break;
                        case "JavaScript":
                          iconColor = "#F7DF1E";
                          break;
                        case "TypeScript":
                          iconColor = "#3178C6";
                          break;
                        case "React":
                          iconColor = "#61DAFB";
                          break;
                        case "Next.js":
                          iconColor = "#000";
                          break;
                        case "Tailwind CSS":
                          iconColor = "#38BDF8";
                          break;
                        case "Node.js":
                          iconColor = "#339933";
                          break;
                        case "Express":
                          iconColor = "#000";
                          break;
                        case "Sequelize":
                          iconColor = "#52B0E7";
                          break;
                        case "MySQL":
                          iconColor = "#00758F";
                          break;
                        case "MariaDB":
                          iconColor = "#003545";
                          break;
                        case "Prisma ORM":
                          iconColor = "#0C344B";
                          break;
                        case "Python":
                          iconColor = "#3776AB";
                          break;
                        case "Git":
                          iconColor = "#F05032";
                          break;
                        case "AWS":
                          iconColor = "#FF9900";
                          break;
                        case "Jest":
                          iconColor = "#C21325";
                          break;
                        case "Docker":
                          iconColor = "#2496ED";
                          break;
                        case "VS Code":
                          iconColor = "#007ACC";
                          break;
                        case "Postman":
                          iconColor = "#FF6C37";
                          break;
                        case "Figma":
                          iconColor = "#F24E1E";
                          break;
                        case "NPM":
                          iconColor = "#CB3837";
                          break;
                        default:
                          iconColor = "#7D43B3";
                      }
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {skillIconObj &&
                            React.cloneElement(skillIconObj.icon, {
                              style: {
                                color: iconColor,
                                width: 20,
                                height: 20,
                                marginRight: 4,
                              },
                            })}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 relative animate-fadein px-2 sm:px-4"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 righteous-regular">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
              Pronto para transformar sua ideia em realidade? Entre em contato!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <span>jotasuportetec@gmail.com</span>
                  </div>
                  {/* <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    <span>+55 (88) 9746-0356</span>
                  </div> */}
                </div>
              </div>

              <div className="mt-4 flex gap-4 justify-left">
                <a
                  href="https://wa.me/558897460356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-700 rounded-full font-medium hover:bg-green-500/40 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/jotaveeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full font-medium hover:bg-blue-500/40 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.371 0 0 5.371 0 12c0 6.629 5.371 12 12 12s12-5.371 12-12c0-6.629-5.371-12-12-12zm5.707 8.293l-2.829 8.485c-.211.633-.764.822-1.293.633l-2.485-1.004-1.197-.484c-.492-.201-.504-.482.104-.682l.293-.098 4.262-1.801c.201-.082.412-.271.133-.389l-3.262-1.293c-.211-.082-.482-.271-.104-.389l6.293-2.293c.482-.201.764.201.633.633z" />
                  </svg>
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/joaovitorroliveeira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-pink-500/20 text-pink-700 rounded-full font-medium hover:bg-pink-500/40 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.5-.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                  Instagram
                </a>

              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/jotaveeo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jotaveeodev"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            {isSent ? (
              <div className="text-center text-green-500 text-lg font-semibold">
                <span>Mensagem enviada com sucesso!</span>
                <div className="mt-4 text-muted-foreground text-base">
                  Obrigado pelo contato! Em breve você receberá uma resposta. 😊
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${formData.from_name === "" && errorMsg
                        ? "border-red-500"
                        : "border-border"
                      }`}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${formData.email === "" && errorMsg
                        ? "border-red-500"
                        : "border-border"
                      }`}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${formData.subject === "" && errorMsg
                        ? "border-red-500"
                        : "border-border"
                      }`}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleContactChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${formData.message === "" && errorMsg
                        ? "border-red-500"
                        : "border-border"
                      }`}
                    placeholder="Conte-me sobre seu projeto..."
                    required
                  />
                </div>
                {errorMsg && (
                  <div className="w-full text-center text-red-500 font-semibold py-2 rounded bg-red-100 border border-red-300 animate-fadein">
                    {errorMsg}
                  </div>
                )}
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="w-full btn-neon flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <span className="inline-block w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                    )}
                    Enviar Mensagem
                  </button>
                  <button
                    type="button"
                    className="w-full btn-neon bg-muted-foreground text-background"
                    onClick={handleClearForm}
                  >
                    Limpar
                  </button>
                </div>

                <div className="mt-6 text-xs text-muted-foreground text-center">
                  <span className="font-semibold">Privacidade:</span> Seus dados
                  não serão compartilhados. Apenas para contato profissional.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; 2025 João Vitor Oliveira. Todos os direitos reservados.
            </p>
            <p className="mt-2">Desenvolvido com 💜 e muito ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
