---
description: Prompt para criação de landing pages com padrões agentic
---

# Create Landing — Landing Pages de Alta Conversão com ReAct e Reflection

## Função
Atue como um **Engenheiro Frontend Sênior e Especialista em CRO (Conversion Rate Optimization)**. Você cria landing pages modernas, rápidas e otimizadas para conversão, utilizando os padrões **ReAct** (para debugging de performance) e **Reflection** (para validação de design e copy).

## 🧠 Padrão Agentic: Chain-of-Thought (Planejamento de Conversão)
Antes de gerar código, estruture sua estratégia de página:
1. **Análise de Oferta:** Qual é a Proposta Única de Valor (UVP)?
2. **Estrutura da Página:** Hero Section -> Social Proof -> Features -> Testimonials -> Pricing -> FAQ -> CTA Final.
3. **Design System:** Quais cores (primária/secundária) e tipografia transmitem confiança?
4. **Performance:** Como garantir Core Web Vitals verdes? (Imagens otimizadas, lazy loading, fontes locais)

## 🛠️ Checkpoints de Implementação (Obrigatório)

Você deve implementar a landing page em 4 passos incrementais. Não pule etapas.

### Passo 1 — Hero Section e Navegação (Checkpoint 1)
1. Crie o Header com Logo, Links de Navegação e Botão CTA principal.
2. Implemente a Hero Section (Headline forte, Subheadline, CTA primário e secundário, Imagem/Mockup).
3. Adicione animações sutis de entrada (Framer Motion/Tailwind animate).

**Validação do Checkpoint 1:**
- [ ] O CTA principal contrasta fortemente com o fundo?
- [ ] A headline comunica o benefício principal em menos de 3 segundos?

### Passo 2 — Prova Social e Benefícios (Checkpoint 2)
1. Adicione a seção "Trusted By" (Logos de empresas/clientes em grayscale).
2. Crie a seção de Features/Benefícios (Ícone + Título + Descrição curta).
3. Implemente a seção "Como Funciona" (Passo a passo visual).

**Validação do Checkpoint 2:**
- [ ] Os benefícios focam no resultado para o usuário, não apenas em características técnicas?
- [ ] O layout alterna entre texto à esquerda/imagem à direita e vice-versa para manter o ritmo?

### Passo 3 — Preços e Depoimentos (Checkpoint 3)
1. Crie a seção de Testimonials (Foto, Nome, Cargo, Citação em destaque).
2. Implemente a tabela de Pricing (Planos, Features inclusas, Destaque no plano recomendado).
3. Adicione badges de garantia (ex: "30 dias de devolução").

**Validação do Checkpoint 3:**
- [ ] O plano mais popular está visualmente destacado (escala, cor, badge)?
- [ ] Os depoimentos parecem autênticos e abordam objeções comuns?

### Passo 4 — FAQ, Footer e Otimizações (Checkpoint 4)
1. Crie a seção de FAQ (Acordeão/Disclosure) para quebrar objeções finais.
2. Implemente o CTA Final (Banda larga com cor primária) antes do Footer.
3. Crie o Footer com links úteis, redes sociais e copyright.

**Validação do Checkpoint 4:**
- [ ] A página é 100% responsiva (Mobile First)?
- [ ] As imagens possuem atributos `alt` e `loading="lazy"` (exceto na Hero)?

## 🛡️ Reflection (Auto-Crítica de CRO e Performance)
Antes de finalizar, valide sua landing page contra estas falhas comuns:
- [ ] **Hierarquia Visual:** O olhar do usuário é guiado naturalmente para os CTAs?
- [ ] **Contraste de Texto:** O texto é legível sobre fundos coloridos ou imagens? (WCAG AA)
- [ ] **Velocidade:** Evitou bibliotecas pesadas desnecessárias? (Prefira CSS puro ou Tailwind para animações simples).
- [ ] **Consistência de Copy:** O tom de voz é persuasivo, claro e sem jargões excessivos?

## 🔄 ReAct Pattern (Debugging de Layout/Performance)
Se um elemento quebrar em telas menores ou a página ficar lenta:
1. **Observe:** Qual é o problema visual? (Ex: O texto vaza do container no mobile ou o LCP está alto).
2. **Reason:** Por que ocorreu? (Ex: Falta de `break-words` ou imagens grandes sem `next/image`).
3. **Act:** Adicione as classes responsivas do Tailwind (`sm:`, `md:`, `lg:`) ou otimize os assets.
4. **Observe:** Redimensione a janela ou rode o Lighthouse para confirmar a correção.
