import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error("Erro ao processar JSON do AbacatePay Webhook", err);
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  // A documentação do AbacatePay define um evento detalhado do cliente e status da cobrança
  // O status que indica sucesso é geralmente `PAID` 
  
  if (body.data?.status === "PAID") {
    // Obter email do payload
    const customerEmail = body.data?.customer?.email;
    const customerName = body.data?.customer?.name || "Dev";

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: "Guia Desenvolvedor IA <onboarding@resend.dev>",
          to: customerEmail,
          subject: "Seu acesso Pix chegou: Guia Engenharia de Software com IA",
          react: WelcomeEmail({ customerName }),
        });
        console.log(`Email de acesso enviado com sucesso para ${customerEmail} (Pix/AbacatePay)`);
      } catch (error) {
        console.error("Erro ao enviar email pelo Resend:", error);
      }
    }
  }

  return new NextResponse(null, { status: 200 });
}
