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
  FaJava,
  FaLinux,
  FaWindows,
  FaServer,
  FaCloud,
  FaCss3Alt,
  FaGithub,
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
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiApache,
  SiGraphql,
  SiSass,
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
      title: "Link na Bio Pessoal",
      description:
        "Página personalizada com links para redes sociais, projetos e contatos. Design moderno com animações e estatísticas dinâmicas.",
      image: "/linkinbio.png",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/jotaveeo/",
      demo: "/bio",
      // featured: true,
      // isInternal: true,
      // badge: "🔗 Bio"
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
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Gerador de Recibos",
      description:
        "Aplicativo para geração de recibos para pequenos negócios com templates personalizáveis e exportação em PDF.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "DownloadVideos API",
      description:
        "Site simples para fazer download de vídeos de diversas plataformas, podendo escolher a qualidade e o formato do arquivo.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "MarketPlace NFT Simples (Web3)",
      description:
        "Plataforma básica para compra e venda de NFTs com integração de carteira digital e contratos inteligentes.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Encontre seu barbeiro favorito",
      description:
        "Plataforma para encontrar e agendar horários com barbeiros locais, com avaliações e fotos de cortes anteriores.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Remuneração em casa",
      description:
        "Sistema para papais e mamães gerenciarem a mesada dos filhos, com metas de economia e recompensas com serviços domésticos.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Loja de roupas Developer",
      description:
        "E-commerce de roupas temáticas para desenvolvedores, com designs exclusivos e integração com redes sociais.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Loja Ella - Moda Feminina",
      description:
        "E-commerce de moda feminina com catálogo diversificado, sistema de recomendações e checkout simplificado.",
      image: "/ella.png",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Marketplace Next",
      description:
        "Plataforma que usa varios marketplaces para vender e reunir produtos de diferentes lojas, com sistema de comparação de preços.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto em Electron",
      description:
        "Aplicativo desktop simples desenvolvido com Electron, demonstrando integração com APIs e funcionalidades básicas.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "API de pagamentos completo",
      description:
        "API robusta para processamento de pagamentos online, com suporte a múltiplos gateways e segurança avançada. gerar qr code e ate manipular e ter controle total das operações.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Blog com AdSense + IA",
      description:
        "Blog otimizado para SEO com integração de anúncios do Google AdSense e geração de conteúdo automatizada por IA.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema para serviços automotivos",
      description:
        "Plataforma para agendamento e gerenciamento de serviços automotivos, com histórico de manutenção e lembretes.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Atendimento automatizado com IA + WhatsApp",
      description:
        "Sistema de atendimento automatizado via WhatsApp com integração de IA para respostas inteligentes com agendamento e pedidos de serviços.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto em Electron",
      description:
        "Aplicativo desktop simples desenvolvido com Electron, demonstrando integração com APIs e funcionalidades básicas.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Agenda de frequência para karatê",
      description:
        "Sistema de gerenciamento de frequência para aulas de karatê, com controle de presença e relatórios de desempenho.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema para Pets com IA + Full Stack",
      description:
        "Processando informações de saúde e bem-estar dos pets, com recomendações personalizadas e agendamento de consultas.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto para engenheiros + IA + Full Stack",
      description:
        "Sistema de gerenciamento de projetos de engenharia com IA para otimização de recursos e cronogramas.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
    {
      title: "Projeto para esportes + IA + Full Stack",
      description:
        "Sistema de análise de desempenho esportivo com IA, com apostas e estatísticas em tempo real.",
      image: "/bannerdev.jpg",
      tech: [],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    // Linguagens
    {
      name: "JavaScript",
      category: "Linguagens",
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      category: "Linguagens",
      icon: <SiTypescript />,
      color: "#3178C6",
    },
    // { name: "Python", category: "Linguagens", icon: <FaPython />, color: "#3776AB" },
    {
      name: "Java",
      category: "Linguagens",
      icon: <FaJava />,
      color: "#007396",
    },

    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs />,
      color: "#000000",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    // { name: "Sass", category: "Frontend", icon: <SiSass />, color: "#CC6699" },

    // Backend & APIs
    {
      name: "Node.js",
      category: "Backend & APIs",
      icon: <FaNodeJs />,
      color: "#339933",
    },
    {
      name: "Express.js",
      category: "Backend & APIs",
      icon: <SiExpress />,
      color: "#000000",
    },
    {
      name: "RESTful APIs",
      category: "Backend & APIs",
      icon: <FaServer />,
      color: "#FF6C37",
    },
    // { name: "GraphQL", category: "Backend & APIs", icon: <SiGraphql />, color: "#E10098" },
    {
      name: "Prisma ORM",
      category: "Backend & APIs",
      icon: <SiPrisma />,
      color: "#2D3748",
    },
    {
      name: "Sequelize",
      category: "Backend & APIs",
      icon: <SiSequelize />,
      color: "#52B0E7",
    },

    // Banco de Dados
    {
      name: "MySQL",
      category: "Banco de Dados",
      icon: <SiMysql />,
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      category: "Banco de Dados",
      icon: <SiPostgresql />,
      color: "#336791",
    },
    {
      name: "MongoDB",
      category: "Banco de Dados",
      icon: <SiMongodb />,
      color: "#47A248",
    },
    {
      name: "MariaDB",
      category: "Banco de Dados",
      icon: <SiMariadb />,
      color: "#003545",
    },
    {
      name: "SQLite",
      category: "Banco de Dados",
      icon: <SiSqlite />,
      color: "#003B57",
    },

    // Ferramentas & DevOps
    {
      name: "Git",
      category: "Ferramentas & DevOps",
      icon: <FaGit />,
      color: "#F05032",
    },
    {
      name: "GitHub",
      category: "Ferramentas & DevOps",
      icon: <FaGithub />,
      color: "#181717",
    },
    {
      name: "Docker",
      category: "Ferramentas & DevOps",
      icon: <SiDocker />,
      color: "#2496ED",
    },
    // { name: "AWS", category: "Ferramentas & DevOps", icon: <FaAws />, color: "#FF9900" },
    // { name: "Vercel", category: "Ferramentas & DevOps", icon: <SiVercel />, color: "#000000" },
    {
      name: "Netlify",
      category: "Ferramentas & DevOps",
      icon: <SiNetlify />,
      color: "#00C7B7",
    },
    {
      name: "Jest",
      category: "Ferramentas & DevOps",
      icon: <SiJest />,
      color: "#C21325",
    },
    {
      name: "Postman",
      category: "Ferramentas & DevOps",
      icon: <SiPostman />,
      color: "#FF6C37",
    },
    {
      name: "VS Code",
      category: "Ferramentas & DevOps",
      icon: <VscVscode />,
      color: "#007ACC",
    },
    {
      name: "NPM",
      category: "Ferramentas & DevOps",
      icon: <SiNpm />,
      color: "#CB3837",
    },

    // Suporte & Infraestrutura
    {
      name: "Linux",
      category: "Suporte & Infraestrutura",
      icon: <FaLinux />,
      color: "#FCC624",
    },
    // { name: "Windows Server", category: "Suporte & Infraestrutura", icon: <FaWindows />, color: "#0078D6" },
    // { name: "Nginx", category: "Suporte & Infraestrutura", icon: <SiNginx />, color: "#009639" },
    // { name: "Apache", category: "Suporte & Infraestrutura", icon: <SiApache />, color: "#D22128" },
    // { name: "VPS", category: "Suporte & Infraestrutura", icon: <FaServer />, color: "#5865F2" },
    {
      name: "Cloud",
      category: "Suporte & Infraestrutura",
      icon: <FaCloud />,
      color: "#4285F4",
    },
    {
      name: "Figma",
      category: "Suporte & Infraestrutura",
      icon: <SiFigma />,
      color: "#F24E1E",
    },
  ];

  const skillCategories = {
    Linguagens: skills.filter((skill) => skill.category === "Linguagens"),
    Frontend: skills.filter((skill) => skill.category === "Frontend"),
    "Backend & APIs": skills.filter(
      (skill) => skill.category === "Backend & APIs"
    ),
    "Banco de Dados": skills.filter(
      (skill) => skill.category === "Banco de Dados"
    ),
    "Ferramentas & DevOps": skills.filter(
      (skill) => skill.category === "Ferramentas & DevOps"
    ),
    "Suporte & Infraestrutura": skills.filter(
      (skill) => skill.category === "Suporte & Infraestrutura"
    ),
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
          
          {/* Partículas animadas - Superior esquerdo */}
          <div
            className="absolute left-10 top-10 w-2 h-2 bg-primary/40 rounded-full animate-ping"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute left-32 top-24 w-1.5 h-1.5 bg-accent/50 rounded-full animate-ping"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute left-20 top-40 w-1 h-1 bg-pink-500/40 rounded-full animate-ping"
            style={{ animationDuration: "2.8s", animationDelay: "1s" }}
          ></div>
          
          {/* Partículas animadas - Superior direito */}
          <div
            className="absolute right-16 top-20 w-2 h-2 bg-accent/40 rounded-full animate-ping"
            style={{ animationDuration: "3.5s", animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute right-32 top-32 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping"
            style={{ animationDuration: "2.7s", animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute right-48 top-16 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping"
            style={{ animationDuration: "3.2s", animationDelay: "1.2s" }}
          ></div>
          
          {/* Partículas animadas - Inferior esquerdo */}
          <div
            className="absolute left-24 bottom-32 w-2 h-2 bg-green-400/40 rounded-full animate-ping"
            style={{ animationDuration: "2.9s", animationDelay: "0.6s" }}
          ></div>
          <div
            className="absolute left-40 bottom-20 w-1.5 h-1.5 bg-pink-500/50 rounded-full animate-ping"
            style={{ animationDuration: "3.3s", animationDelay: "1.1s" }}
          ></div>
          <div
            className="absolute left-16 bottom-48 w-1 h-1 bg-accent/40 rounded-full animate-ping"
            style={{ animationDuration: "2.6s", animationDelay: "0.4s" }}
          ></div>
          
          {/* Partículas animadas - Inferior direito */}
          <div
            className="absolute right-16 bottom-16 w-1.5 h-1.5 bg-accent/40 rounded-full animate-ping"
            style={{ animationDuration: "3.2s" }}
          ></div>
          <div
            className="absolute right-28 bottom-28 w-2 h-2 bg-primary/50 rounded-full animate-ping"
            style={{ animationDuration: "2.4s", animationDelay: "0.7s" }}
          ></div>
          <div
            className="absolute right-40 bottom-40 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping"
            style={{ animationDuration: "3.1s", animationDelay: "0.9s" }}
          ></div>
          
          {/* Partículas animadas - Centro */}
          <div
            className="absolute left-1/4 top-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping"
            style={{ animationDuration: "3.4s", animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute right-1/3 top-1/4 w-1 h-1 bg-primary/30 rounded-full animate-ping"
            style={{ animationDuration: "2.8s", animationDelay: "0.2s" }}
          ></div>
          <div
            className="absolute left-1/3 bottom-1/3 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-ping"
            style={{ animationDuration: "3s", animationDelay: "1.3s" }}
          ></div>
          <div
            className="absolute right-1/4 bottom-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-ping"
            style={{ animationDuration: "2.7s", animationDelay: "0.5s" }}
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
                  Com anos de vivência em tecnologias, sou apaixonado por criar
                  soluções que fazem a diferença. Minha jornada começou com
                  curiosidade pela tecnologia e se transformou em uma carreira
                  dedicada à excelência no desenvolvimento de software.
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Certificações & Conquistas
                </h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {/* Certificate 1 - Destaque */}
                  <div className="group relative card-cyberpunk p-4 hover:border-yellow-500/50 transition-all cursor-pointer bg-yellow-500/5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-yellow-500 transition-colors">
                          🏆 Top 10 Melhores Alunos - Full Stack
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Geração Tech • Dez 2024
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 2 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Desenvolvedor Full Stack
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Geração Tech • Dez 2024
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 3 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-accent/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          O-HACKA-TA-ON 3ª Edição
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          UNIFOR + M. Dias Branco • Jun 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 4 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-pink-500/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-pink-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-pink-500 transition-colors">
                          Introdução a UX/UI Design
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          CITINOVA • Mai 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 5 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-green-500/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-green-500 transition-colors">
                          Siará Tech Summit 2024
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sebrae • Nov 2024
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 6 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-blue-500/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                          Bootcamp Bradesco - Java e QA
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          DIO • Nov 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 7 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-orange-500/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-orange-500 transition-colors">
                          Versionamento com Git e GitHub
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          DIO • Nov 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate 8 */}
                  <div className="group relative card-cyberpunk p-4 hover:border-purple-500/50 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-purple-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                          Portfólio de Dados em 2 Dias
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          EBAC • Nov 2025
                        </p>
                      </div>
                    </div>
                  </div>
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
              Stack Tecnológica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto bree-serif-regular">
              Tecnologias, ferramentas e infraestrutura que utilizo no dia a dia
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div key={category} className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text-secondary space-mono-regular px-4 py-2 rounded-lg bg-card/50 border border-border/50">
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className="group relative">
                        <div
                          className="card-cyberpunk p-5 text-center cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary animate-fadein"
                          tabIndex={0}
                          aria-label={skill.name}
                          style={{
                            animationDelay: `${index * 0.05}s`,
                            borderColor: `${skill.color}20`,
                          }}
                        >
                          {/* Icon with dynamic color */}
                          <div className="mb-3 flex justify-center">
                            {React.cloneElement(skill.icon, {
                              style: {
                                color: skill.color,
                                filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                                transition: "all 0.3s ease",
                              },
                              className:
                                "w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform",
                            })}
                          </div>

                          {/* Skill name */}
                          <h4 className="font-semibold text-xs sm:text-sm righteous-regular group-hover:text-primary transition-colors leading-tight">
                            {skill.name}
                          </h4>

                          {/* Subtle accent bar */}
                          <div
                            className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                            }}
                          ></div>
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
                          <div
                            className="px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap shadow-xl border"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              borderColor: skill.color,
                              color: skill.color,
                            }}
                          >
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    ))}
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
                className={`card-cyberpunk overflow-hidden group ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
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
                        case "Java":
                          iconColor = "#007396";
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
        className="py-12 sm:py-16 lg:py-20 relative animate-fadein px-4 sm:px-6 lg:px-8"
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-3 sm:mb-4 righteous-regular">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bree-serif-regular px-4">
              Pronto para transformar sua ideia em realidade? Entre em contato e
              vamos criar algo incrível juntos!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Contact Info */}
              <div className="card p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 gradient-text-secondary flex items-center gap-3">
                  <Mail className="w-7 h-7 text-primary" />
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 hover:border-border transition-colors">
                    <div className="w-12 h-12 bg-card/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Email Principal
                      </p>
                      <a
                        href="mailto:jotasuportetec@gmail.com"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        jotasuportetec@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Methods */}
              <div className="card p-5 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  Contato Rápido
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/558897460356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 bg-card/30 border border-border/50 rounded-lg hover:bg-card/50 hover:border-border transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center group-hover:bg-card/70 transition-all duration-300 group-hover:scale-110">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-green-600"
                      >
                        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-green-600 group-hover:text-green-500">
                        WhatsApp
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Resposta rápida
                      </p>
                    </div>
                  </a>

                  <a
                    href="/bio"
                    className="group flex items-center gap-3 p-3 bg-card/30 border border-border/50 rounded-lg hover:bg-card/50 hover:border-border transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-card/50 rounded-full flex items-center justify-center group-hover:bg-card/70 transition-all duration-300 group-hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-accent group-hover:text-accent/80">
                        Link in Bio
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Todos os links
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Networks */}
              <div className="card p-5 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <Globe className="w-6 h-6 text-pink-500" />
                  Redes Sociais
                </h4>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a
                    href="https://github.com/jotaveeo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-xl border border-border/50 group-hover:border-primary transition-all group-hover:neon-glow bg-card/30 group-hover:bg-card/50 group-hover:scale-110">
                      <Github className="w-8 h-8 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jotaveeodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-xl border border-border/50 group-hover:border-accent transition-all group-hover:neon-glow-blue bg-card/30 group-hover:bg-card/50 group-hover:scale-110">
                      <Linkedin className="w-8 h-8 group-hover:text-accent transition-colors" />
                    </div>
                  </a>
                  <a
                    href="https://t.me/jotaveeo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-xl border border-border/50 group-hover:border-blue-500 transition-all group-hover:neon-glow-blue bg-card/30 group-hover:bg-card/50 group-hover:scale-110">
                      <svg
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-foreground group-hover:text-blue-500 transition-colors"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/joaovitorroliveeira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-xl border border-border/50 group-hover:border-pink-500 transition-all group-hover:neon-glow-pink bg-card/30 group-hover:bg-card/50 group-hover:scale-110">
                      <svg
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-foreground group-hover:text-pink-500 transition-colors"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.5-.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {isSent ? (
              <div className="card-cyberpunk p-8 sm:p-12 text-center">
                <div className="w-20 h-20 bg-card/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-500 mb-4">
                  Mensagem Enviada!
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Obrigado pelo contato! Em breve você receberá uma resposta. 😊
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setIsSent(false)} className="btn-neon">
                    Enviar Nova Mensagem
                  </button>
                  <a
                    href="https://wa.me/558897460356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30"
                  >
                    WhatsApp Direto
                  </a>
                </div>
              </div>
            ) : (
              <div className="card-cyberpunk p-6 sm:p-8">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 flex items-center gap-3">
                    <MessageCircle className="w-7 h-7 text-accent" />
                    Envie sua Mensagem
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e eu retornarei o mais breve
                    possível.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="from_name"
                        className="block text-sm font-semibold mb-3 text-foreground"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleContactChange}
                        className={`w-full px-4 py-4 bg-card/80 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground/50 ${
                          formData.from_name === "" && errorMsg
                            ? "border-red-500 focus:ring-red-500"
                            : "border-border hover:border-primary/50"
                        }`}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-3 text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleContactChange}
                        className={`w-full px-4 py-4 bg-card/80 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground/50 ${
                          formData.email === "" && errorMsg
                            ? "border-red-500 focus:ring-red-500"
                            : "border-border hover:border-primary/50"
                        }`}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-3 text-foreground"
                    >
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleContactChange}
                      className={`w-full px-4 py-4 bg-card/80 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-muted-foreground/50 ${
                        formData.subject === "" && errorMsg
                          ? "border-red-500 focus:ring-red-500"
                          : "border-border hover:border-primary/50"
                      }`}
                      placeholder="Assunto da sua mensagem"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-3 text-foreground"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleContactChange}
                      rows={6}
                      className={`w-full px-4 py-4 bg-card/80 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none placeholder-muted-foreground/50 ${
                        formData.message === "" && errorMsg
                          ? "border-red-500 focus:ring-red-500"
                          : "border-border hover:border-primary/50"
                      }`}
                      placeholder="Conte-me sobre seu projeto, suas necessidades ou qualquer dúvida que tenha..."
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="w-full text-center text-red-500 font-semibold py-4 px-6 rounded-xl bg-red-500/10 border-2 border-red-500/20 animate-fadein">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errorMsg}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 btn-neon flex items-center justify-center gap-3 py-4 text-lg font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="inline-block w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="flex-1 sm:flex-none btn-neon bg-muted/20 text-muted-foreground border-muted/50 hover:bg-muted/30 py-4 text-lg font-semibold"
                      onClick={handleClearForm}
                    >
                      Limpar
                    </button>
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">
                          Privacidade e Segurança
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Seus dados são tratados com total confidencialidade e
                          não serão compartilhados com terceiros. Utilizo essas
                          informações apenas para contato profissional e
                          resposta às suas solicitações.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
