# API Design Rules

Regras para design de APIs RESTful consistentes e profissionais.

## Convenções de URL

```
GET    /api/v1/resources          → listar (paginado)
GET    /api/v1/resources/:id      → buscar por ID
POST   /api/v1/resources          → criar
PATCH  /api/v1/resources/:id      → atualizar parcial
PUT    /api/v1/resources/:id      → atualizar completo
DELETE /api/v1/resources/:id      → deletar (soft delete)
```

- Plural para collections (`/users`, não `/user`)
- Kebab-case para URLs (`/user-profiles`, não `/userProfiles`)
- Versionamento no path (`/api/v1/`)
- Máximo 3 níveis de aninhamento (`/users/:id/posts`, não `/users/:id/posts/:postId/comments/:commentId`)

## Query Parameters

```
GET /api/v1/resources?page=1&limit=20&sort=createdAt&order=desc&search=term&status=active
```

| Param | Tipo | Default | Descrição |
|-------|------|---------|-----------|
| `page` | number | 1 | Página atual |
| `limit` | number | 20 | Itens por página (max: 100) |
| `sort` | string | createdAt | Campo de ordenação |
| `order` | asc/desc | desc | Direção |
| `search` | string | — | Busca textual |
| `filter[field]` | string | — | Filtro por campo |

## Response Patterns

### Sucesso (item)
```json
{
  "data": { ... },
  "message": "Resource created successfully"
}
```

### Sucesso (lista)
```json
{
  "data": [ ... ],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "totalPages": 8
  }
}
```

### Erro
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Email is required",
  "statusCode": 400,
  "details": [
    { "field": "email", "message": "Required" }
  ]
}
```

## HTTP Status Codes

| Code | Uso |
|------|-----|
| 200 | Sucesso (GET, PATCH, PUT) |
| 201 | Criado (POST) |
| 204 | Sem conteúdo (DELETE) |
| 400 | Input inválido |
| 401 | Não autenticado |
| 403 | Sem permissão |
| 404 | Não encontrado |
| 409 | Conflito (duplicado) |
| 422 | Entidade não processável |
| 429 | Rate limit excedido |
| 500 | Erro interno |

## Headers

```
Content-Type: application/json
Authorization: Bearer <token>
X-Request-Id: <uuid>
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1620000000
```

## Regras

- Toda rota deve ter validação de input (Zod)
- Toda rota protegida deve verificar auth
- Toda listagem deve ser paginada
- Toda response deve seguir o pattern acima (sem exceção)
- Erros devem ter `error` code + `message` legível
- Rate limiting: 100 req/min para autenticados, 20 req/min para públicos
