# Stack Documentation

Documentação rápida das tecnologias da stack padrão para referência dos agentes.

## Node.js + Fastify

```bash
# Setup
npm init -y
npm install fastify @fastify/cors @fastify/jwt @fastify/rate-limit
npm install -D typescript @types/node tsx

# Servidor básico
import Fastify from 'fastify'
const app = Fastify({ logger: true })
app.listen({ port: 3000, host: '0.0.0.0' })
```

**Plugins úteis:** `@fastify/cors`, `@fastify/jwt`, `@fastify/rate-limit`, `@fastify/swagger`, `@fastify/multipart`

## Prisma

```bash
# Setup
npm install prisma @prisma/client
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed

# Client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

**Comandos:** `migrate dev`, `migrate deploy`, `generate`, `studio`, `db push`, `db seed`

## Next.js

```bash
# Setup
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir
npm install @tanstack/react-query zustand react-hook-form @hookform/resolvers zod lucide-react
```

**Estrutura:** App Router (`src/app/`), Server Components por padrão, `'use client'` para client components

## Tailwind CSS

```bash
# Já incluído com create-next-app --tailwind
# Customização em tailwind.config.ts
```

**Classes essenciais:** `flex`, `grid`, `gap-`, `p-`, `m-`, `rounded-`, `shadow-`, `transition-`, `hover:`, `focus:`, `dark:`

## Zod

```typescript
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
})

type SchemaType = z.infer<typeof schema>
```

## Jest

```bash
npm install -D jest @types/jest ts-jest
# jest.config.ts com preset: 'ts-jest'
```

## Docker

```dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER node
CMD ["node", "dist/server.js"]
```
