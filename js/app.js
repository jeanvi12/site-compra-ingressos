function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeSolicitada = parseInt(document.getElementById('qtd').value);

    if (quantidadeSolicitada <= 0) {
        alert('Quantidade inválida. Por favor, insira um número maior que zero.');
        return;

    } else if (tipoDeIngresso == 'pista') {
        comprarPista(quantidadeSolicitada)

    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidadeSolicitada)
    } else {
        comprarInferior(quantidadeSolicitada)
    }

}



// Funções para compra de ingressos
function comprarPista(quantidadeSolicitada) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeSolicitada > qtdPista) {
        alert('Quantidade indisponível para tipo de ingresso Pista');
    } else {
        qtdPista = qtdPista - quantidadeSolicitada;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');

    }
}

function comprarSuperior(quantidadeSolicitada) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidadeSolicitada > qtdSuperior) {
        alert('Quantidade indisponível para tipo de ingresso Cadeira Superior');
    } else {
        qtdSuperior = qtdSuperior - quantidadeSolicitada;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');

    }
}

function comprarInferior(quantidadeSolicitada) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeSolicitada > qtdInferior) {
        alert('Quantidade indisponível para tipo de ingresso Cadeira Inferior');
    } else {
        qtdInferior = qtdInferior - quantidadeSolicitada;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');

    }
}


