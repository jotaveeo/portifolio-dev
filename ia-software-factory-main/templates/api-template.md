# API Template

Template para criação de APIs RESTful.

## Stack padrão

| Camada | Tecnologia |
|--------|-----------|
| Runtime | Node.js |
| Framework | Fastify |
| Linguagem | TypeScript |
| ORM | Prisma |
| Database | PostgreSQL |
| Validação | Zod |
| Docs | Swagger/OpenAPI |
| Testes | Jest + Supertest |

## Estrutura de pastas

```
api/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── middlewares/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── package.json
```

## Funcionalidades base

- [ ] CRUD completo
- [ ] Autenticação JWT
- [ ] Validação de entrada
- [ ] Tratamento de erros centralizado
- [ ] Logging estruturado
- [ ] Rate limiting
- [ ] Paginação
- [ ] Documentação Swagger
- [ ] Health check
- [ ] Testes unitários e de integração
