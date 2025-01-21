alert("Boas vindas ao jogo do número secreto!");

let dificuldade = prompt("Escolha a dificuldade: 1(facil), 2(medio), 3(dificil)");
let chute;
let tentativas = 1;
let quantidadeDeCasas;

if(dificuldade == 1){
    quantidadeDeCasas = 10;
    let numeroSecreto = parseInt(Math.random() * quantidadeDeCasas);
    while(numeroSecreto != chute){
        console.log(numeroSecreto);
        chute =  prompt("Escolha um número entre 0 e " + quantidadeDeCasas);
        //se o chute for igual ao numero secreto
        if (numeroSecreto == chute) {
            break;
        }else{
            if (numeroSecreto > chute){
                alert("Você Errou 😔, o numero secreto é maior que " + chute);
            }else{
                alert("Você Errou 😔, o numero secreto é menor que " + chute);
            }
        }
        tentativas ++;   
    }
}if(dificuldade == 2) {
    quantidadeDeCasas = 100;
    let numeroSecreto = parseInt(Math.random() * quantidadeDeCasas);
    while(numeroSecreto != chute){
        console.log(numeroSecreto);
        chute =  prompt("Escolha um número entre 0 e " + quantidadeDeCasas);
        //se o chute for igual ao numero secreto
        if (numeroSecreto == chute) {
            break;
        }else{
            if (numeroSecreto > chute){
                alert("Você Errou 😔, o numero secreto é maior que " + chute);
            }else{
                alert("Você Errou 😔, o numero secreto é menor que " + chute);
            }
        }
        tentativas ++;   
    }
}if(dificuldade == 3){
    quantidadeDeCasas = 1000;
    let numeroSecreto = parseInt(Math.random() * quantidadeDeCasas);
    while(numeroSecreto != chute){
        console.log(numeroSecreto);
        chute =  prompt("Escolha um número entre 0 e " + quantidadeDeCasas);
        //se o chute for igual ao numero secreto
        if (numeroSecreto == chute) {
            break;
        }else{
            if (numeroSecreto > chute){
                alert("Você Errou 😔, o numero secreto é maior que " + chute);
            }else{
                alert("Você Errou 😔, o numero secreto é menor que " + chute);
            }
        }
        tentativas ++;   
    }
}
let palavtentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Você descobriu o número secreto: ${numeroSecreto} com apenas ${tentativas} ${palavtentativa}`);


