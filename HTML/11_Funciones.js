document.write("<h1>Funciones</h1>")
//Cuando no recibe parametros y puede o no devolver valor
function saludar(){
 return document.write("Hola a todo");
}

//saludar();

//Funcion con parametros de entrada
function concatena_el_nombre(nombre,apellido,apellidom){
     var nombrecomple=nombre+ apellido + apellidom;
    return nombrecomple ;

}
concatena_el_nombre("MIGUE0", "GONZALES","TINOCO");