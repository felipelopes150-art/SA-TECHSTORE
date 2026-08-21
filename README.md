 TechStore Júnior

Loja virtual fictícia desenvolvida com HTML, CSS e JavaScript puro (sem frameworks ou bibliotecas externas), simulando um fluxo completo de e-commerce: catálogo de produtos, carrinho de compras com desconto progressivo e formulário de finalização de pedido com validação.

> Projeto de estudo.

 Funcionalidades

- Catálogo de produtos: renderizado dinamicamente via JavaScript a partir de um array de objetos.
- Carrinho de compras:
  - Adicionar produtos (incrementando a quantidade se o item já estiver no carrinho);
  - Remover produtos;
  - Cálculo automático de subtotal e total;
  - Contador de itens no cabeçalho, atualizado em tempo real.
- Desconto progressivo: compras acima de R$ 150,00 recebem 10% de desconto automático, com mensagem indicando quanto falta para o próximo desconto.
- Formulário de checkout com validação:
  - Nome completo (mínimo de 3 caracteres);
  - E-mail (validado por regex);
  - Quantidade de itens (deve ser numérica e maior que zero);
  - Bloqueio de envio se o carrinho estiver vazio;
  - Mensagens de erro por campo e mensagem final de sucesso/erro.
- **Layout responsivo**, adaptado para telas menores (grade de produtos, cabeçalho e formulários se ajustam em telas até 700px).

 Tecnologias utilizadas:

- HTML — estrutura semântica da página
- CSS — estilização com variáveis (`:root`), Flexbox, CSS Grid e media queries
- JavaScript  — manipulação de DOM, lógica de carrinho e validação de formulário
- Google Fonts — fonte [Poppins](https://fonts.google.com/specimen/Poppins).

 Estrutura de arquivos:


 index.html       Estrutura da página (header, banner, produtos, carrinho, checkout)
 style.css        Estilização visual e responsividade
 script.js        Lógica do catálogo, carrinho e validação do formulário


 Como executar:

Não é necessário nenhuma instalação ou servidor. Basta:

1. Clonar ou baixar este repositório;
2. Certificar-se de que os três arquivos (`index.html`, `style.css`, `script.js`) estão na mesma pasta;
3. Abrir o arquivo `index.html` diretamente no navegador.

 Possíveis melhorias futuras

- Persistir o carrinho no `localStorage` para manter os itens após recarregar a página;
- Adicionar campo de seleção de quantidade por produto (atualmente cada clique adiciona 1 unidade);
- Integrar imagens dos produtos hospedadas localmente, evitando links externos instáveis;
- Adicionar testes automatizados para as funções de cálculo do carrinho.

 Licença

Projeto de estudo, livre para uso e modificação.



TechStore Júnior
Requisitos e Regras de Negócio

1. Requisitos Funcionais
As funcionalidades visíveis e utilizáveis pelo usuário.

RF01	Exibir catálogo de produtos	O sistema deve listar dinamicamente os produtos disponíveis, exibindo imagem, nome e preço de cada item.
RF02	Gerenciar carrinho de compras	O usuário deve poder adicionar e remover produtos do carrinho, com atualização automática das quantidades e do contador no cabeçalho.
RF03	Calcular subtotal, desconto e total	O sistema deve calcular automaticamente o subtotal da compra, aplicar desconto quando elegível e exibir o valor total a pagar.
RF04	Validar e processar o formulário de checkout	O sistema deve validar os campos de nome, e-mail e quantidade antes de confirmar o pedido, exibindo mensagens de erro ou de sucesso ao usuário.

2. Requisitos Não Funcionais
Como o sistema deve se comportar, e não o que ele faz.

RNF01	Responsividade	A interface deve se adaptar corretamente a diferentes tamanhos de tela (desktop, tablet e celular), reorganizando cabeçalho, grade de produtos e formulários.
RNF02	Usabilidade e feedback visual	O sistema deve fornecer feedback imediato ao usuário (mensagens de erro por campo, destaque visual em campos inválidos e mensagem final de confirmação).
RNF03	Desempenho no lado do cliente	As operações de carrinho e cálculo de totais devem ocorrer instantaneamente no navegador, sem necessidade de recarregar a página ou depender de um servidor.
RNF04	Compatibilidade e independência de tecnologia	O sistema deve funcionar em navegadores modernos utilizando apenas HTML, CSS e JavaScript puro, sem exigir frameworks, bibliotecas externas ou instalação.

3. Regras de Negócio
Descrevem as políticas e condições que orientam o comportamento do sistema.

RN01	Desconto progressivo por valor de compra	Compras com subtotal acima de R$ 150,00 recebem automaticamente 10% de desconto sobre o valor total.
RN02	Consolidação de itens repetidos no carrinho	Ao adicionar um produto já existente no carrinho, o sistema deve incrementar a quantidade do item, em vez de criar uma nova entrada.
RN03	Validação obrigatória dos dados do cliente	O pedido só pode ser confirmado se o nome tiver no mínimo 3 caracteres, o e-mail estiver em formato válido e a quantidade informada for um número maior que zero.
RN04	Carrinho não pode estar vazio na finalização	O pedido não pode ser confirmado caso o carrinho de compras esteja vazio, mesmo que os demais dados do formulário sejam válidos.
