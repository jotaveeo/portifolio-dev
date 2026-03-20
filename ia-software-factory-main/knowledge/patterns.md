# Design Patterns

Padrões de design usados nos sistemas gerados pela AI Software Factory.

## Backend Patterns

### Repository Pattern
Abstrai acesso a dados. Services nunca acessam banco diretamente.
```typescript
class UserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  }
  async create(data: CreateUserDto): Promise<User> {
    return prisma.user.create({ data })
  }
}
```

### Service Layer Pattern
Toda lógica de negócio fica nos services. Controllers e repositories não têm lógica de negócio.
```typescript
class UserService {
  constructor(private repo: UserRepository) {}
  
  async createUser(data: CreateUserDto): Promise<User> {
    const existing = await this.repo.findByEmail(data.email)
    if (existing) throw new ConflictError('Email already exists')
    data.password = await hash(data.password, 12)
    return this.repo.create(data)
  }
}
```

### Middleware Pattern
Cross-cutting concerns (auth, logging, error handling) como middlewares.
```typescript
async function authMiddleware(request, reply) {
  const token = request.headers.authorization?.split(' ')[1]
  if (!token) throw new UnauthorizedError()
  request.user = verifyJwt(token)
}
```

### DTO Pattern (Data Transfer Object)
Zod schemas definem o contrato de entrada e saída.
```typescript
const CreateUserDto = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})
```

## Frontend Patterns

### Smart/Dumb Components
- **Smart (Container):** gerencia estado, faz fetch, passa dados via props
- **Dumb (Presentational):** recebe props, renderiza UI, sem lógica de negócio

### Custom Hooks
Extrair lógica reutilizável em hooks customizados.
```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}
```

### API Service Layer
Centralizar chamadas de API em arquivos de serviço.
```typescript
const userService = {
  list: (params) => api.get('/users', { params }),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post('/users', data),
  update: (id, data) => api.patch(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),
}
```

### Compound Component Pattern
Componentes compostos para flexibilidade.
```tsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

## Architecture Patterns

### Clean Architecture (usar em todos os projetos)
```
External → Infrastructure → Application → Domain
(DB, APIs)  (Repos, Adapters) (Services, UseCases) (Entities, Rules)
```
Dependências sempre apontam para dentro.

### CQRS Light
Separar queries de commands quando a complexidade justificar:
- **Command:** `createUser`, `updateUser`, `deleteUser`
- **Query:** `getUserById`, `listUsers`, `searchUsers`
