---
description: Critérios objetivos de qualidade para validação de código gerado
---

# Padrões de Qualidade (Quality Standards)

Este documento define os critérios objetivos que **TODO CÓDIGO GERADO** deve atender antes de ser entregue ao usuário.

Você DEVE usar este checklist durante a fase de **Reflection (Auto-Crítica)** em todos os workflows.

## 1. Qualidade de Código (Clean Code)

- [ ] **Tamanho de Funções:** Nenhuma função excede 30 linhas de lógica.
- [ ] **Tamanho de Arquivos:** Nenhum arquivo excede 300 linhas.
- [ ] **Complexidade Ciclomática:** Não há mais de 3 níveis de aninhamento (`if` dentro de `if` dentro de `for`).
- [ ] **Nomenclatura:** Variáveis e funções têm nomes descritivos (ex: `getUserById` em vez de `getUsr`).
- [ ] **Comentários:** Não há comentários redundantes (ex: `// retorna o usuário`). Comentários explicam o "porquê", não o "o quê".
- [ ] **Placeholders:** Não há `// TODO`, `// FIXME` ou código comentado. O código está 100% pronto para produção.

## 2. TypeScript e Tipagem

- [ ] **Strict Mode:** O código compila com `strict: true` no `tsconfig.json`.
- [ ] **Sem Any:** A palavra-chave `any` é estritamente proibida. Use `unknown` ou defina a interface correta.
- [ ] **Inferência:** Tipos de retorno de funções públicas estão explicitamente definidos.
- [ ] **Zod:** Todos os inputs externos (body, query, params) são validados com schemas Zod antes de chegar à lógica de negócio.

## 3. Arquitetura e Design Patterns

- [ ] **Injeção de Dependência:** Services recebem Repositories via construtor ou parâmetros, facilitando testes.
- [ ] **Isolamento de Banco:** Controllers NUNCA chamam o Prisma ou banco de dados diretamente. Eles chamam Services.
- [ ] **Tratamento de Erros:** Erros são lançados usando classes customizadas (ex: `NotFoundError`, `ValidationError`) e capturados por um middleware centralizado.
- [ ] **DRY (Don't Repeat Yourself):** Lógica repetida foi extraída para funções utilitárias ou hooks customizados.

## 4. Segurança (Security by Design)

- [ ] **Senhas:** Nunca são retornadas em respostas de API. Sempre são cacheadas com bcrypt (mínimo 10 rounds).
- [ ] **Autenticação:** Rotas privadas têm middleware de verificação JWT.
- [ ] **Autorização:** Rotas sensíveis verificam a role do usuário (RBAC).
- [ ] **CORS:** Configurado corretamente no backend.
- [ ] **Rate Limiting:** Configurado para rotas públicas (ex: `/login`, `/register`).
- [ ] **Gitignore:** O arquivo .gitignore deve estar atualizado com as melhores práticas.
- [ ] **Env:** O arquivo .env deve estar atualizado com as melhores práticas e dentro do .gitignore sempre.
 
## 5. Frontend (React/Next.js)

- [ ] **Componentes:** São puros (dumb) sempre que possível. Lógica de estado complexa está em hooks customizados.
- [ ] **Acessibilidade (a11y):** Imagens têm `alt`, botões têm `aria-label` quando necessário, formulários têm labels associadas.
- [ ] **Responsividade:** O layout usa classes Tailwind mobile-first (ex: `flex flex-col md:flex-row`).
- [ ] **Estado:** Estado global (Zustand) é usado apenas quando necessário. Estado local (useState) ou de servidor (React Query) é preferido.
- [ ] **Componentização:** usar o forte do react, componentização.

## 6. Testes

- [ ] **Cobertura:** A lógica de negócio crítica (Services) tem testes unitários.
- [ ] **Integração:** As rotas principais têm testes de integração (Supertest).
- [ ] **Mocks:** Dependências externas (banco, APIs terceiras) estão mockadas nos testes unitários.

---

**Instrução para o Agente:**
Se, durante a sua auto-crítica (Reflection), você perceber que o código gerado viola qualquer um destes critérios, **VOCÊ DEVE REFATORAR O CÓDIGO SILENCIOSAMENTE** antes de apresentá-lo ao usuário. O usuário espera código de nível Staff Engineer.
