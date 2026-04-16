---
description: Gerar especificação completa de um sistema de software a partir de uma ideia usando Chain-of-Thought
---

# /create-system — Criação de Sistema (CTO Agent)

## Passo 1 — Coletar informações (O Contexto)

Pergunte ao usuário de forma clara e direta:

1. **Qual é o sistema?** — Nome e descrição em uma frase.
2. **Quem é o público-alvo?** — Tipo de usuário (B2B, B2C, interno).
3. **Quais são as 3-5 funcionalidades principais?** — O core do valor.
4. **Existem integrações externas?** — Pagamento (Stripe), email (Resend), APIs terceiras.
5. **Alguma restrição de stack?** — Ou usar a stack padrão de `system-rules.md`.

*Aguarde as respostas antes de prosseguir para o Passo 2.*

## Passo 2 — Raciocínio Arquitetural (Chain-of-Thought)

Antes de gerar a especificação final, você DEVE pensar passo a passo. Crie um bloco `<thought>` e responda para si mesmo:

<thought>
1. **Análise de Escala:** O sistema descrito precisa de alta concorrência imediata ou um monolito modular é suficiente para o MVP?
2. **Análise de Dados:** Os dados são altamente relacionais (SQL) ou baseados em documentos (NoSQL)?
3. **Análise de Segurança:** Quais são os vetores de ataque óbvios para este tipo de sistema (ex: PII, dados financeiros)?
4. **Análise de Viabilidade:** As funcionalidades pedidas são realistas para a stack escolhida?
</thought>

## Passo 3 — Gerar Especificação (O Artefato)

Com base no seu raciocínio, gere a especificação completa contendo:

1. **Visão Geral** — Propósito, público, problema resolvido.
2. **User Stories Principais** — Formato: "Como [usuário], eu quero [ação] para [resultado]".
3. **Arquitetura de Alto Nível** — Decisão justificada (ex: Monolito Modular vs Microserviços).
4. **Stack Tecnológica** — Justificativa para cada escolha baseada no `<thought>`.
5. **Entidades Principais** — Tabelas core e seus relacionamentos.
6. **Integrações Externas** — APIs, webhooks, serviços terceiros necessários.
7. **Requisitos Não-Funcionais** — Performance, segurança, escalabilidade.

## Passo 4 — Auto-Crítica (Reflection)

Antes de me mostrar a especificação, faça uma auto-crítica rápida:
- A especificação resolve o problema original do usuário?
- Faltou alguma entidade óbvia (ex: tabela de Usuários ou Pagamentos)?
- A stack escolhida faz sentido para o problema?

*Se encontrar falhas, corrija a especificação silenciosamente.*

## Passo 5 — Validar com o Usuário

Apresente a especificação final e pergunte:
- "A especificação reflete sua visão?"
- "Algo precisa ser ajustado ou adicionado?"
- "Posso prosseguir para a fase de arquitetura detalhada (`/design-architecture`)?"

// turbo-all
