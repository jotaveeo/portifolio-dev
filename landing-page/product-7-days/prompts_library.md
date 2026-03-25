# Biblioteca de Prompts: Seu Primeiro Sistema com IA em 7 Dias

Esta biblioteca contém os "prompts mestres" para cada etapa do desenvolvimento do Micro-SaaS.

## Dia 1: Concepção Corretiva
**Objetivo:** Transformar uma ideia vaga em uma especificação técnica profissional.
```markdown
Atue como um Engenheiro de Software Sênior e Arquiteto de Soluções. 
Minha ideia de Micro-SaaS é: [DESCREVA AQUI].
Gere um documento de especificação técnica contendo:
1. Visão Geral e Problema Resolvido.
2. Lista de Funcionalidades (P0 - MVP).
3. Entidades do Banco de Dados (Campos e Tipos).
4. Estrutura de Rotas da API.
5. Definição da Stack: Next.js 14, Prisma, PostgreSQL, Clerk.
```

## Dia 2: Estrutura de Dados (Prisma)
**Objetivo:** Gerar o schema do banco de dados pronto para o `npx prisma db push`.
```markdown
Com base na especificação gerada anteriormente, atue como um Database Expert.
Gere o arquivo `schema.prisma` completo.
Regras:
- Use PostgreSQL como provider.
- Inclua campos de auditoria (createdAt, updatedAt) em todas as tabelas.
- Use nomes em snake_case para as tabelas.
- Garanta que as relações entre tabelas estejam configuradas corretamente.
```

## Dia 3: Backend & API (Server Actions/Routes)
**Objetivo:** Criar a lógica de negócio segura.
```markdown
Atue como um Engenheiro Backend Sênior. 
Gere os Server Actions ou API Routes necessários para as operações de [FUNCIONALIDADE].
Regras:
- Use TypeScript com tipagem estrita.
- Implemente validação de entrada usando Zod.
- Proteja as rotas verificando a sessão do usuário via Clerk.
- Retorne respostas no padrão { data, error, message }.
```

## Dia 4: Frontend & UI (Next.js + Tailwind)
**Objetivo:** Criar uma interface que pareça um produto de $50k.
```markdown
Atue como um Frontend Engineer e UI Designer de elite.
Crie o componente de [PÁGINA/SEÇÃO] usando Next.js e Tailwind CSS.
Estética: 'Midnight Luxe' (Dark mode, bordas arredondadas 2rem, micro-animações GSAP).
O componente deve ser responsivo e usar componentes Shadcn/ui onde apropriado.
```

## Dia 5: Integração com IA (OpenAI SDK)
**Objetivo:** Adicionar o "cérebro" ao sistema.
```markdown
Atue como um AI Engineer.
Crie um service que conecte o sistema à API da OpenAI (GPT-4o mini).
O serviço deve receber [INPUT] e retornar um JSON estruturado para [PROPOSITO].
Implemente tratamento de erros robusto e streaming de resposta se necessário.
```

## Dia 6: Debugging & Refatoração
**Objetivo:** Limpar o código e garantir performance.
```markdown
Atue como um QA e Refactoring Expert.
Analise o código abaixo e identifique:
1. Possíveis Code Smells.
2. Falhas de segurança (XSS, SQL Injection).
3. Otimizações de performance (Server side vs Client side).
Me forneça a versão corrigida e limpa seguindo os princípios SOLID.
```

## Dia 7: Deploy Checklist
**Objetivo:** Garantir que nada quebre ao vivo.
```markdown
Atue como um DevOps Engineer.
Gere um checklist de pré-deploy para uma aplicação Next.js na Vercel.
Inclua: Variáveis de ambiente, Configuração de CORS, Edge Runtime se necessário, e verificação de Build.
```
