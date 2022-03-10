//console.log('Hola mundo');

//Mi primera variable
let miPrimeraVaeiable = "mi primera variable";
//console.log(miPrimeraVaeiable);

//mutabilidad (reasignacioón de variables)
miPrimeraVaeiable = "Esto ha cambiado";
//console.log(miPrimeraVaeiable);

//boleanos
let miBoolean =  true;
let miBoolean2 = false;

//numeros
let numero1 = 0;
let numero2 = 12;
let numero3 = -25;

//console.log(numero1, numero2, numero3, miBoolean, miBoolean2);

//Variable indefinida
let undef
//console.log(undef);

//Valor nlo
let nulo = null;
//console.log(nulo);

//Objeto vacío
const miPrimerObjeto = {}

//Objeto 
const miObjeto = {
    numero: 12,
    string: "cadena de caracteres",
    condicio:  true,
}

//console.log(miObjeto.numero);

const arregloVacio = [];
//const arreglo = [1, 20, "hola"," mundo", miObjeto];

//console.log(arregloVacio, arreglo);

const arreglo = [1, 20, "hola"," mundo", miObjeto];
arreglo.push(5);

arregloVacio.push(5);
arregloVacio.push("hola");
arregloVacio.push(25);
arregloVacio.push(miPrimeraVaeiable);
//console.log(arregloVacio);

/* const suma = 1 + 8;
const resta = 5-3;
const mult = 9*3;
const div = 6/2;
const modulo = 10%3; */
//console.log(suma, resta, mult, div, modulo);

let num = 5;
num +=3;
num -=3;
num *=3;
num /=5;
//console.log(num);

//Operadores de comparación
//Igualdad estricta
const resultado = 5 === 5;
//Igualdad no estricta
const resultado2 = 528 == '528';

const resultado3 = 5 < 6;
const resultado4 = 5 < 5;
const resultado5 = 5 > 6;
const resultado6 = 5 > 4;
const resultado7 = 5 >= 6;
const resultado8 = 5 <= 5;

const resultado11 = 5 !== 6;
const resultado12 = 5 != "5";
//console.log(resultado11, resultado12);

//Operadores lógicos or||, and &&, not !
const resultadoOr = false || false || 0 || "hola";
const resultadoAnd = true && false;
const resultadoNot = !true;
//console.log(resultadoOr);

//Control de flujo if
 const edad = 20;
/* if( edad > 5 && edad < 18){
    console.log("puede entrar al juego")
}else{
    console.log("El niño no puede jugar")
};  */

//contorl de flujo wile
/* let x = 0
while(x < 5){
console.log(x);
x++
}
console.log("terminado el loop"); */

//Control de flujo switch
/* let y = 3;
switch(y){
    case 1 : {
        console.log("yo soy el caso uno")
        break;
    }
    case 2 : {
        console.log("yo soy el caso dos")
        break;
    }
    case 3 : {
        console.log("yo soy el caso tres")
        break;
    }
    default: 
    console.log("No hay casos")
    break;
} */

//Arreglo
/* const numeros = [1, 2, "hola", 4, 5]
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
} */

/* function iterar(arg1) {
for(let i=0; i<arg1.length; i++){
    console.log(arg1[i]);
} 
}

const numeros = [1, 2, "hola", 4, 5]
const nombres = ["Pedro", "Juan", "Itzel", "May", "Ceci"]
iterar(numeros);
iterar(nombres); */

/* function suma(a, b) {
return a + b;
}

const resultadoSuma1 = suma(2, 3);
const resultadoSuma2 = suma(5, 8);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);

console.log("El resultado de la suma es: " + resultadoSuma3); */

function sumar (a, b, cb){
    const r = a + b;
    cb(r)
}

function callback(result){
    console.log("resultado ",  result);
}

//sumar(2, 3, callback);

const miFactArrowFaction = (a, b) => a + b;
const r = miFactArrowFaction(1, 2);
console.log(r);

const otraFAF = (a,b) => {
    return a + b;
}
const rFAF = otraFAF(3, 7);
console.log(rFAF);