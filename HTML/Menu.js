document.write("<h1>Restaruante Los Alces Locos</h1>");

console.log("Bienvenido al restaurante Los Alces Locos ")

var tacos=0;
var nachos=3;
var pizza = 1;

var agua=0;
var chesco=2;
var chelish=1;

var cuenta=0;
if(tacos!=0){
    cuenta=cuenta+(tacos*10);
}
if(nachos!=0){
    cuenta=cuenta+(nachos*30);
}
if(pizza!=0){
    cuenta=cuenta+(pizza*120);
}
if(agua!=0){
    cuenta=cuenta+(agua*15);
    
}
if(chesco!=0){
    cuenta=cuenta+(chesco*30);
}
if(chelish!=0){
    cuenta=cuenta+(chelish*45);
}

console.log("Su cuenta mi estimado don guapisime es de nada mas y nada menos que (redoble) = ",cuenta, +
"\n Tacos-",tacos,"\n nachos-",nachos,"\n pizza-",pizza,"\n agua-",agua,"\n refresquish-",chesco,"\n Chelish-",chelish);
