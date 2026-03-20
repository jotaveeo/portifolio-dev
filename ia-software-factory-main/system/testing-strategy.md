# Testing Strategy

Estratégia de testes para todos os sistemas gerados.

## Pirâmide de Testes

```
         ┌──────┐
         │ E2E  │  5-10 testes (fluxos críticos)
         ├──────┤
         │Integ.│  20-30 testes (rotas de API)
         ├──────┤
         │ Unit │  50-100+ testes (services, utils)
         └──────┘
```

## Ferramentas

| Tipo | Backend | Frontend |
|------|---------|----------|
| Unit | Jest | Jest / Vitest |
| Integration | Supertest | React Testing Library |
| E2E | — | Playwright |
| Coverage | jest --coverage | jest --coverage |

## Padrões

### Naming
```
should [expected behavior] when [condition]
```

### Estrutura (AAA)
```
Arrange → preparar dados e mocks
Act     → executar a ação
Assert  → verificar resultado
```

### O que testar por camada

| Camada | O que testar |
|--------|-------------|
| Service | Lógica de negócio, validações, error handling |
| Controller | Status codes, response format, auth |
| Repository | Queries, filtros, paginação |
| Component | Renderização, eventos, props |
| Hook | State changes, side effects |
| Utils | Input/output, edge cases |

### O que NÃO testar
- Implementação interna (teste comportamento, não implementação)
- Código de framework (Prisma, Fastify, React internals)
- Getters/setters triviais

## Cobertura

- **Mínimo:** 80% de cobertura de linhas
- **Meta:** 90% em services e utils
- **E2E:** cobrir os 3-5 fluxos mais críticos (auth, CRUD principal, pagamento)

## Scripts

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:e2e": "playwright test"
}
```

## CI Integration

Testes devem rodar automaticamente:
- Em todo push para branches `feature/*` e `develop`
- Em todo PR para `main`
- Coverage report como comentário no PR
