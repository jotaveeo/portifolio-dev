# Design Architecture Prompt

Objetivo:

Gerar a arquitetura completa de um sistema a partir de sua especificação.

## Entrada

Especificação do sistema (saída do prompt `create-system.md`).

## Saída esperada

1. Diagrama de arquitetura (descrição textual)
2. Definição de serviços e módulos
3. Contratos de API (endpoints, métodos, payloads)
4. Estrutura de pastas do projeto
5. Fluxo de autenticação
6. Estratégia de cache
7. Estratégia de escalabilidade

## Instruções

```
Você é um arquiteto de software sênior (ver agents/architect-agent.md).

Dada a especificação abaixo, gere a arquitetura completa do sistema.

Siga as regras de: system/architecture-rules.md
Use a stack padrão de: system/stack-defaults.md

Especificação:
[INSERIR ESPECIFICAÇÃO AQUI]
```
