 TechStore Júnior

 Funcionalidades

- Catálogo de produtos: renderizado dinamicamente via JavaScript.
- Carrinho de compras:
  - Adicionar produtos 
  - Remover produtos
  - Cálculo automático de subtotal e total
  - Contador de itens no cabeçalho, atualizado em tempo real.
- Desconto progressivo: compras acima de R$ 150,00 recebem 10% de desconto automático, com mensagem indicando quanto falta para o próximo desconto.
- Formulário de checkout com validação:
  - Nome completo (mínimo de 3 caracteres)
  - E-mail 
  - Quantidade de itens ( numérica e maior que zero)
  - Bloqueio de envio se o carrinho estiver vazio
  - Mensagens de erro por campo e mensagem final de sucesso/erro.

 Tecnologias utilizadas:

- HTML — estrutura semântica da página
- CSS — estilização 
- JavaScript  — lógica de carrinho e validação de formulário

 Estrutura de arquivos:


 index.html       Estrutura da página 
 style.css        Estilização visual e responsividade
 script.js        Lógica do catálogo, carrinho e validação do formulário


Requisitos e Regras de Negócio

1. Requisitos Funcionais
As funcionalidades visíveis e utilizáveis pelo usuário.

RF01	O sistema deve listar dinamicamente os produtos disponíveis, exibindo imagem, nome e preço de cada item.
RF02		O usuário deve poder adicionar e remover produtos do carrinho, com atualização automática das quantidades.
RF03	O sistema deve calcular automaticamente o subtotal da compra, aplicar desconto quando elegível e exibir o valor total a pagar.
RF04		O sistema deve validar os campos de nome, e-mail e quantidade antes de confirmar o pedido, exibindo mensagens de erro ou de sucesso ao usuário.

2. Requisitos Não Funcionais
Como o sistema deve se comportar, e não o que ele faz.

RNF01		A interface deve se adaptar corretamente a diferentes tamanhos de tela.
RNF02	O sistema deve fornecer feedback imediato ao usuário (mensagens de erro).
RNF03	As operações de carrinho e cálculo de totais devem ocorrer instantaneamente no navegador.
RNF04	O sistema deve funcionar em navegadores modernos utilizando apenas HTML, CSS e JavaScript puro.

3. Regras de Negócio
Descrevem as políticas e condições que orientam o comportamento do sistema.

RN01	Compras com subtotal acima de R$ 150,00 recebem automaticamente 10% de desconto.
RN02	Ao adicionar um produto já existente no carrinho, o sistema deve incrementar a quantidade do item.
RN03	O pedido só pode ser confirmado se o nome, o e-mail e a quantidade estiverem de acordo com as os requisitos funcionais.
