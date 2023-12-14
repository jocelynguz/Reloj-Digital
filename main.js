// comentarios
//''
//alert('Hola mundo desde una alerta en java scrip')

// consola
//console.log('Hola desde la consola');

//declaracion de variable
//let nombre = "Jocelyn";

//concatenar texto y variable
//console.log("Me llamo: ",nombre);

//variables no pueden ser palabras reservadas

//al nombrarlas uasremos un nombre que te de idea de lo que estas almacenando
//constante
//const pi = 3.14116;

//tipos de datos
//numerico
//let edad = 24;
//cadena de texto
//let cantidad  = "100";
//cadena de texto
//let saludo = "Hola";
//Booleanos. 2valore
//let activo = true;

//operadores aritmeticos
//suma + 
//resta -
//multiplicacion *
//Divicion /
//modulo o residuo %
//incremento ++
//decremento --

//operadores relacionales
//mayor y menor que < >
//mayor o igual >=
//menor o igual <=
//igual que == si ponemos solo uno es ue estas asignando un valor
//diferente de !=

//Operoadores logicos 
//y &&
//or ||
//not !


//relog 
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);