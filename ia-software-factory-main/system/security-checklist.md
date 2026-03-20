# Security Checklist

Checklist de segurança obrigatório antes de qualquer deploy.

## Autenticação

- [ ] Senhas com hash bcrypt (salt rounds ≥ 12)
- [ ] JWT com expiração curta (access: 15min, refresh: 7d)
- [ ] Refresh token rotation (revogar anterior a cada uso)
- [ ] Rate limiting em login (5 tentativas/min por IP)
- [ ] Account lockout após 10 tentativas falhadas
- [ ] Password strength validation (8+ chars, upper, number, special)

## Autorização

- [ ] RBAC implementado (roles: admin, user, viewer)
- [ ] Ownership check em operações de dados do usuário
- [ ] Middleware de auth em TODA rota protegida
- [ ] Princípio do menor privilégio

## Input Validation

- [ ] Zod schema em toda rota que recebe dados
- [ ] Sanitização de HTML/XSS em inputs de texto livre
- [ ] Limite de tamanho em uploads (max file size)
- [ ] Limit de tamanho em request body (max payload)
- [ ] Rejeitar content-types inesperados

## Headers de Segurança (Helmet)

- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 0` (CSP é preferível)
- [ ] `Strict-Transport-Security: max-age=31536000`
- [ ] `Content-Security-Policy` configurado
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`

## CORS

- [ ] Origins específicos (nunca `*` em produção)
- [ ] Methods permitidos explícitos
- [ ] Headers permitidos explícitos
- [ ] Credentials configurado

## Dados Sensíveis

- [ ] Senhas nunca retornadas na API (`select: false` ou DTO)
- [ ] Tokens nunca em logs
- [ ] `.env` no `.gitignore`
- [ ] Secrets em environment variables (não hardcoded)
- [ ] Dados pessoais criptografados quando necessário

## Infraestrutura

- [ ] HTTPS obrigatório (redirect HTTP → HTTPS)
- [ ] Dependências atualizadas (`npm audit`)
- [ ] Docker rodando como non-root user
- [ ] Ports expostos: apenas os necessários
- [ ] Health check endpoints sem informações sensíveis

## Banco de Dados

- [ ] Connection string com credenciais seguras
- [ ] Princípio do menor privilégio no DB user
- [ ] Backup automatizado
- [ ] Soft delete em dados críticos (não perder dados)

## Logging

- [ ] Log de eventos de auth (login, logout, failed attempts)
- [ ] Log de ações administrativas
- [ ] Nunca logar dados sensíveis (senhas, tokens, CPF)
- [ ] Request ID em todos os logs (rastreabilidade)
