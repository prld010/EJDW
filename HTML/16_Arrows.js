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


// una funcion de tipo flecha mejora la sintaxis de las funciones anonimas

function calculadora(num1, num2, sumaShow, sumaMultiplo) {
    var suma = num1 + num2;
    var resta = num1 - num2;

    sumaShow(suma);
    sumaMultiplo(suma);

    return suma;
}

/* calculadora(5, 2, dato => {
    console.log("suma = ", dato); //Logicas nuevas
},
    dato => {
        console.log("suma multiplo =", dato * 2)
    }
) */

/////////////////////////////////////EJEMPLOS//////////////////////////////////////////

var sumar = cantidad => cantidad+10;
console.log(sumar(0));

var saludar = nombre => "Hola" + nombre;
console.log(saludar("Anairam"))

var calcular = (dato1,dato2) => dato1+dato2;
console.log(calcular(10,-15));

var validar = ()=>{
    return "validacion completa";
}
console.log(validar())