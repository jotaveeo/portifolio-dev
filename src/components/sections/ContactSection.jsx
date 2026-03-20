import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MessageCircle, Globe, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Github, Linkedin } from "lucide-react";

export function ContactSection() {
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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(
        "Erro de configuração: Chaves do EmailJS ausentes no arquivo .env",
      );
      setIsLoading(false);
      return;
    }

    // Passamos explicitamente os parâmetros que o template do EmailJS pede!
    const templateParams = {
      from_name: formData.from_name,
      to_name: formData.to_name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email, // Importante para o {{reply_to}} do template
      subject: formData.subject,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        setIsSent(true);
        setIsLoading(false);
        handleClearForm();
      },
      (error) => {
        console.error("Erro completo do EmailJS:", error);
        setErrorMsg(
          "Não foi possível enviar a mensagem. Verifique a configuração do seu .env e do EmailJS Dashboard.",
        );
        setIsLoading(false);
      },
    );
  };

  const handleClearForm = () => {
    setFormData({
      from_name: "",
      to_name: "João Vitor",
      email: "",
      subject: "",
      message: "",
    });
    setErrorMsg("");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.03),transparent_50%)]"></div>
      </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 pl-4 pr-4">
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

          <div>
            {isSent ? (
              <div className="card-cyberpunk p-8 sm:p-12 text-center h-full flex flex-col justify-center">
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
      </div>
    </section>
  );
}
