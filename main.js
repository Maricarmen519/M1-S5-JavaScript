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
