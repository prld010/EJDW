document.write("<h1>AFunciones con texto</h1>")

var num=70;
var bienvenida="Bienvenidos"
var participántes="todos los ingenieros de sistemas"

var cadena= num.toString();
console.log(num);
console.log(cadena);
var mayuscu=bienvenida.toUpperCase();//Convierte a mayusculas 
console.log(mayuscu);
var minuscu=bienvenida.toLowerCase();//Convierte a minusculas
console.log(minuscu);

//Logitud de un texto
console.log(participántes.length);
//Concatenar
textototal=bienvenida.concat(""+participántes)
console.log(textototal);