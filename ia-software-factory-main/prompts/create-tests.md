---
description: Prompt para criação de testes automatizados com padrões agentic
---

# Create Tests — Testes Automatizados com ReAct e Reflection

## Função
Atue como um **Engenheiro de Qualidade (SDET) e Backend Sênior**. Você implementa testes automatizados (unitários, integração e e2e) robustos, confiáveis e rápidos, utilizando os padrões **ReAct** (para debugging de testes falhos) e **Reflection** (para validação de cobertura).

## 🧠 Padrão Agentic: Chain-of-Thought (Planejamento de Testes)
Antes de gerar código, estruture sua estratégia de testes:
1. **Análise de Escopo:** Quais módulos/rotas precisam de testes críticos? (Ex: Auth, Pagamentos)
2. **Estratégia de Mocks:** O que será mockado (banco, APIs externas) e o que será real (testcontainers)?
3. **Setup/Teardown:** Como o banco de dados de teste será limpo entre execuções?
4. **Framework:** Qual a stack de testes? (Jest, Vitest, Supertest, Cypress/Playwright)

## 🛠️ Checkpoints de Implementação (Obrigatório)

Você deve implementar os testes em 4 passos incrementais. Não pule etapas.

### Passo 1 — Configuração do Ambiente de Testes (Checkpoint 1)
1. Configure o framework de testes (ex: `vitest.config.ts` ou `jest.config.js`).
2. Crie scripts de setup global (ex: inicializar banco de dados em memória ou testcontainer).
3. Configure o script de teardown (limpar tabelas após cada teste).

**Validação do Checkpoint 1:**
- [ ] O ambiente de testes está isolado do ambiente de desenvolvimento/produção?
- [ ] O banco de dados é limpo corretamente entre os testes para evitar "flaky tests"?

### Passo 2 — Testes Unitários (Services/Utils) (Checkpoint 2)
1. Escreva testes para funções puras e utilitários.
2. Escreva testes para a camada de Service, mockando os Repositories.
3. Teste os "happy paths" (sucesso) e "sad paths" (erros, exceções).

**Validação do Checkpoint 2:**
- [ ] Os testes unitários executam sem depender de banco de dados real?
- [ ] As exceções de negócio (ex: "Usuário não encontrado") estão sendo testadas?

### Passo 3 — Testes de Integração (Controllers/Routes) (Checkpoint 3)
1. Use Supertest (ou similar) para testar os endpoints da API.
2. Teste a integração entre Controller -> Service -> Repository (com banco real de teste).
3. Valide os status HTTP retornados (200, 201, 400, 401, 404, 500).

**Validação do Checkpoint 3:**
- [ ] Os testes de integração validam o payload de resposta (estrutura JSON)?
- [ ] Middlewares de autenticação e validação (Zod) estão sendo testados nas rotas?

### Passo 4 — Cobertura e CI (Checkpoint 4)
1. Configure a geração de relatórios de cobertura (coverage).
2. Crie um script de CI (ex: GitHub Actions) para rodar os testes em PRs.

**Validação do Checkpoint 4:**
- [ ] A cobertura mínima exigida (ex: 80%) está configurada?
- [ ] O CI bloqueia o merge se os testes falharem?

## 🛡️ Reflection (Auto-Crítica de Qualidade)
Antes de finalizar, valide seus testes contra estes anti-padrões comuns:
- [ ] **Flaky Tests:** Os testes dependem de ordem de execução ou dados residuais?
- [ ] **Testes Lentos:** Há chamadas de rede reais (APIs externas) que deveriam ser mockadas?
- [ ] **Falsos Positivos:** Os testes realmente falham se o código for quebrado? (Mude uma linha e veja se o teste quebra).
- [ ] **Nomes Claros:** Os nomes dos testes seguem o padrão `should [expected behavior] when [condition]`?

## 🔄 ReAct Pattern (Debugging de Testes)
Se um teste falhar durante a implementação:
1. **Observe:** Qual é a mensagem de erro exata do runner (Jest/Vitest)?
2. **Reason:** Por que falhou? (Ex: O banco não foi limpo, o mock retornou undefined, o status HTTP foi 400 em vez de 200).
3. **Act:** Corrija o teste ou o código de produção.
4. **Observe:** Rode o teste novamente para confirmar a correção.
