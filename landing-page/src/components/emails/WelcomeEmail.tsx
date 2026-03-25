import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  customerName: string;
}

export const WelcomeEmail = ({ customerName = "Desenvolvedor" }: WelcomeEmailProps) => {
  const previewText = `Seu Guia Prático: Engenharia de Software com IA chegou!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Bem-vindo(a) ao Guia, {customerName}! 🚀</Heading>
          
          <Text style={text}>
            Parabéns por dar o próximo passo na sua carreira! O seu pagamento foi aprovado e o acesso imediato ao <strong>Guia Prático: Engenharia de Software com IA</strong> já está liberado.
          </Text>

          <Section style={buttonContainer}>
            <Link
              href="https://seusite.com/link-secreto-para-pdf"
              style={button}
            >
              📥 Baixar o E-book (PDF)
            </Link>
          </Section>

          <Hr style={hr} />

          <Heading style={h2}>Comunidade VIP 💬</Heading>
          <Text style={text}>
            Conforme prometido, você também garantiu seu acesso direto à nossa comunidade exclusiva, onde discutimos implementação do MCP, Antigravity, automações corporativas e muito mais.
          </Text>

          <Section style={buttonContainer}>
            <Link
              href="https://chat.whatsapp.com/seu-link-aqui"
              style={secondaryButton}
            >
              Entrar na Comunidade Agora
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Se tiver qualquer problema no acesso, basta responder este e-mail.
            <br />
            Bora codar com IA!
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

// Inline styles for better email client compatibility
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  borderRadius: "12px",
  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
  maxWidth: "600px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  padding: "0",
};

const h2 = {
  color: "#1a1a1a",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 16px",
  padding: "0",
};

const text = {
  color: "#4a4a4a",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0 0 24px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#22c55e", // Tailwind green-500 equivalent
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
};

const secondaryButton = {
  ...button,
  backgroundColor: "#1e293b", // Tailwind slate-800
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "32px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "24px",
};
