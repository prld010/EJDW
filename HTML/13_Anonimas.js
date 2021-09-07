document.write("<h1> Funciones Anonimas</>");

(
    //Funcion anonima #1
    function(){
        var mensaje = "¿Qué hay de nuevo viejo?"
        console.log(mensaje);

    }
)()

var mensaje = function(){
    return "hola";
}

var peliculaEspanol = function(nombre){
    return "la pelicula que seleccionaste es:"+nombre;
}

var pelicula = function(nombre, agno){
    return "la pelicula que seleccionaste es:"+nombre;
}
pelicul("Harry Potter - El prisionero de Azkaban");