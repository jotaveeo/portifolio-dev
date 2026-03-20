# SaaS Template

Template para criação de aplicações SaaS (Software as a Service).

## Stack padrão

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React / Next.js + Tailwind CSS |
| Backend | Node.js + Fastify |
| Database | PostgreSQL |
| Auth | JWT + OAuth2 |
| Infra | Docker + Nginx |
| Deploy | Vercel (front) + Railway (back) |

## Funcionalidades base

- [ ] Autenticação (login, registro, recuperação de senha)
- [ ] Multi-tenancy
- [ ] Dashboard do usuário
- [ ] Planos e assinaturas (Stripe)
- [ ] Painel administrativo
- [ ] Notificações (email + in-app)
- [ ] Settings e perfil
- [ ] Landing page

## Estrutura de pastas

```
project/
├── apps/
│   ├── web/          # Frontend Next.js
│   └── api/          # Backend Fastify
├── packages/
│   ├── ui/           # Componentes compartilhados
│   ├── database/     # Prisma schema e migrations
│   └── config/       # Configs compartilhadas
├── docker-compose.yml
└── README.md
```

## Banco de dados - Entidades base

- users
- organizations (tenants)
- subscriptions
- plans
- notifications
- audit_logs
