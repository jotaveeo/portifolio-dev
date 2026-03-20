---
description: Gerar toda a configuração de deploy e infraestrutura do sistema
---

# /deploy-system — Deploy e Infraestrutura

## Pré-requisito

Backend e frontend devem estar funcionais.

## Passo 1 — Docker

1. **Backend Dockerfile** — Multi-stage build:
   - Stage 1: build (npm ci + tsc)
   - Stage 2: production (node alpine + dist + node_modules production only)
   - Health check
   - Non-root user

2. **Frontend Dockerfile** — Multi-stage build:
   - Stage 1: build (npm ci + next build)
   - Stage 2: production (next start ou static export)

3. **docker-compose.yml** — Todos os serviços:
   - app-backend
   - app-frontend
   - postgres
   - redis (se aplicável)
   - volumes para dados persistentes
   - networks
   - depends_on com health checks

## Passo 2 — Variáveis de ambiente

Criar `.env.example` com todas as variáveis necessárias, documentada:
```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Server
PORT=3000
NODE_ENV=production
```

## Passo 3 — CI/CD

Criar `.github/workflows/ci.yml`:
1. **Lint** — ESLint
2. **Test** — Jest (unit + integration)
3. **Build** — TypeScript compilation + Next.js build
4. **Deploy** — Push to production (Railway/Vercel/VPS)

## Passo 4 — Nginx (se VPS)

Config de reverse proxy com:
- SSL/TLS
- Gzip compression
- Rate limiting
- Proxy headers

## Passo 5 — Monitoramento

- Health check endpoints (`/health`)
- Logging com Pino (structured JSON)
- Sentry para error tracking (config)

## Passo 6 — Validar

Execute `docker-compose up --build` e teste que todos os serviços sobem.

// turbo-all
