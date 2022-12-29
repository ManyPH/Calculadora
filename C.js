//Variables
let operacion;
let numero1;
let numero2;
let numeroanterior = 0;
//Obtencion del numero
C.onclick = function(e){
    reset();
};
igual.onclick = function(e){
    Resultado();
};
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
};
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
};
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
};
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
};
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
};
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
};
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
};
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
};
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
};
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
};
suma.onclick =function(e){
    operacion = "+";
    Obtencion();
};
resta.onclick = function(e){
    operacion = "-";
    Obtencion();
};
multi.onclick = function(e){
    operacion = "*";
    Obtencion();
};
division.onclick = function(e){
    operacion = "/";
    Obtencion();
}

//Operaciones
function reset(){
    resultado.textContent= "";
    numero1=0;
    numero2=0;
    operacion="";
}

function Obtencion(){
        if(numero1===numeroanterior){
            console.log(numero1);
        }
        else{
            numero1=resultado.textContent;
            numeroanterior=numero1;
            resultado.textContent="";
        }
}

function Resultado(){
    numero2=resultado.textContent;
    console.log(numero2);
    resultado.textContent = Operacion();
    console.log(Operacion());
}

function Operacion(){
    return new Function('return '+ numero1 + operacion + numero2)();
}



