document.write("<h1>Funciones anidadas</h1>");

function porConsola(num1,num2) {
    console.log("Se presentan resultados en la consola");
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}
function porHTML(num1,num2) {
    console.log("Se presentan resultados en el documento");
    document.write("<p>",num1 + num2,"</p>");
    document.write("<p>",num1 - num2,"</p>");
    document.write("<p>",num1 * num2,"</p>");
    document.write("<p>",num1 / num2,"</p>");
}

function calculadora(num1, num2, mostrar = true) {
    //Solo imprimirá en consola los valores calculados
    if (mostrar == true) {
        porConsola(num1,num2);
    } else {
        porHTML(num1,num2);
    }

}

calculadora(3,5,false);