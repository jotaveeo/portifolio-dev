---
description: Gerar infraestrutura e pipeline de deploy completo usando Checkpoints e ReAct
---

# /deploy-system — Deploy de Sistema (DevOps Agent)

## Pré-requisito

O backend e o frontend devem estar funcionais e testados localmente.

## Passo 1 — Ler Contexto

Leia a arquitetura (`docs/architecture.md`) e os arquivos `package.json` do backend e frontend para identificar as dependências e scripts de build.

## Passo 2 — Containerização (Checkpoint 1)

Atue como o **DevOps Agent** e gere:

1. **Dockerfile (Backend)** — Multi-stage build para Node.js (Fastify/Prisma).
2. **Dockerfile (Frontend)** — Multi-stage build para Next.js (standalone).
3. **docker-compose.yml** — Orquestração local (Backend, Frontend, PostgreSQL, Redis).
4. **.dockerignore** — Para ambos os projetos.

**Validação do Checkpoint 1:**
- Execute `docker-compose build` e confirme que as imagens são construídas sem erros.
- *Se falhar, use o padrão ReAct (Thought -> Action -> Observation) para corrigir o Dockerfile.*

## Passo 3 — Configuração de Ambiente (Checkpoint 2)

Gere:

1. **.env.example** — Template unificado com todas as variáveis necessárias (DB, JWT, Redis, APIs externas).
2. **Scripts de Inicialização** — Script para rodar migrations do Prisma antes de iniciar o backend no container.

**Validação do Checkpoint 2 (Reflection):**
Antes de prosseguir, faça uma auto-crítica:
- [ ] As senhas e secrets no `.env.example` estão vazias ou com valores dummy óbvios?
- [ ] O backend espera o banco de dados estar pronto antes de iniciar (ex: `wait-for-it`)?

*Se algum critério falhar, refatore os arquivos silenciosamente.*

## Passo 4 — Pipeline CI/CD (Checkpoint 3)

Gere:

1. **GitHub Actions Workflow** — `.github/workflows/ci.yml` contendo:
   - Linting (`npm run lint`).
   - Testes (`npm test`).
   - Build das imagens Docker.
   - Push para um Container Registry (ex: GHCR ou Docker Hub).
   - Deploy automático (ex: via SSH para VPS ou Vercel/Railway).

**Validação do Checkpoint 3:**
- O pipeline roda apenas na branch `main` ou em Pull Requests?
- Os secrets do GitHub estão documentados no README para o usuário configurar?

## Passo 5 — Infraestrutura e Monitoramento (Checkpoint 4)

Gere:

1. **Nginx Config** — `nginx.conf` para proxy reverso, SSL (Certbot) e rate limiting.
2. **Monitoramento Básico** — Configuração do Pino (backend) para logs estruturados em JSON e integração com Sentry (opcional).
3. **Health Checks** — Rotas `/health` no backend e frontend para o Docker/Nginx monitorar.

**Validação do Checkpoint 4:**
- O Nginx redireciona HTTP para HTTPS?
- O rate limiting está configurado para evitar DDoS básico?

## Passo 6 — Validação Final e Entrega

Execute `docker-compose up -d` para subir a stack localmente e teste os health checks.

Apresente um resumo ao usuário e pergunte:
- "A infraestrutura de deploy está pronta. Posso gerar a documentação final do projeto?"

// turbo-all
