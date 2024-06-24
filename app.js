//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10'; 

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarElemetoTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDelUsuario === numeroSecreto){
        asignarElemetoTexto('p', `Acertaste el número en : ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDelUsuario > numeroSecreto){
            asignarElemetoTexto('p', 'El número secreto es menor');
        } else{
            asignarElemetoTexto('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = parseInt(Math.random()*numeroMax)+1;

    if (listaNumerosSorteados.length == numeroMax){
        asignarElemetoTexto('p', 'se acabaron los números');

    } else{

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(){
    asignarElemetoTexto('h1', 'Juego del número secreto!');
    asignarElemetoTexto('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje del numero
    //generar el numero aleatorio
    //inicialiar la variable intentos
    condicionesIniciales();
    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
    
}
condicionesIniciales();