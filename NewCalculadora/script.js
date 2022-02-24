let checkResultado = false;

function insert(numero) {
    let numeroTela = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeroTela + numero;

    console.log(checkResultado);

    if(checkResultado){
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('resultado').innerHTML = numeroTela + numero;
        checkResultado = false;
    }

}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function voltar() {
    let volta = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = volta.substring(0, volta.length -1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        checkResultado = true;
    } else {
       document.getElementById('resultado').innerHTML = '...';
    }

}