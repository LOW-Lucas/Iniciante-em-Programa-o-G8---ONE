let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function botaoConsole(){
    console.log("O botão foi clicado");
}

function botaoAlerta(){
    alert("Eu amo JS");
}

function botaoPrompt(){
    let cidade = prompt("digite um nome de uma cidade do Brasil");
    alert("Estive em " + cidade + " e lembrei de você");
}

function botaoSoma(){
    let primeiroNumero = parseInt(prompt("Digite o primeiro numero"));
    let segundoNumero = parseInt(prompt("Digite o segundo numero"));
    let soma = primeiroNumero + segundoNumero;
    alert("O resultado da soma é: "+soma);
}