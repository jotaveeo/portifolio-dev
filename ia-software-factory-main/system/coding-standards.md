# Coding Standards

Padrões de código obrigatórios para todo código gerado pelos agentes.

## Nomenclatura

- **Variáveis e funções**: camelCase
- **Classes e interfaces**: PascalCase
- **Constantes**: UPPER_SNAKE_CASE
- **Arquivos**: kebab-case
- **Banco de dados (tabelas/colunas)**: snake_case

## Estrutura de código

- Máximo de 30 linhas por função
- Máximo de 300 linhas por arquivo
- Uma responsabilidade por função
- Uma responsabilidade por classe

## Comentários

- Código autoexplicativo é preferível a comentários
- Comentar apenas lógica complexa ou decisões de design
- Usar JSDoc / Docstrings quando aplicável

## Tratamento de erros

- Sempre tratar erros de forma explícita
- Nunca usar catch vazio
- Logs estruturados com contexto
- Erros devem retornar mensagens claras ao usuário

## Testes

- Todo código deve ter testes unitários
- Cobertura mínima de 80%
- Testes devem ser independentes e isolados
- Usar mocks para dependências externas

## Versionamento

- Commits semânticos (feat, fix, chore, refactor, docs, test)
- Branches: main, develop, feature/*, bugfix/*, hotfix/*
- Pull requests obrigatórios para main
