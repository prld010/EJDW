document.write("<h1>Funciones</h1>")
//Cuando no recibe parametros y puede o no devolver valor

// Cuando no reciben parámetros de entrada
function saludar() {
    return document.write("<p>Hola a todos</p>");
}
//saludar();

// funcion con parametros de entrada
function concatena_el_nombre(nombre, apellidoP, apellidoM) {
    var nombreC = nombre + apellidoP + apellidoM;
    document.write(nombreC);
    return "nombreC";

}

/*var nombrecompletop = concatena_el_nombre("Miguel", "gómez", "díaz");
console.log(nombrecompletop)*/

// Funcion con parametros opcionales
function calculadora(num1, num2, mostrar = true) {
    //Solo imprimirá en consola los valores calculados
    if (mostrar == true) {
        console.log("Se presentan resultados en la consola");
        console.log(num1 + num2);
        console.log(num1 - num2);
        console.log(num1 * num2);
        console.log(num1 / num2);
    } else {
        console.log("Se presentan resultados en el documento");
        document.write("<p>",num1 + num2,"</p>");
        document.write("<p>",num1 - num2,"</p>");
        document.write("<p>",num1 * num2,"</p>");
        document.write("<p>",num1 / num2,"</p>");
    }

}
