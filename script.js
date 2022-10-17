document.querySelector("button").disabled = true;

let nomePrato = null;
let precoPrato = null;

function selecionaPrato(clique){
    
    const selecaoAnterior = document.querySelector("#pratos > .selecionado");
    const iconeSelecao = document.querySelector("#pratos > .selecionado > p > ion-icon");
    
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
        iconeSelecao.classList.add("escondido");
    }
    
    clique.classList.add("selecionado");
    document.querySelector("#pratos > .selecionado > p > ion-icon").classList.remove("escondido");
    nomePrato = document.querySelector("#pratos > .selecionado > h3").innerHTML;
    precoPrato = parseFloat(document.querySelector("#pratos > .selecionado span").innerHTML.replace(",", "."));
}

let nomeBebida = null;
let precoBebida = null

function selecionaBebida(clique){
    const selecaoAnterior = document.querySelector("#bebidas > .selecionado");
    const iconeSelecao = document.querySelector("#bebidas > .selecionado > p > ion-icon");

    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
        iconeSelecao.classList.add("escondido");
    }

    clique.classList.add("selecionado");
    document.querySelector("#bebidas > .selecionado > p > ion-icon").classList.remove("escondido");
    nomeBebida = document.querySelector("#bebidas > .selecionado > h3").innerHTML;
    precoBebida = parseFloat(document.querySelector("#bebidas > .selecionado span").innerHTML.replace(",", "."));
}

let nomeSobremesa = null;
let precoSobremesa = null;

function selecionaSobremesa(clique){
    const selecaoAnterior = document.querySelector("#sobremesas > .selecionado");
    const iconeSelecao = document.querySelector("#sobremesas > .selecionado > p > ion-icon");

    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
        iconeSelecao.classList.add("escondido");
    }

    clique.classList.add("selecionado");
    document.querySelector("#sobremesas > .selecionado > p > ion-icon").classList.remove("escondido");
    nomeSobremesa = document.querySelector("#sobremesas > .selecionado > h3").innerHTML;
    precoSobremesa = parseFloat(document.querySelector("#sobremesas > .selecionado span").innerHTML.replace(",", "."));

    if(nomePrato !== null && nomeBebida !== null){
        document.querySelector("button").style.cssText = "background-color: #32B72F;" + "font-weight: 700";
        document.querySelector("button").innerHTML = "Fechar pedido";
        document.querySelector("button").disabled = false;
    }
}

let pedido = null;
let url = "https://wa.me/5551985148169?text=";
let nomeCliente = null;
let enderecoCliente = null;

function mostraModal(clique) {
    nomeCliente = prompt("Informe o seu nome: ");
    enderecoCliente = prompt("Informe o endereço do pedido: ");

    document.querySelector(".modal").classList.remove("escondido");
    document.querySelector(".nome-prato").innerHTML = `${nomePrato}`;
    document.querySelector(".valor-prato").innerHTML = `${precoPrato.toFixed(2)}`.replace(".", ",");
    document.querySelector(".nome-bebida").innerHTML = `${nomeBebida}`;
    document.querySelector(".valor-bebida").innerHTML = `${precoBebida.toFixed(2)}`.replace(".", ",");
    document.querySelector(".nome-sobremesa").innerHTML = `${nomeSobremesa}`;
    document.querySelector(".valor-sobremesa").innerHTML = `${precoSobremesa.toFixed(2)}`.replace(".", ",");
    document.querySelector(".valor-total").innerHTML = `R$ ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`.replace(".", ",");
}

function cancelaPedido(clique) {
    document.querySelector(".modal").classList.add("escondido");
}

function fecharPedido(){
    pedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}\n\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`.replace(".", ",");
    
    url += encodeURIComponent(pedido);
    chamarRestaurante(url);

    function chamarRestaurante(url){
        const win = window.open(url, '_blank');
        win.focus();
    }
}