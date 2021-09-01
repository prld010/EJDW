document.write("<h1>Condicionales</h1>")
/*
var num1 = 10;
var num2 = 15;
if (num1>num2){
    console.log("num1 es mayor que num2")
} else{
    console.log("num2 es mayor que num1")
}
// Operadores <,>,==, <=, >=,!, !=
// compuestoa &&, ||, !
var logica = true;
logica = false;
if(logica){
    console.log("invertimos el valor de la variable, ya no es true")
}*/

var edad = 33;

if(edad <=18 && edad >=12){
    console.log("Se aprobaron las vacunas para personas de tu edad");
}
else if(edad >= 18){
    console.log(" perdiste tu oprtunidad para vacunarte");
}else{
    console.log("Debes esperar a que la variante delta ataque más feo");
}
