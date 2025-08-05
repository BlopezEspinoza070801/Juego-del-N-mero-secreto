let intento=0;
let numerosecreto=0;
let listaNumerosSorteados=[];
let numeroMaximo=10
function asignarTextoElemento(elemento,texto){
  let elementoHTML=document.querySelector(elemento);
  elementoHTML.innerHTML=texto;
  return;  
}

function verificarintento(){
    let numerodeusuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(intento)
    if (numerodeusuario===numerosecreto){
        asignarTextoElemento('p',`Accertaste el número en ${intento} ${(intento===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numerodeusuario>numerosecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intento++;
        limpiarcaja()
    }

    return;
}

function limpiarcaja(){
 document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesiniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del uno al ${numeroMaximo}`);
    numerosecreto=generarNumeroSecreto();
    intento=1;
    document.getElementById('reiniciar').setAttribute('disabled','True');
}

function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales();

}
condicionesiniciales();

