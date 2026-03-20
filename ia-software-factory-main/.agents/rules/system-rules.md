---
description: Regras globais da AI Software Factory — princípios, padrões e stack
---

# System Rules — AI Software Factory

Você faz parte de uma **equipe de engenharia de software orientada por IA**. Estas regras se aplicam a TODA interação, independentemente do contexto.

## Idioma

- Responda sempre em **português brasileiro** salvo instrução contrária
- Código, comentários em código e nomes técnicos podem ser em inglês

## Princípios de Engenharia

Todo código gerado DEVE seguir:

- **Clean Architecture** — separação clara entre camadas (presentation, application, domain, infrastructure)
- **SOLID** — Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion
- **Separation of Concerns** — cada módulo/arquivo tem uma única responsabilidade
- **Modular Code** — componentes reutilizáveis e desacoplados
- **Type Safety** — TypeScript sempre que possível, tipagem explícita
- **Security by Design** — validação de entrada, sanitização, autenticação em toda rota protegida
- **Testability** — código testável com injeção de dependência

## Padrões de Código

- **Funções**: máximo 30 linhas, uma responsabilidade
- **Arquivos**: máximo 300 linhas
- **Nomenclatura**: camelCase (variáveis/funções), PascalCase (classes), UPPER_SNAKE_CASE (constantes), snake_case (banco de dados)
- **Nomes de arquivos**: kebab-case
- **Commits**: semânticos (feat, fix, chore, refactor, docs, test)
- **Erros**: nunca catch vazio, sempre logs estruturados com contexto
- **Documentação**: JSDoc/Docstrings para funções públicas

## Stack Padrão

Quando não especificado pelo usuário, usar:

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React / Next.js + TypeScript + Tailwind CSS |
| Backend | Node.js + Fastify + TypeScript |
| ORM | Prisma |
| Database | PostgreSQL |
| Cache | Redis |
| Auth | JWT + bcrypt |
| Validação | Zod |
| Testes | Jest + Supertest + Playwright |
| Infra | Docker + Docker Compose |
| CI/CD | GitHub Actions |

## Qualidade Obrigatória

Todo código gerado deve ser:

- **Production-ready** — sem TODOs, sem placeholders, sem código comentado
- **Bem documentado** — README, comentários em lógica complexa, swagger para APIs
- **Modular** — importável e reutilizável
- **Testado** — cobertura mínima de 80%
- **Seguro** — input validation, rate limiting, CORS configurado

## Estrutura de Projeto Backend

```
src/
├── controllers/    # Rotas e request handling
├── services/       # Lógica de negócio
├── repositories/   # Acesso a dados
├── models/         # Entidades e DTOs
├── middlewares/     # Auth, error handling, validation
├── routes/         # Definição de rotas
├── utils/          # Helpers
├── config/         # Configurações
└── app.ts          # Entry point
```

## Estrutura de Projeto Frontend

```
src/
├── components/     # Componentes reutilizáveis
│   ├── ui/         # Componentes base (Button, Input, etc.)
│   └── layout/     # Layout components (Header, Sidebar, etc.)
├── pages/          # Pages/Routes
├── hooks/          # Custom hooks
├── services/       # API calls
├── stores/         # Estado global
├── styles/         # CSS/Tailwind
├── utils/          # Helpers
└── types/          # TypeScript types
```
