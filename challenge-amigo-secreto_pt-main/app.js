//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let i = 0;

function adicionarAmigo(){
    let adicionar = document.querySelector("input").value;
    if(adicionar == " "){
        alert("Adicionar um nome valido");
    }else{
        if(listaDeNomes.includes(adicionar)){
            alert("Esse nome ja foi registrado")
        }else{
            listaDeNomes.push(adicionar);
        }
        atualizarLista();
    }
    limparCampo();
}

function sortearAmigo(){
    if(listaDeNomes.length<2){
        alert("Adicione mais um nome")
    }else{
        let numeroSorteado = parseInt(Math.random() * listaDeNomes.length);
        let nomeEscolhido = listaDeNomes[numeroSorteado];
        let campo = document.getElementById("resultado");
        campo.innerHTML = "O amigo secreto sorteado é: " + nomeEscolhido;
    }
}

function atualizarLista(){
    for(i;i<listaDeNomes.length;i++){
        let item = document.createElement("li");
        item.innerText = listaDeNomes[i];    
        document.getElementById("listaAmigos").append(item);
    }
}

function limparCampo(){
    adicionar = document.querySelector("input");
    adicionar.value = " ";
}