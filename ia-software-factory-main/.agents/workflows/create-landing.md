---
description: Gerar landing page cinematográfica com design premium e animações
---

# /create-landing — Landing Page Cinematográfica

## Passo 1 — Coletar informações

Pergunte ao usuário estas 4 perguntas:

1. **Qual é o nome da marca e o propósito em uma frase?**
2. **Escolha uma direção estética:**
   - **A — Organic Tech** (boutique clínica, tons de musgo e argila)
   - **B — Midnight Luxe** (editorial sombrio, obsidiana e champagne)
   - **C — Brutalist Signal** (precisão bruta, papel e vermelho sinal)
   - **D — Vapor Clinic** (biotecnologia neon, preto profundo e plasma)
3. **Quais são suas 3 principais propostas de valor?** (frases curtas)
4. **Qual é o CTA principal?** (ex: "Iniciar teste grátis", "Entrar na lista de espera")

## Passo 2 — Mapear preset estético

### Preset A — Organic Tech
- **Palette:** Musgo `#2E4036`, Argila `#CC5833`, Creme `#F2F0E9`, Carvão `#1A1A1A`
- **Fonts:** Plus Jakarta Sans + Outfit (headings), Cormorant Garamond Italic (drama), IBM Plex Mono (data)
- **Images:** floresta escura, texturas orgânicas, musgo, vidrarias de laboratório

### Preset B — Midnight Luxe
- **Palette:** Obsidiana `#0D0D12`, Champagne `#C9A84C`, Marfim `#FAF8F5`, Ardósia `#2A2A35`
- **Fonts:** Inter (headings), Playfair Display Italic (drama), JetBrains Mono (data)
- **Images:** mármore escuro, detalhes em ouro, sombras arquitetônicas

### Preset C — Brutalist Signal
- **Palette:** Papel `#E8E4DD`, Vermelho `#E63B2E`, Off-white `#F5F3EE`, Preto `#111111`
- **Fonts:** Space Grotesk (headings), DM Serif Display Italic (drama), Space Mono (data)
- **Images:** concreto, arquitetura brutalista, matérias-primas

### Preset D — Vapor Clinic
- **Palette:** Deep Void `#0A0A14`, Plasma `#7B61FF`, Fantasma `#F0EFF4`, Grafite `#18181B`
- **Fonts:** Sora (headings), Instrument Serif Italic (drama), Fira Code (data)
- **Images:** bioluminescência, neon, microscopia

## Passo 3 — Construir o site

Stack: **React (Vite) + Tailwind CSS + GSAP 3 (ScrollTrigger) + Lucide React**

### Seções obrigatórias (nesta ordem):

1. **Navbar** — pill-shaped flutuante, transparente no hero, blur com scroll
2. **Hero** — 100dvh, imagem Unsplash com gradient overlay, tipografia contrastante, CTA
3. **Features** — 3 cards interativos (Shuffler animado, Typewriter monoespaçado, Scheduler com cursor SVG)
4. **Philosophy** — fundo escuro, parallax, texto manifesto com SplitText reveal
5. **Protocol** — 3 cards sticky stacking com animações canvas/SVG
6. **Pricing** — 3 tiers (Essencial, Performance, Enterprise)
7. **Footer** — escuro, grid layout, indicador "System Operational"

### Design system fixo:
- Noise overlay CSS com `<feTurbulence>` opacity 0.05
- Bordas `rounded-[2rem]` a `rounded-[3rem]` — zero cantos vivos
- Botões magnéticos: `scale(1.03)` hover com `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- GSAP: `gsap.context()` em useEffect, cleanup com `ctx.revert()`
- Easing: `power3.out` (entradas), `power2.inOut` (transformações)
- Stagger: `0.08` (texto), `0.15` (cards)

## Passo 4 — Validar

- Execute `npm run dev` e abra no navegador
- Teste todas as animações e interações
- Verifique responsividade mobile
- Todas as imagens devem carregar (URLs reais do Unsplash)

// turbo-all
