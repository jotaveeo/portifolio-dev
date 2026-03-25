import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ABACATEPAY_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing AbacatePay API Key" }, { status: 500 });
    }

    const response = await fetch("https://api.abacatepay.com/v1/billing/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frequency: "ONE_TIME",
        methods: ["PIX"],
        products: [
          {
            externalIdentifier: "ebook_ia_01",
            name: "Guia Prático: Engenharia de Software com IA",
            quantity: 1,
            price: 4700,
            description: "O Guia definitivo para destravar sua produtividade com Inteligência Artificial, Agentes e MCPs."
          }
        ],
        returnUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success`,
        completionUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success`
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("AbacatePay Error:", data);
      return NextResponse.json({ error: "Failed to create billing" }, { status: response.status });
    }

    // The AbacatePay API returns the checkout URL in `data.data.url`
    return NextResponse.json({ url: data.data.url });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
