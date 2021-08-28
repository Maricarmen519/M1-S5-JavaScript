function pares(max) {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;
        console.log(b);
    }
}

pares(12);
pares(3);
pares(100);


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