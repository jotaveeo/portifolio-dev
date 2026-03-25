# Especificação do Sistema: Landing Page de Vendas

## 1. Visão Geral
- **Propósito:** Vender o infoproduto "Seu Primeiro Sistema com IA em 7 Dias".
- **Problema resolvido:** Elimina a fricção de pagamento estruturando uma apresentação cinematográfica do produto antes de enviar o lead para o checkout do Stripe.
- **Público-alvo:** Desenvolvedores iniciantes, aspirantes a criadores de produtos digitais, e entusiastas de IA ("tech enthusiasts").
- **Tipo de sistema:** Landing Page de Conversão com Checkout Misto.

## 2. Funcionalidades Principais
1. **Hero Section Dinâmica:** Apresentação da promessa ("Build the new way"), com CTA clara. (P0)
2. **Showcase do Método:** Exibição da ementa de 7 dias e do boilerplate incluso. (P0)
3. **Checkout Integrado:** Planos de precificação conectados à API do Stripe via Webhook/Checkout Session. (P0)
4. **FAQ / Depoimentos:** Sessão para matar objeções e gerar autoridade. (P1)

## 3. Arquitetura de Alto Nível
- **Padrão:** Aplicação Web (SSG/ISR) orientada ao desempenho.
- **Camadas:** Frontend presentation focado primariamente na Vercel (Next.js App Router).

## 4. Stack Tecnológica
| Tecnologia | Uso | Justificativa |
|------------|-----|---------------|
| Next.js 14 | Framework React | Desempenho extremo (Server Components) e SEO. |
| Tailwind CSS | Estilo | Padronização e customização granular do design. |
| Stripe | Gateway de Pagamento | O padrão ouro do mercado para conversão e gestão de billing. |

## 5. Entidades e Schema
Nesta aplicação estática, não há um banco de dados relacional clássico além do banco gerenciado pelo próprio Stripe (Customers, Products, Prices, Sessions). 

## 6. Endpoints da API
| Método | Rota | Descrição | Auth | Body | Response |
|--------|------|-----------|------|------|----------|
| POST | `/api/checkout_sessions` | Cria Sessão do Stripe | Não | `{ priceId }` | `{ url }` |
| POST | `/api/webhooks` | Escuta os eventos do Stripe via webhooks | Stripe SIgnature | `Stripe Event` | `{ status: 200 }` |

## 7. Requisitos Estéticos (Inspirado no Antigravity)
- **Tom & Voz:** Moderno, energia média, voltado para tech enthusiasts.
- **Paleta de Cores:**
  - Fonte/Texto Primário: `#121317` (Graphite)
  - Fundo principal: `#EDEDED` (Soft Gray)
  - Interação primária (Botões secundários): `#1F1F1F`
  - Interação de destaque: `#2FA1D6` (Azul tecnológico)
  - Acentos orgânicos: `#C5BDAD` (Bege/Areia)
- **Tipografia:** Família `Google Sans Flex` (headings) e `Google Sans` (body spacing).
- **Formatos:** Botões com alto raio de curvatura (`rounded-full` ou `9999px`) evocando design fluído.
