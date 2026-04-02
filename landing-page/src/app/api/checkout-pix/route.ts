import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ABACATEPAY_API_KEY;
    if (!apiKey) {
      console.error("Missing AbacatePay API Key");
      return NextResponse.json({ error: "Missing AbacatePay API Key" }, { status: 500 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/guia-engenharia-ia";

    const response = await fetch("https://api.abacatepay.com/v2/checkouts/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        methods: ["PIX"],
        items: [
          {
            id: "prod_KUEMnJFHSRWFHP3tsDnyqSyN",
            quantity: 1,
          }
        ],
        returnUrl: `${appUrl}/success`,
        completionUrl: `${appUrl}/success`,
        externalId: "guia-engenharia-ia",
      }),
    });

    const data = await response.json();

    console.log("AbacatePay Response Status:", response.status);
    console.log("AbacatePay Response Data:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("AbacatePay Error:", data);
      return NextResponse.json({ error: "Failed to create billing", details: data }, { status: response.status });
    }

    const checkoutUrl = data?.data?.url || data?.url;
    console.log("Checkout URL:", checkoutUrl);

    if (!checkoutUrl) {
      console.error("AbacatePay: URL not found in response", data);
      return NextResponse.json({ error: "URL not found in response" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
