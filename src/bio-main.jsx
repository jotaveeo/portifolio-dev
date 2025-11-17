import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Code,
  Calendar,
  Coffee,
  Star,
  Zap,
  Activity,
  Target,
} from "lucide-react";
import "./bio-page.css";

function BioStats() {
  const [stats, setStats] = useState({
    projects: 0,
    commits: 0,
    years: 0,
    cups: 0,
  });

  const finalStats = {
    projects: 20,
    commits: 1500,
    years: 6,
    cups: 1250,
  };

  useEffect(() => {
    const animateNumbers = () => {
      Object.keys(finalStats).forEach((key) => {
        const finalValue = finalStats[key];
        const increment = finalValue / 50; // 50 frames de animação
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= finalValue) {
            current = finalValue;
            clearInterval(timer);
          }

          setStats((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, 50);
      });
    };

    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  const statItems = [
    {
      value: stats.projects,
      label: "Projetos",
      suffix: "+",
      color: "text-orange-500", // Laranja Ubuntu
      gradient: "from-orange-500 to-gray-600",
      icon: <Target className="w-5 h-5" />,
      description: "Concluídos",
    },
    {
      value: stats.commits,
      label: "Commits",
      suffix: "+",
      color: "text-gray-300", // Cinza Claro
      gradient: "from-gray-500 to-gray-700",
      icon: <Code className="w-5 h-5" />,
      description: "Este ano",
    },
    {
      value: stats.years,
      label: "Anos Exp.",
      suffix: "",
      color: "text-gray-400", // Cinza Escuro
      gradient: "from-gray-600 to-gray-800",
      icon: <Calendar className="w-5 h-5" />,
      description: "Codando",
    },
    {
      value: stats.cups,
      label: "Cafés ☕",
      suffix: "+",
      color: "text-orange-400", // Laranja Ubuntu claro
      gradient: "from-orange-400 to-orange-600",
      icon: <Coffee className="w-5 h-5" />,
      description: "Consumidos",
    },
  ];

  return (
    <div className="bio-stats-container">
      {/* Header das estatísticas */}
      <div className="bio-stats-header">
        <h2 className="bio-stats-title">
          <Activity className="w-4 h-4 md:w-5 md:h-5 text-orange-500 animate-pulse flex-shrink-0" />
          📊 Estatísticas em Tempo Real
          <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-gray-400 animate-bounce flex-shrink-0" />
        </h2>
        <p className="bio-stats-subtitle">
          Dados atualizados • Performance em alta
        </p>
      </div>

      {/* Grid das estatísticas */}
      <div className="bio-stats-grid">
        {statItems.map((item, index) => (
          <div key={item.label} className="bio-stat-card">
            {/* Pulse indicator */}
            <div className="bio-stat-pulse"></div>

            {/* Conteúdo */}
            <div className="bio-stat-content">
              {/* Ícone */}
              <div className="bio-stat-icon">{item.icon}</div>

              {/* Valor principal */}
              <div className="bio-stat-number">
                {item.value}
                {item.suffix}
              </div>

              {/* Label */}
              <div className="bio-stat-label">{item.label}</div>

              {/* Descrição */}
              <div className="bio-stat-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer das estatísticas */}
      <div className="bio-stats-footer">
        <p className="bio-stats-footer-text">
          <Zap className="w-4 h-4 animate-pulse text-orange-500" />
          ⚡ Performance em alta constante
          <Star
            className="w-4 h-4 text-orange-400 animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </p>
      </div>
    </div>
  );
}

const BioPage = () => {
  return (
    <div className="bio-container">
      {/* Elementos de fundo glitch */}
      <div className="glitch-lines">
        <div className="glitch-line"></div>
        <div className="glitch-line"></div>
        <div className="glitch-line"></div>
      </div>

      <div className="digital-fragments">
        <div className="fragment"></div>
        <div className="fragment"></div>
        <div className="fragment"></div>
        <div className="fragment"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="bio-content">
        {/* Header com avatar e informações */}
        <header className="bio-header">
          <div className="bio-avatar">
            <img src="/jota.jpg" alt="João Vitor - Desenvolvedor" />
          </div>
          <h1 className="bio-title">João Vitor Oliveira</h1>
          <p className="bio-subtitle">
            Desenvolvedor Full Stack & Tech Creator
          </p>

          {/* Estatísticas em tempo real */}
          <BioStats />
        </header>

        {/* Links principais */}
        <div className="bio-links">
          {/* Link em destaque - Portfólio */}
          <a href="/" className="bio-link featured">
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">Meu Site Completo</div>
              <div className="bio-link-description">
                Todos os meus projetos e experiências tech
              </div>
            </div>
            <div className="bio-link-badge">🚀 NOVO</div>
          </a>

          {/* NoControle - App em destaque */}
          <a
            href="https://nocontrole-front.netlify.app/"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 14L12 9L17 14H7Z" />
              <path d="M2 12C2 6.48 6.48 2 12 2S22 6.48 22 12 17.52 22 12 22 2 17.52 2 12Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">App Financeiro</div>
              <div className="bio-link-description">
                NoControle financeiro e inovador
              </div>
            </div>
            <div className="bio-link-badge">⚡ HOT</div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jotaveeodev"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.447 11.081 20.447 14.166V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">LinkedIn Profissional</div>
              <div className="bio-link-description">
                Conecte-se • +300 conexões
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jotaveeo/"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">GitHub - Perfil</div>
              <div className="bio-link-description">20+ repositórios</div>
            </div>
          </a>

          {/* Instagram Tech */}
          <a
            href="https://www.instagram.com/joaovitorroliveeira/"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12S8.597 18.163 12 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C18.406 4.955 17.761 5.6 16.961 5.6C16.161 5.6 15.515 4.955 15.515 4.155C15.515 3.355 16.161 2.709 16.961 2.709C17.761 2.709 18.406 3.355 18.406 4.155Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">Instagram</div>
              <div className="bio-link-description">
                Bastidores do desenvolvimento • Dicas de programação
              </div>
            </div>
          </a>

          {/* WhatsApp Direto */}
          <a
            href="https://wa.me/558897460356"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">WhatsApp Direto</div>
              <div className="bio-link-description">Contato instantâneo</div>
            </div>
            <div className="bio-link-badge">💬 AGORA</div>
          </a>

          {/* JV Marketing Agency */}
          <a
            href="https://jvmarketingagency.com"
            className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="bio-link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
              <path d="M6 10H8V12H6V10ZM6 14H8V16H6V14ZM6 6H8V8H6V6ZM10 6H18V8H10V6ZM10 10H18V12H10V10ZM10 14H18V16H10V14Z" />
            </svg>
            <div className="bio-link-content">
              <div className="bio-link-title">vem por aí!</div>
              <div className="bio-link-description">
                Marketing Digital & Desenvolvimento Web
              </div>
            </div>
            <div className="bio-link-badge">🚀 PREMIUM</div>
          </a>
        </div>

        {/* Footer com redes sociais */}
        <footer className="bio-footer">
          <div className="social-links">
            <a
              href="https://www.instagram.com/joaovitorroliveeira/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12S8.597 18.163 12 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C18.406 4.955 17.761 5.6 16.961 5.6C16.161 5.6 15.515 4.955 15.515 4.155C15.515 3.355 16.161 2.709 16.961 2.709C17.761 2.709 18.406 3.355 18.406 4.155Z" />
              </svg>
            </a>
            <a
              href="https://github.com/jotaveeo/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jotaveeodev"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.447 11.081 20.447 14.166V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/558897460356"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.19 1.62 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.26-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
              </svg>
            </a>
          </div>
          <div className="bio-footer-text">
            <p>
              &copy; 2025 João Vitor Oliveira. Todos os direitos reservados.
            </p>
            <p>Desenvolvido com 💜 e muito ☕</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Renderização apenas se estiver sendo usado como página independente
if (typeof document !== "undefined" && document.getElementById("bio-root")) {
  const container = document.getElementById("bio-root");
  const root = createRoot(container);
  root.render(<BioPage />);
}

// Export para uso em rotas
export default BioPage;
