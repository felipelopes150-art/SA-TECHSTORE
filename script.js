
const produtos = [
    { id: 1, nome: "Fone de Ouvido Bluetooth", preco: 89.90, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5Q2I_G5xH4Xq6H2tjrQUZRPxtOdM3y3Syu0rjr0Zuw&s=10"},
    { id: 4, nome: "Teclado Mecânico Compacto", preco: 199.90, imagem: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/t/e/teclado.webp" },
    { id: 5, nome: "Power Bank 10000mAh", preco: 79.90, imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3KmLhxTf1tiNUxOswsfxgeSmEYyvA5CtwtQcAZlH0GF1lQPVPJ-lQrk5302P0juQgpF7tb3YgpNjC667y774IhJ7h2pIW-uah9K0OjdpsHs88hv_Tdz4bZzVAdiwDbP6Y2CpMNQ&usqp=CAc" },
    { id: 6, nome: "Suporte para Notebook", preco: 69.90, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7noZBXRKIPIVWTVfZoQ4eWfFvkcRYIXw7BSQU6_lFNQZGok6tiq4p4nzA71l5ELsKoSmJ9xmXI_WwcLmi4qVpYhGgu1lU7OQmZvQzcP6Ch0krqqYpouy-TcZO6D1kZ0iHbYwQvjoMNz0&usqp=CAc" },
];


let carrinho = [];


const VALOR_MINIMO_DESCONTO = 150;


function mostrarProdutos() {
    const container = document.getElementById("listaProdutos");
    let html = "";


    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        html += `
      <div class="produto-card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="produto-info">
          <h3>${produto.nome}</h3>
          <p class="preco">${formatarPreco(produto.preco)}</p>
          <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
        </div>
      </div>
    `;
    }

    container.innerHTML = html;
}


function adicionarAoCarrinho(id) {

    let jaEstaNoCarrinho = false;

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id === id) {
            carrinho[i].quantidade = carrinho[i].quantidade + 1;
            jaEstaNoCarrinho = true;
        }
    }


    if (!jaEstaNoCarrinho) {
        carrinho.push({ id: id, quantidade: 1 });
    }

    atualizarCarrinho();
}

function removerDoCarrinho(id) {

    carrinho = carrinho.filter(function (item) {
        return item.id !== id;
    });

    atualizarCarrinho();
}


function calcularTotais() {
    let subtotal = 0;


    for (let i = 0; i < carrinho.length; i++) {
        const produto = buscarProdutoPorId(carrinho[i].id);
        if (produto) {
            subtotal = subtotal + produto.preco * carrinho[i].quantidade;
        }
    }


    let desconto = 0;
    if (subtotal > VALOR_MINIMO_DESCONTO) {
        desconto = subtotal * 0.10;
    } else {
        desconto = 0;
    }

    const total = subtotal - desconto;

    return { subtotal: subtotal, desconto: desconto, total: total };
}


function buscarProdutoPorId(id) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            return produtos[i];
        }
    }
    return null;
}

function atualizarCarrinho() {
    const lista = document.getElementById("listaCarrinho");


    if (carrinho.length === 0) {
        lista.innerHTML = `<li id="carrinhoVazio">Seu carrinho está vazio.</li>`;
    } else {
        let html = "";

        for (let i = 0; i < carrinho.length; i++) {
            const item = carrinho[i];
            const produto = buscarProdutoPorId(item.id);
            if (!produto) continue;

            const subtotalItem = produto.preco * item.quantidade;

            html += `
        <li>
          <span>${produto.nome} (x${item.quantidade}) - ${formatarPreco(subtotalItem)}</span>
          <button onclick="removerDoCarrinho(${produto.id})">Remover</button>
        </li>
      `;
        }

        lista.innerHTML = html;
    }


    const totais = calcularTotais();

    document.getElementById("subtotal").textContent = formatarPreco(totais.subtotal);
    document.getElementById("desconto").textContent = "- " + formatarPreco(totais.desconto);
    document.getElementById("total").textContent = formatarPreco(totais.total);

    const linhaDesconto = document.getElementById("linhaDesconto");
    const dica = document.getElementById("dicaDesconto");


    if (totais.desconto > 0) {
        linhaDesconto.style.display = "flex";
        dica.textContent = "Você ganhou 10% de desconto! 🎉";
    } else {
        linhaDesconto.style.display = "none";
        const faltam = VALOR_MINIMO_DESCONTO - totais.subtotal;
        dica.textContent = "Compre mais " + formatarPreco(faltam) + " e ganhe 10% de desconto!";
    }


    let totalItens = 0;
    for (let i = 0; i < carrinho.length; i++) {
        totalItens += carrinho[i].quantidade;
    }
    document.getElementById("contadorCarrinho").textContent = totalItens;
}


function validarFormulario(evento) {
    evento.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoQuantidade = document.getElementById("quantidade");

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const quantidade = campoQuantidade.value.trim();

    limparErros();

    let formularioValido = true;


    if (nome === "" || nome.length < 3) {
        mostrarErro(campoNome, "erroNome", "Digite seu nome completo.");
        formularioValido = false;
    }


    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email === "" || !formatoEmailValido) {
        mostrarErro(campoEmail, "erroEmail", "Digite um e-mail válido.");
        formularioValido = false;
    }


    const numeroQuantidade = Number(quantidade);
    if (quantidade === "" || isNaN(numeroQuantidade) || numeroQuantidade <= 0) {
        mostrarErro(campoQuantidade, "erroQuantidade", "Digite uma quantidade válida.");
        formularioValido = false;
    }


    if (carrinho.length === 0) {
        mostrarMensagemFinal("Seu carrinho está vazio. Adicione um produto antes de confirmar.", false);
        formularioValido = false;
    }

    if (!formularioValido) {
        return;
    }


    mostrarMensagemFinal("Pedido confirmado! Obrigado, " + nome + ". Enviamos os detalhes para " + email + ".", true);

    carrinho = [];
    atualizarCarrinho();
    evento.target.reset();
}


function mostrarErro(campoInput, idErro, texto) {
    campoInput.classList.add("campo-invalido");
    document.getElementById(idErro).textContent = texto;
}


function limparErros() {
    document.querySelectorAll(".campo-invalido").forEach(function (campo) {
        campo.classList.remove("campo-invalido");
    });
    document.querySelectorAll(".erro").forEach(function (span) {
        span.textContent = "";
    });
}


function mostrarMensagemFinal(texto, sucesso) {
    const mensagem = document.getElementById("mensagemFinal");
    mensagem.textContent = texto;
    mensagem.className = sucesso ? "mensagem-final sucesso" : "mensagem-final erro-geral";
}


function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


document.addEventListener("DOMContentLoaded", function () {
    mostrarProdutos();
    atualizarCarrinho();

    document.getElementById("formCheckout").addEventListener("submit", validarFormulario);
});
