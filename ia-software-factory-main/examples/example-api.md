# Example API — URL Shortener

Sistema: API de encurtamento de URLs com analytics.

## Funcionalidades

- Encurtar URLs longas
- Redirecionamento via short link
- Analytics (cliques, geolocalização, dispositivos)
- Autenticação para gerenciar links
- Rate limiting para API pública
- Expiração de links

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Backend | Node.js + Fastify |
| Database | PostgreSQL + Redis (cache) |
| ORM | Prisma |
| Auth | JWT |
| Docs | Swagger |
| Deploy | Docker + Railway |

## Entidades principais

- User
- ShortLink (original_url, short_code, expires_at)
- Click (link_id, ip, user_agent, country, device, timestamp)
- ApiKey

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/links | Criar short link |
| GET | /api/links | Listar links do usuário |
| GET | /api/links/:id/stats | Analytics do link |
| DELETE | /api/links/:id | Deletar link |
| GET | /:code | Redirecionar |

## Fluxo de geração

1. `prompts/create-system.md` → especificação
2. `prompts/design-architecture.md` → arquitetura
3. `prompts/create-database.md` → banco de dados
4. `prompts/generate-backend.md` → API
5. `prompts/deploy-system.md` → infraestrutura
