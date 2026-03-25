import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16" as any, // fallback para suportar tipagens
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    console.error("Webhook Error (Stripe):", error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    // Pagamento concluído com sucesso
    // Obter o email do cliente do Stripe
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "Dev";

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: "Guia Desenvolvedor IA <onboarding@resend.dev>", // Substitua pelo seu domínio verificado depois, ex: "guia@seudominio.com"
          to: customerEmail,
          subject: "Seu acesso chegou: Guia Engenharia de Software com IA",
          react: WelcomeEmail({ customerName }),
        });
        console.log(`Email de acesso enviado com sucesso para ${customerEmail} (Stripe)`);
      } catch (error) {
        console.error("Erro ao enviar email pelo Resend:", error);
      }
    }
  }

  return new NextResponse(null, { status: 200 });
}
