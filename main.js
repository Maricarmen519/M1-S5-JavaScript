//Variable:. dato de mememoria en el que podemos guardar 
//valores
console.log("Hola desde elarchivomain.js");
//alert("Alerta desde el archivo main.js")
//Variable: El valor varia
//Constante: El valor es constante y no cambia

var nombre = "Carmen";
console.log(nombre)
nombre= "Otro nombre";
console.log(nombre)
//Ya no es tan necesario el ;
var apellido;
console.log(apellido)

const id= 98069;
console.log(id);
//Las constantes no se pueden modificar id= 839394;
//Manda error en la consola desde inspencción en la web
//TIPOS DE DATOS
/*1:STRING: Cadenas de caracteres
Se colocan en comillas
Para imprimir caracteres especiales es con \*/
/*2 NUMERICOS:*/
console.log("1234567")
var num1= 15;
var num2= 20.78;
console.log(num1, num2)
console.log(100/0);//Infinity= operaciones infinitas
console.log("Hola"/4)//Nan= operqaciones entre tipos de datos no númericos
//typeof indica el tipo de dato 
/*3 BOOLEANOS
Se usa en condicionales
Solo da true or false
*/
var condicion= false;
var condicion2= true;

console.log(condicion, condicion2)
/* 4 UNDEFINED
Para validar datos o verificar
Para saber si los datos tienen valor
valores no definidos
Se creauna nueva variable y no definimosalgún valor
*/
var variableNueva
console.log(variableNueva)
/* 5 NULL
Variable determnadacon un valor Null
Sirven para quitar el valor de una variable
Poner el null para borrar el valor 
*/
var variableNull= null;
console.log(variableNull)
//JavaScript será la base para todo



//COERCIÓN DE DATOS= Conversión de un tipo de dato a otro
//Forma explícita
var num= 5
console.log(typeof(num))

console.log( String(num))
console.log(typeof String(num))
//Fotma implícita
console.log(num + "")
console.log(typeof (num + ""))

//Convertir de STR a INT
//forma implicita
var numero= "150"
console.log(numero)

console.log(+numero);
console.log(typeof(+numero))

//forma explícita
console.log(Number(numero))
console.log(typeof(Number(numero)))
//*Tener cuidaddo conla conversión implicita proque si quiero hacer una suma termianria concatenando 
//y no sumando.

//DE NUMERO Y STRING A BOOLEAN
//TRUE 1 FALSE 0
var condicion4= 1;
var cndicion= " ";
console.log(condicion)
console.log(condicion4)

//Forma explícita
console.log(Boolean(condicion4))
console.log(Boolean(condicion))
//Forme implícita
console.log(!!condicion)
console.log(!!condicion4)
//OPERADORES ARITMETICOS
//SUMA
10+5
//RESTA
10-5
//MULTIPLICACIÓN
10*4
//DIVISIÓN
30/6
//EXPONENTES
3**2 //AL CUADRADO
3**4// AL CUBO
4**4// A CUARTA POTENCIA
//RESIDUO DE DIVISIONES O MODULO
10%3
//sobra 1
10%3
//sobran 2
//INCREMENTO
var nueva= 0
console.log(nueva)
console.log(nueva++)

//DECREMENTO
var nueva1= 1
console.log(nueva1)
console.log(nueva1--)
/*OPERADORES LÓGICOS
//Igualdad
var igualdad =  3
3==3 //True
3== "3"//True
//Extrictamente igual
3===3 //True
3=== "3"//False
//Diferente
3!=4//False
//Extrictamente desigual
3!=="3"//False
//Mayor que >
10 > 5//true
//Menor que <
5 < 10//true
//Mayor o igual que =>
40 >= 35 
//Menor igual a <=
5 <= 5
// OR ||
5 > 3 || 4<10 = true
//AND &&
5 > 3 && 4<10 = true
5 > 3 && 15<10 = false*/

//TRUTHY
console.log(true)//verdadero
console.log(Boolean(1))//uno
console.log(Boolean("5"))//str no vacío
console.log(Boolean([]))//arreglo vacío
console.log(Boolean({}))//objeto vacío
console.log(Boolean(function(){}))//Función vacía

//FALSY
console.log(false)//falso
console.log(Boolean(0))//cero
console.log(Boolean(""))//str  vacío
console.log(Boolean(null))//null
console.log(Boolean(undefined))//undefined
console.log(Boolean(NaN))//NaN

//CONDICIONALES IF ELSE:PERMITEN EVALUAR CONDICONES
var respuesta= 3;
if(respuesta=== 3){
    console.log("Respuesta correcta")
}else if(respuesta  === 2) {
    console.log("Casi correcta")
}
else{//Ejecuta por default al no entrar en las condiciones anteriores
    console.log("Respuesta incorrecta")

}
var respuesta= "asdas";
if(respuesta=== 3){
    console.log("Respuesta correcta")
}else if(respuesta %2 === 0) {
    console.log("La respuesta es par");
    mensaje= "Entró como par"
    alert("¡Bien hecho!")
}else if (respuesta ==2){
    console.log("¡Casi!")
}
else{//Ejecuta por default al no entrar en las condiciones anteriores
    console.log("Respuesta incorrecta")
    mensaje= "Todo mal"

}
console.log(mensaje);

//SWITCH: RECIBE ALGO A EVALUAR
var respuesta= 2;
switch(respuesta){
    case 3: 
        console.log("Respuesta correcta");
        break;//BREAK hace romper el flujo
    case 2:
        console.log("Casi!")
        break;
    default:
        console.log("Todo mal")

}

//BUCLE FOR
//Sintaxisvariable; condición, acción
for(var i=0; i<10; i++){
    console.log(i)
}
//BUCLE WHILE
var l = 0;
while(l<=10){
    console.log(l);
    l++;//ponerel incremento del while
}
//BUCLE DO WHILE
var l = 0;
do{
    console.log(l);
}
while (l !== 0);

//FUNCIONES
function miPrimeraFuncion(nombre){
    console.log("Hola, ¿Qué hongo?"+ nombre)
}
miPrimeraFuncion("Ramón")
miPrimeraFuncion(156)
miPrimeraFuncion(true)

var segundaFuncion= function(edad){
    console.log("Esta es una expresión defunción " + edad);

}
segundaFuncion(23)
//EXPRESIONES EJECUTADAS INMEDIATAMENTE
//Se usan cuando se inicializa una función o configuración en script
//Ya que se ejecuta en cuanto es declarada, no se puede hacer referencia a esta
//para volver a ejecutar
//NO ESMUY COMÚN DE USAR,PERO HAY HERREAMIENTAS QUE SE TIENEN QUE EJECUTAR AL INICIO DE MI WEB O APP
(function (nombre) {
    console.log('Hola, qué tal? ' + nombre);
})('Car')
