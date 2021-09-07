document.write("<h1>Callbacks</h1>");

var a= 3; 
var b= 3;

function Sumar(a, b, callback){
    return callback(a+b);
}
    Sumar(a, b, function(r){
        console.log('El resultado es ' + r);
    })

    document.write("<h1>Callbacks</h1>")
/* Un función puede recibir parametros de distintos tipos, arreglos, objetos,etc, tambien 
puede recibir funciones con parametros, así mismo procesos asincronos"
*/


function calculadora(num1, num2,sumaShow,sumaMultiplo) {
    var suma= num1+num2;
    var resta = num1-num2;

    sumaShow(suma);
    sumaMultiplo(suma);

    return suma;
}

calculadora(5,2,function(dato) {
    console.log("suma = ",dato); //Logicas nuevas
},
function (dato) {
    console.log("suma multiplo =",dato*2)
}
)