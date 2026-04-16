---
description: Gerar código frontend completo a partir da arquitetura e contratos de API usando Checkpoints e Reflection
---

# /generate-frontend — Geração de Frontend (Frontend Agent)

## Pré-requisito

A arquitetura (`docs/architecture.md`), contratos de API (`docs/openapi.yaml`) e idealmente o backend funcional devem existir.

## Passo 1 — Ler Contexto

Leia a arquitetura e os contratos de API. Identifique as rotas, payloads e respostas esperadas.

## Passo 2 — Scaffold do Projeto (Checkpoint 1)

1. Inicialize o projeto Next.js (App Router) + TypeScript.
2. Instale dependências: `tailwindcss`, `lucide-react`, `zustand`, `@tanstack/react-query`, `axios`, `zod`, `react-hook-form`.
3. Configure `tsconfig.json` com paths e strict mode.
4. Configure o TailwindCSS (`tailwind.config.ts` e `globals.css`).

**Validação do Checkpoint 1:**
- Execute `npm run dev` e confirme que a página inicial carrega.
- *Se falhar, use o padrão ReAct (Thought -> Action -> Observation) para corrigir.*

## Passo 3 — Design System e Componentes Base (Checkpoint 2)

Atue como o **Frontend Agent** e gere:

1. **Tokens de Design** — Cores, tipografia, espaçamentos (`tailwind.config.ts`).
2. **Componentes Base (UI)** — `src/components/ui/` (Button, Input, Card, Modal, Badge, Toast, Table).

**Validação do Checkpoint 2 (Reflection):**
Antes de prosseguir, faça uma auto-crítica:
- [ ] Os componentes base são reutilizáveis e aceitam `className` via props?
- [ ] A acessibilidade (ARIA) está implementada nos componentes interativos (Modal, Toast)?
- [ ] O design system está consistente com a marca/estética definida?

*Se algum critério falhar, refatore os componentes silenciosamente.*

## Passo 4 — Layout e Navegação (Checkpoint 3)

Gere:

1. **Layouts** — `src/components/layout/` (Sidebar, Header, MainLayout).
2. **Navegação** — Configuração de rotas no Next.js (App Router).

**Validação do Checkpoint 3:**
- A navegação funciona corretamente entre as páginas principais?
- O layout é responsivo (mobile-first)?

## Passo 5 — Integração com API e Estado (Checkpoint 4)

Gere:

1. **Tipos** — `src/types/api.ts` (gerados a partir do `openapi.yaml`).
2. **Services** — `src/services/api.ts` (configuração do Axios com interceptors para JWT).
3. **Hooks** — `src/hooks/` (React Query hooks para chamadas de API).
4. **Stores** — `src/stores/` (Zustand para estado global, ex: `useAuthStore`).

**Validação do Checkpoint 4:**
- Os tipos gerados batem exatamente com os contratos da API?
- O interceptor do Axios adiciona o token JWT no header `Authorization`?
- O interceptor trata erros 401 (Unauthorized) fazendo refresh do token ou logout?

## Passo 6 — Páginas e Funcionalidades (Checkpoint 5)

Implemente as páginas principais (CRUDs, Dashboards, etc.) usando os componentes base e hooks de API.

**Validação do Checkpoint 5 (Reflection):**
Antes de prosseguir, faça uma auto-crítica:
- [ ] Os formulários usam `react-hook-form` e validação com `zod`?
- [ ] O tratamento de loading e erro está visível para o usuário (Toast, Skeleton)?
- [ ] As páginas são responsivas em telas pequenas (mobile)?

*Se algum critério falhar, refatore as páginas silenciosamente.*

## Passo 7 — Auth e Segurança (Checkpoint Final)

Implemente o fluxo completo de autenticação no frontend:
- Página de Login (`/login`).
- Página de Registro (`/register`).
- Provider de Autenticação (`AuthProvider`) para proteger rotas privadas.
- Lógica de Logout.

## Passo 8 — Validação Final e Entrega

Execute `npm run build` para validar que tudo compila sem erros de TypeScript.

Apresente um resumo ao usuário e pergunte:
- "O frontend está pronto e validado. Posso prosseguir para o deploy (`/deploy-system`)?"

// turbo-all
