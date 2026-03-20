# Security Knowledge Base

Referência de segurança para implementação e auditoria.

## OWASP Top 10 — Resumo Prático

### 1. Injection
**Risco:** Atacante injeta código malicioso via inputs.
**Proteção:** Prisma (parameterized queries), Zod (validation), never use string concatenation in queries.

### 2. Broken Authentication
**Risco:** Atacante assume identidade de outro usuário.
**Proteção:** bcrypt (12+ rounds), JWT com expiração curta, refresh token rotation, rate limiting em login.

### 3. Sensitive Data Exposure
**Risco:** Dados sensíveis expostos sem proteção.
**Proteção:** HTTPS, criptografia em repouso (AES-256), nunca logar senhas/tokens, `.env` no `.gitignore`.

### 4. XSS (Cross-Site Scripting)
**Risco:** Atacante injeta JavaScript malicioso na página.
**Proteção:** React já escapa por padrão, CSP headers, sanitizar HTML quando usar `dangerouslySetInnerHTML`.

### 5. Broken Access Control
**Risco:** Usuário acessa dados/funções sem permissão.
**Proteção:** RBAC, ownership check (`where: { userId: req.user.id }`), middleware de auth em toda rota.

### 6. Security Misconfiguration
**Risco:** Configurações inseguras em produção.
**Proteção:** Helmet, CORS restrito, desabilitar stack traces em produção, `NODE_ENV=production`.

### 7. Rate Limiting
```typescript
import rateLimit from '@fastify/rate-limit'

app.register(rateLimit, {
  max: 100,        // requests
  timeWindow: '1 minute',
  keyGenerator: (req) => req.ip,
})

// Rota específica
app.register(rateLimit, {
  max: 5,
  timeWindow: '1 minute',
  routeLimit: ['/auth/login'],
})
```

## Implementação JWT Segura

```typescript
// Gerar tokens
const accessToken = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
)

const refreshToken = crypto.randomUUID()
await prisma.session.create({
  data: { userId: user.id, token: refreshToken, expiresAt: addDays(7) }
})

// Verificar
const decoded = jwt.verify(token, process.env.JWT_SECRET)

// Refresh com rotation
const session = await prisma.session.findUnique({ where: { token } })
if (!session || session.expiresAt < new Date()) throw new UnauthorizedError()
await prisma.session.delete({ where: { id: session.id } }) // revogar
// criar novo refresh token...
```

## Headers de Segurança (Helmet config)

```typescript
import helmet from '@fastify/helmet'

app.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
})
```

## Audit Logging

```typescript
async function auditLog(action: string, userId: string, details: object) {
  await prisma.auditLog.create({
    data: {
      action,      // 'USER_LOGIN', 'USER_CREATED', 'PERMISSION_CHANGED'
      userId,
      details,     // { ip, userAgent, changes }
      timestamp: new Date(),
    },
  })
}
```
