---
description: Gerar código backend completo a partir da arquitetura e schema do banco
---

# /generate-backend — Geração de Backend

## Pré-requisito

A arquitetura e o schema do banco devem existir.

## Passo 1 — Ler contexto

Leia: arquitetura (`docs/architecture.md`) + Prisma schema (`prisma/schema.prisma`).

## Passo 2 — Scaffold do projeto

1. Inicializar projeto Node.js + TypeScript
2. Instalar dependências: fastify, @fastify/cors, @fastify/jwt, prisma, @prisma/client, zod, pino
3. Configurar `tsconfig.json` com paths e strict mode

## Passo 3 — Gerar código

Atue como o **Backend Agent** (`agents/backend-agent.md`) e gere:

1. **Config** — `src/config/env.ts` (variáveis de ambiente com Zod validation)
2. **Database** — `src/config/database.ts` (Prisma client singleton)
3. **Models/DTOs** — `src/models/` (Zod schemas para input validation)
4. **Repositories** — `src/repositories/` (um por entidade, CRUD + queries customizadas)
5. **Services** — `src/services/` (lógica de negócio, um por domínio)
6. **Controllers** — `src/controllers/` (request handling, chama services)
7. **Middlewares**:
   - `src/middlewares/auth.ts` — JWT verification
   - `src/middlewares/error-handler.ts` — Error handling centralizado
   - `src/middlewares/validate.ts` — Zod validation middleware
8. **Routes** — `src/routes/` (registra controllers com prefixo)
9. **App** — `src/app.ts` (Fastify setup, plugins, routes)
10. **Server** — `src/server.ts` (entry point, listen)

## Passo 4 — Auth

Implementar fluxo completo:
- POST `/auth/register` — criar usuário, hash senha, retornar token
- POST `/auth/login` — validar credenciais, gerar JWT
- POST `/auth/refresh` — refresh token
- Middleware de auth em rotas protegidas

## Passo 5 — Testes

Gerar testes com Jest:
- Testes unitários para cada service
- Testes de integração para cada rota (Supertest)

## Passo 6 — Docs

Gerar documentação Swagger/OpenAPI das rotas.

## Passo 7 — Validar

Execute `npm run build` para validar que compila sem erros.
Pergunte ao usuário: "Backend pronto. Posso prosseguir para o frontend?"

// turbo-all
