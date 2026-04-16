---
description: Prompt para criação de sistema de autenticação com padrões agentic
---

# Create Auth — Autenticação Segura com ReAct e Reflection

## Função
Atue como um **Engenheiro de Segurança (AppSec) e Backend Sênior**. Você implementa sistemas de autenticação robustos, seguros e escaláveis, utilizando os padrões **ReAct** (para tratamento de erros) e **Reflection** (para validação de segurança).

## 🧠 Padrão Agentic: Chain-of-Thought (Planejamento)
Antes de gerar código, estruture seu raciocínio:
1. **Análise de Requisitos:** Qual o tipo de auth necessário? (JWT, OAuth, Session, Magic Link)
2. **Modelagem de Dados:** Quais campos a tabela `User` precisa? (email, password_hash, role, etc.)
3. **Fluxo de Segurança:** Como proteger contra brute force, XSS e CSRF?
4. **Estratégia de Tokens:** Qual o tempo de expiração do Access Token e Refresh Token?

## 🛠️ Checkpoints de Implementação (Obrigatório)

Você deve implementar a autenticação em 4 passos incrementais. Não pule etapas.

### Passo 1 — Modelagem e Configuração (Checkpoint 1)
1. Crie o schema do banco de dados (Prisma/TypeORM) para `User` e `Session/RefreshToken`.
2. Configure as variáveis de ambiente necessárias (`JWT_SECRET`, `JWT_EXPIRES_IN`).

**Validação do Checkpoint 1:**
- [ ] A senha nunca é armazenada em texto plano?
- [ ] O schema inclui campos de auditoria e status (ativo/inativo)?

### Passo 2 — Serviços de Criptografia e Tokens (Checkpoint 2)
1. Implemente o serviço de hash de senhas (bcrypt/argon2).
2. Implemente o serviço de geração e verificação de JWT.

**Validação do Checkpoint 2:**
- [ ] O salt rounds do bcrypt é no mínimo 10?
- [ ] O JWT inclui apenas dados não sensíveis no payload (ex: `userId`, `role`)?

### Passo 3 — Controladores de Auth (Checkpoint 3)
1. Implemente `register` (com validação de força de senha).
2. Implemente `login` (com verificação de hash e geração de tokens).
3. Implemente `refreshToken` (rotação segura de tokens).

**Validação do Checkpoint 3:**
- [ ] As rotas validam o input com Zod/Joi antes de processar?
- [ ] O login não revela se o email existe ou não em caso de erro? (Use "Credenciais inválidas")

### Passo 4 — Middlewares de Proteção (Checkpoint 4)
1. Crie o middleware `requireAuth` para proteger rotas privadas.
2. Crie o middleware `requireRole` para autorização baseada em papéis (RBAC).
3. Implemente rate limiting nas rotas de auth.

**Validação do Checkpoint 4:**
- [ ] O middleware extrai o token corretamente do header `Authorization: Bearer`?
- [ ] Erros de token expirado retornam HTTP 401 (Unauthorized)?

## 🛡️ Reflection (Auto-Crítica de Segurança)
Antes de finalizar, valide seu código contra estas vulnerabilidades comuns:
- [ ] **SQL Injection:** O ORM/Query Builder está parametrizando as queries?
- [ ] **XSS:** Os tokens estão sendo armazenados de forma segura no frontend? (Recomende HttpOnly Cookies se aplicável).
- [ ] **Timing Attacks:** A comparação de senhas usa funções time-safe?
- [ ] **Brute Force:** Há rate limiting nas rotas de login e registro?

## 🔄 ReAct Pattern (Tratamento de Erros)
Se encontrar um erro durante a implementação (ex: conflito de tipos no TypeScript com o objeto `Request` do Express/Fastify):
1. **Observe:** Qual é o erro exato?
2. **Reason:** Por que o erro ocorreu? (Ex: O tipo `User` não está estendido na interface `Request`).
3. **Act:** Corrija o erro estendendo a tipagem globalmente (`declare module 'express' { ... }`).
