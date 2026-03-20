# AI Software Factory

> AI-driven software development framework using multi-agents, reusable prompts, architecture templates and system rules.

Framework para desenvolvimento de software usando IA com múltiplos agentes especializados. Reduz **70-90% do retrabalho** na criação de sistemas completos.

---

## Como funciona

Você vira o **orquestrador** de uma equipe de agentes de IA:

```
1. /create-system       → Especificação completa
2. /design-architecture → Arquitetura detalhada
3. /create-database     → Schema + migrations
4. /generate-backend    → API + services + testes
5. /generate-frontend   → UI + componentes + integração
6. /deploy-system       → Docker + CI/CD + infra
```

---

## Estrutura

```
ai-software-factory/
│
├── .agents/                    ← Integração Antigravity
│   ├── rules/
│   │   └── system-rules.md    ← Regras globais (carregadas automaticamente)
│   └── workflows/
│       ├── create-system.md       ← /create-system
│       ├── design-architecture.md ← /design-architecture
│       ├── create-database.md     ← /create-database
│       ├── generate-backend.md    ← /generate-backend
│       ├── generate-frontend.md   ← /generate-frontend
│       ├── deploy-system.md       ← /deploy-system
│       └── create-landing.md      ← /create-landing
│
├── system/                     ← Regras de engenharia
│   ├── engineering-principles.md
│   ├── coding-standards.md
│   ├── architecture-rules.md
│   ├── stack-defaults.md
│   ├── api-design-rules.md
│   ├── frontend-design-system.md
│   ├── testing-strategy.md
│   └── security-checklist.md
│
├── agents/                     ← 10 agentes especializados
│   ├── architect-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── database-agent.md
│   ├── devops-agent.md
│   ├── qa-agent.md
│   ├── ui-agent.md
│   ├── security-agent.md
│   ├── performance-agent.md
│   └── refactor-agent.md
│
├── prompts/                    ← 12 prompts avançados
│   ├── create-system.md
│   ├── design-architecture.md
│   ├── generate-backend.md
│   ├── generate-frontend.md
│   ├── create-database.md
│   ├── deploy-system.md
│   ├── create-landing.md
│   ├── create-dashboard.md
│   ├── create-auth.md
│   ├── create-api-docs.md
│   ├── review-code.md
│   └── create-tests.md
│
├── templates/                  ← Templates reutilizáveis
│   ├── saas-template.md
│   ├── api-template.md
│   ├── dashboard-template.md
│   └── landing-template.md
│
├── knowledge/                  ← Base de conhecimento
│   ├── stack-docs.md
│   ├── patterns.md
│   └── security.md
│
├── examples/                   ← Exemplos
│   ├── example-saas.md
│   └── example-api.md
│
└── LICENSE
```

---

## Slash Commands (Workflows)

| Comando | Descrição |
|---------|-----------|
| `/create-system` | Gerar especificação completa de um sistema |
| `/design-architecture` | Gerar arquitetura detalhada |
| `/create-database` | Gerar schema Prisma + migrations |
| `/generate-backend` | Gerar código backend completo |
| `/generate-frontend` | Gerar código frontend completo |
| `/deploy-system` | Gerar Docker + CI/CD + infra |
| `/create-landing` | Gerar landing page cinematográfica |

---

## Agentes

| Agente | Função |
|--------|--------|
| Architect | Arquitetura, stack, estrutura |
| Backend | API, services, auth |
| Frontend | UI, componentes, UX |
| Database | Schema, migrations, otimização |
| DevOps | Docker, CI/CD, deploy |
| QA | Testes, bugs, cobertura |
| UI | Design system, acessibilidade |
| Security | OWASP, auditoria, proteção |
| Performance | Cache, queries, Core Web Vitals |
| Refactor | Clean code, code smells, debt |

---

## Stack Padrão

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Next.js + TypeScript + Tailwind |
| Backend | Node.js + Fastify + TypeScript |
| ORM | Prisma |
| Database | PostgreSQL + Redis |
| Auth | JWT + bcrypt |
| Testes | Jest + Supertest + Playwright |
| Infra | Docker + GitHub Actions |

---

## Licença

MIT
