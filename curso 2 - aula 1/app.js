//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um Número entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");
}

exibirMensagemInicial();
console.log(numeroAleatorio);

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(numeroAleatorio == chute){
        exibirTextoNaTela("h1", "Você acertou!!!");
        let mensagemCorrecao = tentativas == 1 ? " tentativa" : "tentativas";
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' + mensagemCorrecao;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroAleatorio > chute){
            exibirTextoNaTela("h1", "Você Errou!!!");
            exibirTextoNaTela("p", "O número é maior");
        }else{
            exibirTextoNaTela("h1", "Você Errou!!!");
            exibirTextoNaTela("p", "O número é menor");
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosDaLista == numeroMaximo){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}
function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}