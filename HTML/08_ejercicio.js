'use strict'
var optPlatillo = "";
var optBebida = "";
var cantPlatillo = 0;
var cantBebida = 0;

optPlatillo = prompt("Menu de Platillos\n Seleccione la opción de su agrado: \n1. Hamburguesa de res ($40) \n2. Hotdog ($30)\n3.Papas fritas ($25 orden)");
cantPlatillo = prompt("Cuantas ordenes de este platillo requiere");
cantPlatillo = parseInt(cantPlatillo);

/* optBebida = prompt("Menu de bebidas\n Seleccione la opción de su agrado: \n1. Agua Natural ($20) \n2. Soda ($30)\n3. Cerveza ($45)");
cantBebida = prompt("Cuantas ordenes de este bebida requiere");
cantBebida = parseInt(cantBebida); */

var totalComida = 0;
switch (optPlatillo) {
    case "1":
        //Hamburguesa 40
        totalComida += 40*cantPlatillo;
        break;
    case "2":
        //Hotdog 30
        totalComida += 30*cantPlatillo;
        break;
    case "3":
        //Papas fritas 25
        totalComida += 25*cantPlatillo;
        break;

    default:
        alert("Usted ha seleccionado una opción incorrecta, recargue la web para volver a elegir")
        break;    
}

alert("Usted tiene que pagar $" + totalComida);
