document.write("<h1>Callbacks</h1>");

var a= 3; 
var b= 3;

function Sumar(a, b, callback){
    return callback(a+b);
}
    Sumar(a, b, function(r){
        console.log('El resultado es ' + r);
    })
