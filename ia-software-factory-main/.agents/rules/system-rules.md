---
trigger: always_on
description: Regras globais da AI Software Factory — princípios, padrões e stack
---

---
description: Regras globais da AI Software Factory — princípios, padrões agentic e stack
---

# System Rules — AI Software Factory (v3.0)

Você faz parte de uma **equipe de engenharia de software orientada por IA**. Estas regras se aplicam a TODA interação, independentemente do contexto.

## Idioma

- Responda sempre em **português brasileiro** salvo instrução contrária.
- Código, comentários em código e nomes técnicos podem ser em inglês.

## Padrões Agentic Obrigatórios (O "Como" Pensar)

Você DEVE usar os seguintes padrões cognitivos em suas respostas:

1. **Reflection (Auto-Crítica):** Antes de entregar qualquer código, revise-o mentalmente contra os `QUALITY_STANDARDS.md`. Se encontrar falhas (ex: funções longas, falta de tipagem), refatore silenciosamente antes de mostrar ao usuário.
2. **ReAct (Reason + Act):** Ao debugar erros, não adivinhe. Use o ciclo: *Thought* (hipótese) -> *Action* (ler arquivo/rodar comando) -> *Observation* (resultado). Repita até encontrar a causa raiz.
3. **Chain-of-Thought:** Para decisões arquiteturais complexas, pense passo a passo em um bloco `<thought>` antes de dar a resposta final.

## Princípios de Engenharia (O "O Quê" Construir)

Todo código gerado DEVE seguir:

- **Clean Architecture** — separação clara entre camadas (presentation, application, domain, infrastructure).
- **SOLID** — Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion.
- **Separation of Concerns** — cada módulo/arquivo tem uma única responsabilidade.
- **Type Safety** — TypeScript sempre, tipagem explícita (PROIBIDO usar `any`).
- **Security by Design** — validação de entrada com Zod, sanitização, autenticação em toda rota protegida.

## Padrões de Código (Limites Rígidos)

- **Funções**: máximo 30 linhas, uma responsabilidade.
- **Arquivos**: máximo 300 linhas.
- **Nomenclatura**: camelCase (variáveis/funções), PascalCase (classes), UPPER_SNAKE_CASE (constantes), snake_case (banco de dados).
- **Erros**: NUNCA use `catch` vazio. Sempre use logs estruturados com contexto.
- **Comentários**: NUNCA deixe `// TODO` ou `// FIXME` no código final. Entregue código production-ready.

## Stack Padrão

Quando não especificado pelo usuário, usar:

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Next.js (App Router) + TypeScript + Tailwind CSS + Shadcn UI |
| Backend | Node.js + Fastify + TypeScript |
| ORM | Prisma |
| Database | PostgreSQL |
| Cache | Redis |
| Auth | JWT + bcrypt |
| Validação | Zod |
| Testes | Jest + React Testing Library |
| Infra | GitHub |

## Estrutura de Projeto Backend

```
src/
├── controllers/    # Rotas e request handling
├── services/       # Lógica de negócio
├── repositories/   # Acesso a dados
├── models/         # Entidades e DTOs (Zod)
├── middlewares/    # Auth, error handling, validation
├── routes/         # Definição de rotas
├── utils/          # Helpers
├── config/         # Configurações (Env)
└── app.ts          # Entry point
```

## Estrutura de Projeto Frontend

```
src/
├── components/     # Componentes reutilizáveis
│   ├── ui/         # Componentes base (Button, Input, etc.)
│   └── layout/     # Layout components (Header, Sidebar, etc.)
├── app/            # Pages/Routes (Next.js App Router)
├── hooks/          # Custom hooks (React Query)
├── services/       # API calls (não use axios)
├── stores/         # Estado global (Zustand)
├── utils/          # Helpers
└── types/          # TypeScript types (gerados da API)
```
