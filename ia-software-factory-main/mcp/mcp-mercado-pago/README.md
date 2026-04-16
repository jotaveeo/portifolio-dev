# MCP: Mercado Pago Checkout Bricks

Integração completa do Checkout Bricks do Mercado Pago com foco em segurança e prevenção a fraude.

## 📋 Conteúdo

- `src/mercado-pago-bricks.md` - Prompt MCP com instruções completas
- `src/examples/` - Exemplos de código prontos para usar

## 🚀 Como Usar

1. Copie o conteúdo de `mercado-pago-bricks.md` para as regras do seu agente IA.
2. Peça para implementar o Checkout Bricks com validação de fraude.
3. A IA gerará o componente Frontend (React) e o endpoint Backend (Node.js).

## 🔑 Variáveis de Ambiente Necessárias

```
NEXT_PUBLIC_MP_PUBLIC_KEY=sua_public_key
MP_ACCESS_TOKEN=seu_access_token
```

## ⚠️ Diferenças Críticas

- **PUBLIC_KEY:** Seguro expor no Frontend (JavaScript).
- **ACCESS_TOKEN:** NUNCA exponha no Frontend. Use apenas no Backend.

## ✅ Checklist de Implementação

- [ ] Componente Frontend com Payment Brick
- [ ] Endpoint Backend para criar pagamentos
- [ ] Tratamento de rejeições por fraude
- [ ] Webhook para confirmação de pagamentos
- [ ] 3DS 2.0 habilitado
- [ ] Testes com cartões de teste
