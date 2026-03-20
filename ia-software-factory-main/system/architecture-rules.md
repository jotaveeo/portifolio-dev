# Architecture Rules

Regras de arquitetura para todos os sistemas gerados.

## Camadas obrigatórias

1. **Presentation Layer** — UI, rotas, controllers
2. **Application Layer** — use cases, services
3. **Domain Layer** — entidades, regras de negócio
4. **Infrastructure Layer** — banco de dados, APIs externas, cache

## Princípios arquiteturais

- Dependency Inversion: camadas internas não dependem de externas
- Injeção de dependência para desacoplamento
- Contratos via interfaces/abstrações
- Separação clara entre leitura e escrita (CQRS quando aplicável)

## Comunicação entre serviços

- REST para APIs síncronas
- WebSocket para real-time
- Message queue para processamento assíncrono
- Event-driven para desacoplamento

## Segurança

- Autenticação via JWT ou OAuth2
- Autorização baseada em roles (RBAC)
- Validação de entrada em todas as rotas
- Rate limiting em APIs públicas
- HTTPS obrigatório

## Performance

- Cache em camadas (Redis / in-memory)
- Paginação obrigatória em listas
- Lazy loading quando aplicável
- Índices de banco de dados para queries frequentes

## Observabilidade

- Logging estruturado
- Health checks
- Métricas de performance
- Tracing distribuído quando aplicável
