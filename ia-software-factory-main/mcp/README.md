# MCPs de Integração de Pagamento

Este repositório contém dois Model Context Protocols (MCPs) projetados para ajudar desenvolvedores a integrar gateways de pagamento de forma rápida, segura e com as melhores práticas do mercado.

## 🚀 O que é um MCP?

Um MCP (Model Context Protocol) é um conjunto de instruções, prompts e exemplos de código que você pode fornecer a um agente de IA (como o Antigravity, Cursor, GitHub Copilot) para que ele entenda profundamente como implementar uma tecnologia específica.

Em vez de a IA "adivinhar" como integrar o Mercado Pago ou a Infinitepay com base em dados desatualizados de treinamento, você fornece este MCP, e a IA usará a documentação mais recente e as melhores práticas de segurança.

## 📦 Gateways Suportados

### 1. Infinitepay (Simples e Rápido)
A Infinitepay oferece uma API extremamente simples baseada em links de pagamento. É ideal para quem precisa de uma integração rápida sem lidar com a complexidade de formulários de cartão de crédito no próprio site.

- **Vantagens:** Integração em minutos, sem SDK complexo, parcelamento em 12x.
- **Como usar:** Copie o conteúdo de `mcp-infinitepay/src/infinitepay-checkout.md` para o seu agente de IA.

### 2. Mercado Pago (Robusto e Customizável)
O Mercado Pago oferece o Checkout Bricks, uma solução modular que permite criar uma experiência de pagamento nativa no seu site, mantendo a segurança e certificação PCI.

- **Vantagens:** Experiência nativa, 3DS 2.0 integrado, sistema antifraude robusto.
- **Desafios resolvidos pelo MCP:** O MCP ensina a IA a lidar com a complexidade do SDK, a separação correta entre Frontend (Public Key) e Backend (Access Token), e o tratamento de rejeições por score de fraude (`cc_rejected_high_risk`).
- **Como usar:** Copie o conteúdo de `mcp-mercado-pago/src/mercado-pago-bricks.md` para o seu agente de IA.

## 🛡️ Foco em Segurança e Antifraude

Ambos os MCPs foram desenhados com foco em segurança:

- **Mercado Pago:** Instruções claras sobre como enviar dados adicionais (`additional_info`) para melhorar o score antifraude e reduzir rejeições indevidas.
- **Infinitepay:** Validação rigorosa no webhook para garantir que o valor pago (`paid_amount`) corresponde ao valor do pedido.
- **Geral:** Separação estrita de responsabilidades entre Frontend e Backend.

## 💡 Como usar com o Antigravity / Cursor

1. Abra o seu projeto no Cursor ou Antigravity.
2. Crie um arquivo `.cursorrules` ou adicione às regras do seu agente.
3. Copie o conteúdo do MCP desejado (ex: `mercado-pago-bricks.md`) para as regras.
4. Peça para a IA: *"Implemente o checkout do Mercado Pago seguindo as regras do MCP que te passei."*
5. A IA gerará o código Frontend e Backend perfeitamente alinhado com a documentação oficial.
