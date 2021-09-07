document.write("Parámetros SPREAD-REST");

// SPREAD nos permite recibir n-valores sin la necesidad de agregar n-parametros

function listadoPaises(pais1,...paisn) {
    console.log("País: ", pais1);
    //console.log("País: ", pais2);
    console.log('País: ', paisn)
}

//listadoPaises("México","colombia", "Italia","Perú","Haiti");

var paises = ["Suiza", "Praga", "Holanda"];
listadoPaises(paises,"España","Alemania");
listadoPaises(...paises,"España","Alemania")