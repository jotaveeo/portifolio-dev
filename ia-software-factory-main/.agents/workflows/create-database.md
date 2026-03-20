---
description: Gerar modelagem completa do banco de dados a partir da arquitetura
---

# /create-database — Criação de Banco de Dados

## Pré-requisito

A arquitetura do sistema deve existir (saída do `/design-architecture`).

## Passo 1 — Ler arquitetura

Leia o documento de arquitetura e identifique todas as entidades.

## Passo 2 — Gerar modelagem

Atue como o **Database Agent** (`agents/database-agent.md`) e gere:

1. **Diagrama ER** — Mermaid diagram com todas as entidades e relacionamentos
2. **Prisma Schema** — Arquivo `schema.prisma` completo com:
   - Todos os models com campos tipados
   - Relations entre models
   - Campos de auditoria (`createdAt`, `updatedAt`) em toda tabela
   - Soft delete (`deletedAt`) quando aplicável
   - UUIDs como primary keys (`@default(uuid())`)
   - Índices para queries frequentes (`@@index`)
   - Unique constraints onde necessário
3. **Migration inicial** — Comando para gerar migration
4. **Seed** — Arquivo `seed.ts` com dados iniciais para desenvolvimento
5. **Índices recomendados** — Lista com justificativa

## Passo 3 — Criar arquivos

Crie os arquivos no workspace:
- `prisma/schema.prisma`
- `prisma/seed.ts`

## Passo 4 — Validar

Pergunte ao usuário: "Schema aprovado? Posso prosseguir para o backend?"

// turbo-all
