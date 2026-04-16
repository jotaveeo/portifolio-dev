---
description: Gerar código backend completo a partir da arquitetura e schema do banco usando Checkpoints e Reflection
---

# /generate-backend — Geração de Backend (Backend Agent)

## Pré-requisito

A arquitetura (`docs/architecture.md`) e o schema do banco (`prisma/schema.prisma`) devem existir.

## Passo 1 — Ler Contexto

Leia a arquitetura e o schema do banco. Identifique as entidades, relacionamentos e regras de negócio.

## Passo 2 — Scaffold do Projeto (Checkpoint 1)

1. Inicialize o projeto Node.js + TypeScript.
2. Instale dependências: `fastify`, `@fastify/cors`, `@fastify/jwt`, `prisma`, `@prisma/client`, `zod`, `pino`.
3. Configure `tsconfig.json` com paths e strict mode.
4. Crie `src/config/env.ts` (variáveis de ambiente com Zod validation).
5. Crie `src/config/database.ts` (Prisma client singleton).

**Validação do Checkpoint 1:**
- Execute `npm run build` e confirme que compila.
- Teste a conexão com o banco.
- *Se falhar, use o padrão ReAct (Thought -> Action -> Observation) para corrigir.*

## Passo 3 — Models e Repositories (Checkpoint 2)

Atue como o **Backend Agent** e gere:

1. **Models/DTOs** — `src/models/` (Zod schemas para input validation).
2. **Repositories** — `src/repositories/` (um por entidade, CRUD + queries customizadas).

**Validação do Checkpoint 2:**
- Confirme que os tipos do Zod batem com o schema do Prisma.
- Teste uma query de exemplo.
- *Se falhar, use o padrão ReAct para corrigir.*

## Passo 4 — Services e Lógica de Negócio (Checkpoint 3)

Gere:

1. **Services** — `src/services/` (lógica de negócio, um por domínio).

**Validação do Checkpoint 3 (Reflection):**
Antes de prosseguir, faça uma auto-crítica:
- [ ] Cada função tem menos de 30 linhas?
- [ ] Há testes unitários para a lógica crítica?
- [ ] Não há `any` em TypeScript?
- [ ] O tratamento de erros está correto (lançando exceções customizadas)?

*Se algum critério falhar, refatore o código silenciosamente.*

## Passo 5 — Controllers, Middlewares e Rotas (Checkpoint 4)

Gere:

1. **Controllers** — `src/controllers/` (request handling, chama services).
2. **Middlewares**:
   - `src/middlewares/auth.ts` — JWT verification.
   - `src/middlewares/error-handler.ts` — Error handling centralizado.
   - `src/middlewares/validate.ts` — Zod validation middleware.
3. **Routes** — `src/routes/` (registra controllers com prefixo).
4. **App** — `src/app.ts` (Fastify setup, plugins, routes).
5. **Server** — `src/server.ts` (entry point, listen).

**Validação do Checkpoint 4:**
- As rotas estão protegidas corretamente?
- A validação Zod está sendo aplicada antes do controller?
- O error handler captura exceções não tratadas?

## Passo 6 — Auth e Segurança (Checkpoint 5)

Implemente o fluxo completo de autenticação:
- POST `/auth/register` — criar usuário, hash senha, retornar token.
- POST `/auth/login` — validar credenciais, gerar JWT.
- POST `/auth/refresh` — refresh token.
- Middleware de auth em rotas protegidas.

**Validação do Checkpoint 5:**
- As senhas estão sendo cacheadas com bcrypt (10+ rounds)?
- Os tokens JWT têm expiração curta (access) e longa (refresh)?

## Passo 7 — Testes e Documentação (Checkpoint Final)

1. Gere testes com Jest (unitários para services, integração para rotas).
2. Gere documentação Swagger/OpenAPI das rotas (`docs/openapi.yaml`).

## Passo 8 — Validação Final e Entrega

Execute `npm run build` e `npm test` para validar que tudo compila e passa sem erros.

Apresente um resumo ao usuário e pergunte:
- "O backend está pronto e validado. Posso prosseguir para o frontend (`/generate-frontend`)?"

// turbo-all
