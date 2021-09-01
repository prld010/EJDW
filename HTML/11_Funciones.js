document.write("<h1>Funciones</h1>")
//Cuando no recibe parametros y puede o no devolver valor

function porConsola(num1,num2){
console.log("Se presentan resultados en consola")
console.log("<p>",num1+num2, "</p>")
console.log("<p>",num1-num2, "</p>")
console.log("<p>",num1*num2, "</p>")
}

function saludar(){
 return document.write("Hola a todo");
}

//saludar();

//Funcion con parametros de entrada
function concatena_el_nombre(nombre,apellido,apellidom){
     var nombrecomple=nombre+ apellido + apellidom;
    return nombrecomple ;

}
concatena_el_nombre("MIGUE", "GONZALES","TINOCO");

