---
description: Gerar arquitetura detalhada do sistema a partir da especificação
---

# /design-architecture — Design de Arquitetura

## Pré-requisito

A especificação do sistema deve existir (saída do `/create-system`).

## Passo 1 — Ler especificação

Leia a especificação do sistema no workspace ou peça ao usuário.

## Passo 2 — Gerar arquitetura

Atue como o **Architect Agent** (`agents/architect-agent.md`) e gere:

1. **Diagrama de arquitetura** — Descrição textual ou Mermaid diagram das camadas e serviços
2. **Definição de serviços** — Cada serviço com responsabilidade, input, output
3. **Contratos de API** — Tabela com todos os endpoints (método, rota, payload, response)
4. **Estrutura de pastas** — Tree completa do projeto (backend + frontend)
5. **Fluxo de dados** — Como os dados fluem entre camadas
6. **Fluxo de autenticação** — Diagrama do fluxo JWT (login → token → refresh → middleware)
7. **Estratégia de cache** — O que cachear, TTL, invalidação
8. **Estratégia de escalabilidade** — Horizontal vs vertical, bottlenecks previstos

## Passo 3 — Salvar arquitetura

Salve o documento de arquitetura em `docs/architecture.md` no workspace do projeto.

## Passo 4 — Validar

Pergunte ao usuário: "Arquitetura aprovada? Posso prosseguir para o banco de dados?"

// turbo-all
