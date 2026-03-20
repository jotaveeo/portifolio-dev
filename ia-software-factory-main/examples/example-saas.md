# Example SaaS — Task Management Platform

Sistema: Plataforma de gestão de tarefas com colaboração em equipe.

## Funcionalidades

- Criação de tarefas com prioridade e status
- Projetos e boards (Kanban)
- Comentários e menções
- Notificações em tempo real
- Autenticação e permissões por role
- Dashboard com métricas

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Next.js + Tailwind + Shadcn/UI |
| Backend | Node.js + Fastify |
| Database | PostgreSQL + Prisma |
| Real-time | WebSocket |
| Auth | JWT |
| Deploy | Docker + Vercel + Railway |

## Entidades principais

- User
- Organization
- Project
- Task
- Comment
- Notification

## Fluxo de geração

1. `prompts/create-system.md` → especificação
2. `prompts/design-architecture.md` → arquitetura
3. `prompts/create-database.md` → banco de dados
4. `prompts/generate-backend.md` → API
5. `prompts/generate-frontend.md` → interface
6. `prompts/deploy-system.md` → infraestrutura
