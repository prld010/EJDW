document.write("<h1>Funciones de busqueda</h1>")

var cadena= "Cuando cuentas cuentos cuenta cuantos cuentas porque ni no cuentas cuantos cuentos cuentas no sabras cuantos cuentos contastes"
var busqueda= cadena.indexOf("cuentos")
busqueda= cadena.lastIndexOf("cuentos")
busqueda= cadena,Match("/cuentos/gi")
console.log(busqueda);