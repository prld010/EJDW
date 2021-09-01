var opt = prompt("Qué opción desea seleccionar?");

console.log(opt);

switch(opt){
    case "a":
        console.log("Seleccionaste la opción a)");
        break;
    case "b":
        console.log("Seleccionaste la opción b)");
        break;
    case "c":
        console.log("Seleccionaste la opción c)")
        break;
    default:
        alert("seleccionaste una opción incorrecta o que no se encuentra en el menú")
}