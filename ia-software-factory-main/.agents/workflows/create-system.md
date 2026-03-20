---
description: Gerar especificação completa de um sistema de software a partir de uma ideia
---

# /create-system — Criação de Sistema

## Passo 1 — Coletar informações

Pergunte ao usuário:

1. **Qual é o sistema?** — Nome e descrição em uma frase
2. **Quem é o público-alvo?** — Tipo de usuário
3. **Quais são as 3-5 funcionalidades principais?**
4. **Existem integrações externas?** — Pagamento, email, APIs terceiras
5. **Alguma restrição de stack?** — Ou usar a stack padrão de `system-rules.md`

## Passo 2 — Gerar especificação

Com base nas respostas, gere a especificação completa contendo:

1. **Visão geral** — Propósito, público, problema resolvido
2. **Funcionalidades** — Lista detalhada com user stories
3. **Arquitetura de alto nível** — Monolito vs microserviços, camadas
4. **Stack tecnológica** — Justificativa para cada escolha
5. **Entidades do banco** — Tabelas, campos, relacionamentos
6. **Endpoints da API** — Método, rota, descrição, payload
7. **Fluxo de autenticação** — Registro, login, refresh, roles
8. **Integrações externas** — APIs, webhooks, serviços terceiros
9. **Requisitos não-funcionais** — Performance, segurança, escalabilidade

## Passo 3 — Validar com o usuário

Apresente a especificação e pergunte:
- "Algo precisa ser ajustado?"
- "Posso prosseguir para a fase de arquitetura detalhada?"

// turbo-all
