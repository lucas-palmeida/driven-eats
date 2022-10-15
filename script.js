document.querySelector("button").disabled = true;

let nomePrato = null;
let precoPrato = null;

function selecionaPrato(clique){
    
    const selecaoAnterior = document.querySelector("#pratos > .selecionado");

    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
    }

    clique.classList.add("selecionado");
    nomePrato = document.querySelector("#pratos > .selecionado > h3").innerHTML;
    precoPrato = parseFloat(document.querySelector("#pratos > .selecionado span").innerHTML.replace(",", "."));
}

let nomeBebida = null;
let precoBebida = null

function selecionaBebida(clique){
    const selecaoAnterior = document.querySelector("#bebidas > .selecionado");

    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
    }

    clique.classList.add("selecionado");
    nomeBebida = document.querySelector("#bebidas > .selecionado > h3").innerHTML;
    precoBebida = parseFloat(document.querySelector("#bebidas > .selecionado span").innerHTML.replace(",", "."));
}

let nomeSobremesa = null;
let precoSobremesa = null;

function selecionaSobremesa(clique){
    const selecaoAnterior = document.querySelector("#sobremesas > .selecionado");

    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
    }

    clique.classList.add("selecionado");
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

function fecharPedido(){
    pedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}`;
    
    url += encodeURIComponent(pedido);
    chamarRestaurante(url);

    function chamarRestaurante(url){
        const win = window.open(url, '_blank');
        win.focus();
    }
}