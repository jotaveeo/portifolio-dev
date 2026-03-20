# Dashboard Template

Template para criação de dashboards e painéis administrativos.

## Stack padrão

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js / React |
| Estilização | Tailwind CSS |
| Componentes | Shadcn/UI |
| Gráficos | Recharts / Chart.js |
| Estado | Zustand |
| Fetch | React Query |
| Tabelas | TanStack Table |
| Forms | React Hook Form + Zod |

## Funcionalidades base

- [ ] Sidebar com navegação
- [ ] Header com user menu
- [ ] Dashboard com KPIs e gráficos
- [ ] Tabelas com filtros, busca e paginação
- [ ] CRUD pages (list, create, edit, view)
- [ ] Formulários com validação
- [ ] Dark mode
- [ ] Responsivo
- [ ] Notificações toast
- [ ] Breadcrumbs

## Layout padrão

```
┌──────────────────────────────────────────┐
│  Header (logo, search, notifications)    │
├────────┬─────────────────────────────────┤
│        │                                 │
│  Side  │       Main Content              │
│  bar   │                                 │
│        │                                 │
│        │                                 │
├────────┴─────────────────────────────────┤
│  Footer                                 │
└──────────────────────────────────────────┘
```
