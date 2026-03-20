---
description: Gerar código frontend completo a partir da arquitetura e contratos de API
---

# /generate-frontend — Geração de Frontend

## Pré-requisito

A arquitetura e os contratos de API devem existir. Idealmente o backend já está funcional.

## Passo 1 — Ler contexto

Leia: arquitetura, contratos de API (endpoints, payloads, responses).

## Passo 2 — Scaffold do projeto

1. Criar projeto Next.js + TypeScript com `npx -y create-next-app@latest ./`
2. Instalar: tailwindcss, @tanstack/react-query, zustand, zod, react-hook-form, @hookform/resolvers, lucide-react
3. Configurar Tailwind com design tokens customizados

## Passo 3 — Design System

Antes de qualquer componente, criar:

1. **Tokens** — `src/styles/tokens.css` (cores, espaçamento, tipografia, sombras, border-radius)
2. **Componentes UI base** — em `src/components/ui/`:
   - `Button.tsx` — variantes: primary, secondary, outline, ghost, danger
   - `Input.tsx` — com label, erro, ícone
   - `Card.tsx` — com header, body, footer
   - `Modal.tsx` — com overlay, animação
   - `Badge.tsx` — status indicators
   - `Toast.tsx` — notificações
   - `Table.tsx` — com sort, pagination

## Passo 4 — Layout

1. **Layout principal** — `src/components/layout/`:
   - `Sidebar.tsx` — navegação lateral com ícones
   - `Header.tsx` — breadcrumbs, user menu, notificações
   - `MainLayout.tsx` — wrapper com sidebar + header + content area

## Passo 5 — Pages

Para cada entidade/funcionalidade, criar:
- Page de listagem (com tabela, filtros, busca, paginação)
- Page de criação (formulário com validação)
- Page de edição
- Page de visualização (detalhes)

## Passo 6 — Services

`src/services/` — funções de API para cada endpoint:
- Usar fetch ou axios
- Tipagem completa (request + response)
- Error handling consistente
- Integrar com React Query para cache e loading states

## Passo 7 — Auth

- Login page com formulário
- Register page
- Contexto de autenticação (AuthProvider)
- Protected routes (middleware de auth)
- Logout

## Passo 8 — Estado global

Zustand stores para:
- Auth state (user, token, isAuthenticated)
- UI state (sidebar open, theme, modals)

## Passo 9 — Responsividade

- Mobile-first
- Sidebar colapsável no mobile
- Tabelas scrolláveis no mobile
- Fontes e espaçamentos responsivos

## Passo 10 — Validar

Execute `npm run build` para validar que compila.
Abra no navegador e teste o fluxo principal.
Pergunte: "Frontend pronto. Posso prosseguir para o deploy?"

// turbo-all
