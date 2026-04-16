---
description: Gerar schema do banco de dados e diagrama ER a partir da arquitetura usando Reflection
---

# /create-database — Modelagem de Banco de Dados (Database Agent)

## Pré-requisito

A arquitetura do sistema deve existir (`docs/architecture.md`).

## Passo 1 — Ler Contexto

Leia a arquitetura gerada no passo anterior. Identifique as entidades principais e seus relacionamentos.

## Passo 2 — Raciocínio de Modelagem (Chain-of-Thought)

Antes de gerar o schema, pense passo a passo em um bloco `<thought>`:

<thought>
1. **Normalização:** As entidades estão na 3ª Forma Normal (3NF)? Há redundância de dados?
2. **Relacionamentos:** Quais são 1:1, 1:N e N:M? Preciso de tabelas associativas (pivot tables)?
3. **Performance:** Quais colunas serão frequentemente usadas em cláusulas `WHERE` ou `JOIN`? (Essas precisam de índices).
4. **Segurança/Auditoria:** Preciso de `createdAt`, `updatedAt`, `deletedAt` (soft delete) em todas as tabelas?
5. **Tipos de Dados:** Estou usando UUIDs para chaves primárias (segurança) ou Inteiros (performance)?
</thought>

## Passo 3 — Gerar Artefatos (O Schema)

Atue como o **Database Agent** e gere a modelagem contendo:

1. **Diagrama ER** — Use sintaxe Mermaid (`erDiagram`) para desenhar as tabelas e relacionamentos.
2. **Schema Prisma Completo** — O arquivo `schema.prisma` com:
   - Modelos (tabelas)
   - Relacionamentos explícitos (`@relation`)
   - Índices (`@@index`)
   - Restrições únicas (`@unique`, `@@unique`)
   - Campos de auditoria (`createdAt`, `updatedAt`)
   - Enums para status/tipos fixos
3. **Seed Inicial** — Um script `seed.ts` para popular o banco com dados de teste (admin, roles, dados mockados).
4. **Estratégia de Índices** — Lista justificada dos índices criados para otimizar queries.

## Passo 4 — Auto-Crítica (Reflection)

Antes de me mostrar o schema, faça uma auto-crítica rigorosa:
- [ ] O schema Prisma compila sem erros de sintaxe?
- [ ] Todos os relacionamentos bidirecionais estão corretos? (Prisma exige ambos os lados).
- [ ] Há índices nas chaves estrangeiras (FKs) para evitar table scans em JOINs?
- [ ] As senhas estão modeladas como `String` (para armazenar o hash bcrypt)?
- [ ] Há soft delete (`deletedAt DateTime?`) nas tabelas críticas?

*Se encontrar falhas (ex: falta de índices em FKs), corrija o schema silenciosamente antes de entregar.*

## Passo 5 — Salvar e Validar

1. Salve o schema em `prisma/schema.prisma`.
2. Salve o seed em `prisma/seed.ts`.
3. Apresente o diagrama ER ao usuário e pergunte:
   - "O modelo de dados atende a todos os requisitos da arquitetura?"
   - "Posso prosseguir para a geração do backend (`/generate-backend`)?"

// turbo-all
