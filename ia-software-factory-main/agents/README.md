---
description: Guia dos Agents v3.0 — Especialistas com Padrões Agentic
---

# Agents v3.0 — Equipe de Especialistas Elite

Bem-vindo aos Agents v3.0 da IA Software Factory. Cada agent é um **especialista de nível Staff/Principal** em sua área, equipado com padrões agentic modernos (Reflection, ReAct, Chain-of-Thought) para garantir qualidade de código production-ready.

## 🎯 Os 10 Agents

### 1. **Backend Agent** — Engenheiro Backend Staff
Responsável por APIs RESTful, lógica de negócio, segurança e performance no servidor.
- Padrões: Clean Architecture, SOLID, Service Layer Pattern
- Validação: Zod em todos os inputs
- Testes: Unitários e integração com Jest/Supertest

### 2. **Frontend Agent** — Engenheiro Frontend Staff
Responsável por interfaces React/Next.js, estado, acessibilidade e performance no navegador.
- Padrões: Component-based, Custom Hooks, Zustand para estado
- Validação: React Hook Form + Zod
- Testes: React Testing Library + Cypress

### 3. **Architect Agent** — Arquiteto de Software Principal
Responsável pelo design de sistema, trade-offs arquiteturais e decisões estratégicas de stack.
- Análise: Monolito vs Microserviços, SQL vs NoSQL, REST vs GraphQL
- Diagramas: C4, Mermaid, Fluxo de Dados
- Documentação: ADR (Architecture Decision Records)

### 4. **Database Agent** — Engenheiro de Banco de Dados Sênior
Responsável pela modelagem de dados, performance de queries e integridade referencial.
- Modelagem: 3NF, Diagramas ER, Prisma Schemas
- Otimização: Índices, Query Optimization, Particionamento
- Segurança: Criptografia, Soft Delete, Auditoria

### 5. **DevOps Agent** — SRE/Platform Engineer
Responsável por containerização, CI/CD, infraestrutura e observabilidade.
- Containerização: Docker multi-stage, Docker Compose
- CI/CD: GitHub Actions, Pipelines automatizados
- Monitoramento: Prometheus, Grafana, ELK Stack

### 6. **Security Agent** — Engenheiro de Segurança (AppSec)
Responsável por auditoria de segurança, identificação de vulnerabilidades e compliance.
- Auditoria: OWASP Top 10, CVSS Scoring
- Proteção: Input Validation, Output Encoding, RBAC
- Compliance: GDPR, PCI-DSS, SOC 2

### 7. **QA Agent** — Engenheiro de Qualidade (SDET)
Responsável por testes automatizados, cobertura de código e confiabilidade.
- Testes: Unitários, Integração, E2E, Contrato
- Cobertura: C0, C1, C2 (Condition Coverage)
- Testabilidade: Refatoração para melhorar injetabilidade

### 8. **Performance Agent** — Engenheiro de Performance
Responsável por profiling, otimizações de latência/throughput e escalabilidade.
- Profiling: Flamegraphs, Memory Leaks, Event Loop Blocking
- Otimização: Caching, Paginação, N+1 Query Prevention
- Testes: K6, JMeter para carga

### 9. **Refactor Agent** — Especialista em Clean Code
Responsável por transformar código legado em código limpo, testável e manutenível.
- Code Smells: God Classes, Long Methods, Duplicated Code
- Refatoração: Extract Method, Replace Conditional, Injeção de Dependência
- Garantia: Sem mudança de comportamento (Refactoring Seguro)

### 10. **UI/UX Agent** — Designer de Produto
Responsável por design system, componentes UI e experiência do usuário.
- Design System: Tokens, Componentes Base, Padrões
- Acessibilidade: WCAG AA/AAA, ARIA, Navegação por Teclado
- Micro-interações: Feedback Visual, Animações Sutis

---

## 🧠 Padrões Agentic Aplicados a TODOS os Agents

### 1. **Reflection (Auto-Crítica)**
Antes de entregar qualquer trabalho, cada agent revisa-se contra os `QUALITY_STANDARDS.md` e refatora silenciosamente se necessário.

**Exemplo:**
```
Backend Agent gera código com uma função de 50 linhas.
Reflection: "Isso viola o padrão de máximo 30 linhas. Vou refatorar."
Entrega: Função refatorada com 25 linhas.
```

### 2. **ReAct (Reason + Act)**
Ao investigar problemas, os agents não adivinham. Eles usam o ciclo: Thought → Action → Observation, repetindo até encontrar a causa raiz.

**Exemplo:**
```
Thought: "O erro diz 'Cannot read properties of undefined'. Provavelmente uma variável chegou como undefined."
Action: "Vou ler o arquivo onde o erro ocorreu."
Observation: "A query não está retornando nada. A variável é undefined porque a query falhou."
Action: "Vou corrigir a query para garantir que sempre retorna um objeto."
```

### 3. **Chain-of-Thought (Planejamento)**
Para decisões complexas, os agents pensam passo a passo em um bloco `<thought>` antes de responder.

**Exemplo:**
```
<thought>
1. O sistema precisa de alta concorrência imediata? (Não, é MVP)
2. Os dados são altamente relacionais? (Sim, muitos relacionamentos)
3. Qual é o vetor de ataque principal? (Injeção SQL, XSS)
4. A stack escolhida é viável? (Sim, PostgreSQL + Node.js)
</thought>
→ Recomendação: Monolito Modular com PostgreSQL é o melhor trade-off.
```

---

## 📊 Como Usar os Agents

### Fluxo Recomendado

```
1. Architect Agent (desenha a arquitetura)
   ↓
2. Database Agent (modela o banco)
   ↓
3. Backend Agent (implementa o backend)
   ↓
4. Frontend Agent (implementa o frontend)
   ↓
5. QA Agent (testa)
   ↓
6. Performance Agent (otimiza)
   ↓
7. Security Agent (audita)
   ↓
8. DevOps Agent (faz deploy)
   ↓
9. Refactor Agent (melhora o código)
   ↓
10. UI/UX Agent (refina a interface)
```

### Exemplo de Uso

```bash
# Copie o conteúdo de backend-agent.md para seu agente IA (Antigravity, Cursor, etc.)
# Siga as instruções do agent

# Quando terminar, passe para o próximo agent na sequência
```

---

## ✅ Checklist de Qualidade

Todos os agents usam este checklist durante **Reflection**:

- [ ] Funções < 30 linhas
- [ ] Arquivos < 300 linhas
- [ ] Sem `any` em TypeScript
- [ ] Validação Zod em todos os inputs
- [ ] Tratamento de erro centralizado
- [ ] Testes com 80%+ cobertura
- [ ] Sem `// TODO` ou código comentado
- [ ] Código production-ready

---

## 📈 Impacto Esperado

Com os agents v3:
- **Taxa de Erro:** 30% → 5%
- **Tempo de Revisão:** 2h → 30min
- **Confiança no Código:** Média → Alta
- **Reutilização:** 40% → 90%

---

**Versão:** 3.0  
**Data:** Abril 2026  
**Autor:** Manus AI + Jotavee  
**Status:** Production Ready ✅
