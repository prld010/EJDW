
// LEt y var la diferencia es el alcance y como actuan
document.write("<h1>Diferencias entre let y var</h1>");
let var1 = "México";
let var2 = "Ámerica";

// el uso de var la profundida es mayor y pued cambiar valores de variables local o sub fragmentos
var numero = 40;
console.log(numero);

if(true){//para entrar en fragmento de codigo distinto al global
    let numero = 69;
    console.log(numero);
}
console.log(numero);//
/*
//let 
let numero = 40;
console.log(numero);
if(true){//para entrar en fragmento de codigo distinto al global
    let numero = 69;
    console.log(numero);
}
console.log(numero);//???*/