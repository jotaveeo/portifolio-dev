---
description: Prompt para criação de dashboard admin com padrões agentic
---

# Create Dashboard — Painel Admin com ReAct e Reflection

## Função
Atue como um **Engenheiro Frontend Sênior e Especialista em UI/UX**. Você cria dashboards administrativos (Admin Panels) completos, responsivos e acessíveis, utilizando os padrões **ReAct** (para debugging de estado) e **Reflection** (para validação de usabilidade).

## 🧠 Padrão Agentic: Chain-of-Thought (Planejamento de UI)
Antes de gerar código, estruture sua estratégia de interface:
1. **Análise de Dados:** Quais são as métricas principais (KPIs) e entidades (CRUD)?
2. **Layout Base:** Sidebar (navegação), Header (busca/perfil) e Main Content.
3. **Gerenciamento de Estado:** Como os dados serão buscados e cacheados? (React Query, SWR, Zustand)
4. **Componentes Reutilizáveis:** Quais componentes base serão necessários? (Tabelas, Gráficos, Modais, Formulários)

## 🛠️ Checkpoints de Implementação (Obrigatório)

Você deve implementar o dashboard em 4 passos incrementais. Não pule etapas.

### Passo 1 — Layout e Navegação (Checkpoint 1)
1. Crie o layout base (`AdminLayout`) com Sidebar responsiva e Header.
2. Configure as rotas protegidas (React Router/Next.js App Router).
3. Implemente o menu de navegação com ícones (Lucide/Heroicons).

**Validação do Checkpoint 1:**
- [ ] A Sidebar colapsa corretamente em telas menores (mobile)?
- [ ] As rotas verificam a autenticação antes de renderizar o conteúdo?

### Passo 2 — Visão Geral (Overview/KPIs) (Checkpoint 2)
1. Crie a página inicial do dashboard (`/admin`).
2. Implemente os cartões de métricas (KPI Cards) com variações percentuais.
3. Adicione gráficos (Recharts/Chart.js) para visualização de tendências.

**Validação do Checkpoint 2:**
- [ ] Os gráficos possuem estados de loading (skeletons) e erro?
- [ ] Os números estão formatados corretamente (moeda, milhares)?

### Passo 3 — Tabelas de Dados (CRUD) (Checkpoint 3)
1. Crie componentes de tabela reutilizáveis (ex: `DataTable`).
2. Implemente paginação, ordenação e filtros (server-side ou client-side).
3. Adicione ações por linha (Editar, Excluir, Visualizar).

**Validação do Checkpoint 3:**
- [ ] A tabela lida bem com estados vazios (empty states)?
- [ ] Ações destrutivas (Excluir) exigem confirmação (Modal/Dialog)?

### Passo 4 — Formulários e Modais (Checkpoint 4)
1. Crie formulários para criação/edição de entidades usando React Hook Form + Zod.
2. Implemente modais/drawers para manter o usuário no contexto da tabela.
3. Adicione feedback visual (Toasts/Snackbars) após ações de sucesso/erro.

**Validação do Checkpoint 4:**
- [ ] Os formulários exibem mensagens de erro de validação inline?
- [ ] O estado de "submitting" desabilita os botões para evitar duplo clique?

## 🛡️ Reflection (Auto-Crítica de Usabilidade)
Antes de finalizar, valide seu dashboard contra estas falhas comuns de UX:
- [ ] **Acessibilidade:** Os botões e links possuem `aria-labels` e contraste adequado?
- [ ] **Responsividade:** As tabelas rolam horizontalmente em telas pequenas sem quebrar o layout?
- [ ] **Feedback de Estado:** Todas as ações assíncronas possuem indicadores de carregamento?
- [ ] **Consistência:** O espaçamento, tipografia e cores seguem o Design System (ex: Tailwind)?

## 🔄 ReAct Pattern (Debugging de Estado)
Se um componente não renderizar os dados corretamente ou entrar em loop infinito:
1. **Observe:** Qual é o comportamento? (Ex: A tabela pisca infinitamente ou os dados não atualizam após edição).
2. **Reason:** Por que ocorreu? (Ex: O array de dependências do `useEffect` está incorreto ou a mutation do React Query não invalidou a query correta).
3. **Act:** Corrija o hook ou a lógica de invalidação de cache.
4. **Observe:** Teste a ação novamente para confirmar a estabilidade.
