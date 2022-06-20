var numeroWrapper = document.getElementById("resultado");
var numeroAtual = 0;

function somar(){
    numeroAtual = numeroAtual + 1; 
    numeroWrapper.innerHTML = numeroAtual;
}

function subtrair(){
    numeroAtual = numeroAtual - 1;
    numeroWrapper.innerHTML = numeroAtual;
}