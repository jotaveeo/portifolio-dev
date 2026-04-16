---
description: Investigar e corrigir bugs complexos usando o padrão ReAct (Reason + Act)
---

# /debug-and-fix — Debugging Autônomo (QA Agent)

## Passo 1 — Receber o Erro

Peça ao usuário para colar o erro exato do terminal ou console do navegador, junto com o contexto de onde ocorreu (ex: "Erro ao tentar fazer login na rota `/api/auth`").

## Passo 2 — Investigação Autônoma (ReAct Pattern)

Você DEVE usar o padrão ReAct para investigar a causa raiz ANTES de propor qualquer solução. Siga este loop estrito:

### Loop de Investigação:

1. **Thought (Pensamento):** Analise o erro e formule uma hipótese.
   *Exemplo: "O erro diz `Cannot read properties of undefined (reading 'map')` no arquivo `UserList.tsx`. Isso significa que a variável `users` está chegando como `undefined`."*

2. **Action (Ação):** Leia os arquivos relevantes para testar sua hipótese.
   *Exemplo: "Vou ler o arquivo `UserList.tsx` e o hook `useUsers.ts` para ver de onde os dados vêm."*

3. **Observation (Observação):** Descreva o que você encontrou nos arquivos.
   *Exemplo: "A API retorna `{ data: [...] }`, mas o hook está tentando acessar `response.users` em vez de `response.data`."*

**Repita os passos 1 a 3 até ter 100% de certeza da causa raiz.**

## Passo 3 — Correção (Reflection)

Após encontrar a causa raiz:

1. **Thought:** "A causa raiz é X. A solução é Y."
2. **Action:** Edite o arquivo para aplicar a correção.

**Auto-Crítica (Reflection):**
Antes de finalizar, pergunte-se:
- A correção introduz algum efeito colateral em outras partes do sistema?
- A tipagem do TypeScript continua correta após a mudança?
- O erro foi tratado de forma robusta (ex: adicionando um fallback `users || []`)?

*Se encontrar problemas, ajuste a correção silenciosamente.*

## Passo 4 — Explicação e Validação

Apresente ao usuário:
1. **A Causa Raiz:** Explique de forma simples o que estava errado.
2. **A Solução:** Mostre o código corrigido.
3. **Prevenção:** Sugira como evitar esse erro no futuro (ex: "Adicionei validação Zod no retorno da API").

Pergunte: "O erro foi resolvido? Posso rodar os testes para confirmar?"

// turbo-all
