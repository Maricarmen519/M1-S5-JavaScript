/*function pares(max) {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;
        console.log(b);
    }
}

pares(12);
pares(3);
pares(100);*/
//Modificacion ejercicio guiado
/*function pares(max) {
    //max es 12
    for (var i = 2; i <= max; i=i+2) {
        console.log(i);
    }
}

pares(12);//Del 6 hasta el 24*/
//USAR MODULO O RESIDUO
//Modulo = 0 es multiplo del segundo
/*function pares(max) {
    //max es 12
    for (var i = 1; i <= max; i++) {
        if (i% 2== 0){//Si no se pne las llaves solo toam aen el if la siguiente línea que se encuntra
            console.log(i);
        }
    }
}
pares(12);//Del 6 hasta el 24*/
//DENTRO DE FUNCIONES PUEDO EJECUTAR OTRASFUCNIONES
function esPar(num){
    if (num % 2 == 0){
        //return num + "Es un número par";
        console.log(num + " " + "Es un número par")
    }
    else{
        //return num + "No es un número par";
        console.log(num + " " + "No es un número par")
    }
}
esPar(5)
//Console.log imprie un mensaje
//retur indica que una función regresará un valor

//EJERCICIO INDIVIDUAL
function nombreC(nombre, apellido){
    alert (nombre + " " + apellido)
}
nombreC("Carmen" , "Morales")

//EJERCICIO INDIVIDUAL 2

function permisodeConducir(nombre, edad){
    if (edad >= 18){
        console.log(nombre + "," + " " + edad + "." + " "+ nombre + ":"+ " " + "Felicidades, puedes solicitar un permiso de conducir.")
    }
    else {
        console.log(nombre + "," + " " + edad + "." + " "+ nombre +  ":"+ " " + "No puedes solicitar permiso de conducir por ser menor de edad.")
    }
}
permisodeConducir("Carmen", 23)
permisodeConducir("Gabriel", 15)

//EJERCICIO EN GRUPOS
//var materias= mate + espanol+ ciencias+ informatica + psicologia;
function calificacion(mate, espanol, ciencias, informatica, psicologia) {
    var promedio = mate + espanol + ciencias + informatica + psicologia
    promedio= promedio/5;
    if (promedio >= 70 ){
        console.log(promedio +":" + mate + ","+ " "+ espanol + ","+ " "+ ciencias + ","+ " "+ informatica + ","+ " "+ psicologia + "//" + " " + "Aprobado:" + " " +promedio)
    }
    else{
    console.log(promedio +":" + mate + ","+ " "+ espanol + ","+ " "+ ciencias + ","+ " "+ informatica + ","+ " "+ psicologia + "//" + " " + "No aprobado:" + " " +promedio)
    }
}
calificacion(100,90,60,50, 100)
calificacion(70,60,50,50,70)
