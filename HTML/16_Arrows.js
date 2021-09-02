document.write("<h1>ARRAYS FUCTIONS</h1>")
//Funciones de tipo de flecha

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));


var calcular = (dato1,dato2) =>dato1+dato2;
console.log(calcular(10,15));

var validar= ()=>{
    return "validacion completa";
}
console.log(validar())