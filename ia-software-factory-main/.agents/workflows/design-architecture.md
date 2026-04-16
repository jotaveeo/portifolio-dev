---
description: Gerar arquitetura detalhada do sistema a partir da especificação usando Reflection
---

# /design-architecture — Design de Arquitetura (Architect Agent)

## Pré-requisito

A especificação do sistema deve existir (saída do `/create-system`).

## Passo 1 — Ler Contexto

Leia a especificação gerada no passo anterior. Se não houver, peça ao usuário para rodar `/create-system` primeiro.

## Passo 2 — Raciocínio Arquitetural (Chain-of-Thought)

Antes de gerar os artefatos, pense passo a passo em um bloco `<thought>`:

<thought>
1. **Padrões de Design:** Qual padrão arquitetural se aplica melhor aqui? (Clean Architecture, Hexagonal, MVC?)
2. **Separação de Responsabilidades:** Como dividir o sistema em módulos lógicos (ex: Auth, Billing, Core)?
3. **Fluxo de Dados:** Como os dados fluem do cliente para o banco e vice-versa?
4. **Gargalos Potenciais:** Onde o sistema pode ficar lento? (ex: queries complexas, integrações externas lentas).
5. **Estratégia de Cache:** O que precisa ser cacheado para evitar gargalos?
</thought>

## Passo 3 — Gerar Artefatos (O Design)

Atue como o **Architect Agent** e gere a arquitetura detalhada contendo:

1. **Diagrama de Arquitetura** — Use sintaxe Mermaid (`mermaid`) para desenhar os componentes principais e suas interações.
2. **Definição de Serviços/Módulos** — Lista de módulos lógicos e suas responsabilidades.
3. **Contratos de API (Alto Nível)** — Principais rotas REST/GraphQL necessárias (ex: `POST /api/auth/login`).
4. **Estrutura de Pastas** — Árvore de diretórios proposta para o backend e frontend.
5. **Fluxo de Dados Principal** — Diagrama de sequência (Mermaid) do fluxo mais crítico do sistema.
6. **Estratégia de Segurança** — Fluxo JWT, RBAC (Role-Based Access Control), rate limiting.
7. **Estratégia de Escalabilidade** — Como o sistema lidará com 10x mais tráfego (cache, filas, réplicas).

## Passo 4 — Auto-Crítica (Reflection)

Antes de me mostrar a arquitetura, faça uma auto-crítica rigorosa:
- [ ] A arquitetura proposta é muito complexa para um MVP? (Over-engineering)
- [ ] Os diagramas Mermaid estão sintaticamente corretos?
- [ ] A estrutura de pastas segue os princípios SOLID e Clean Architecture?
- [ ] A estratégia de segurança cobre as vulnerabilidades OWASP Top 10 mais comuns?

*Se encontrar falhas (ex: over-engineering), simplifique a arquitetura silenciosamente antes de entregar.*

## Passo 5 — Salvar e Validar

1. Salve a arquitetura final em `docs/architecture.md`.
2. Apresente um resumo ao usuário e pergunte:
   - "A arquitetura faz sentido para o seu caso de uso?"
   - "Posso prosseguir para a modelagem do banco de dados (`/create-database`)?"

// turbo-all
