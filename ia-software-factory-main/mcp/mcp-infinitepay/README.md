# MCP: Infinitepay Checkout

Integração simplificada do checkout da Infinitepay para sua aplicação Node.js/Express.

## 📋 Conteúdo

- `src/infinitepay-checkout.md` - Prompt MCP com instruções completas
- `src/examples/` - Exemplos de código prontos para usar

## 🚀 Como Usar

1. Copie o conteúdo de `infinitepay-checkout.md` para as regras do seu agente IA.
2. Peça para implementar o checkout da Infinitepay.
3. A IA gerará o código backend e o webhook handler.

## 🔑 Variáveis de Ambiente Necessárias

```
INFINITEPAY_HANDLE=seu_handle
FRONTEND_URL=https://seu-site.com
API_URL=https://sua-api.com
```

## ✅ Checklist de Implementação

- [ ] Serviço de geração de link de pagamento
- [ ] Handler do webhook
- [ ] Validação de valores (centavos)
- [ ] Tratamento de erros
- [ ] Testes com cartões de teste
