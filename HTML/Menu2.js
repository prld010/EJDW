var tacos=0;
var nachos=0;
var pizza = 0;

var agua=0;
var chesco=0;
var chelish=0;

var rtacos=10;
var rnachos=20;
var rpizza = 3;

var ragua=20;
var rchesco=4;
var rchelish=30;

var respuesta='0';
do{
respuesta=prompt("Escoje un alimento cantidad\n"+"1--Tacos---------"+rtacos+"\n2--nachos---------"+rnachos+"\n3--pizza---------"+rpizza+"\n4--Pasar a la bebida");
switch(respuesta){
    case "1":
        if(rtacos>0){
        tacos=prompt("Cuantos  quiere?")
        tacos=parseInt(tacos);
        rtacos-=tacos;
        }else{
            alert("No hay mas taco homs")
        }
    break;
    case '2':
        if(rnachos>0){
            nachos=prompt("Cuantos  quiere?")
            nachos=parseInt(nachos)
            rnachos-=nachos;
            }else{
                alert("No hay mas nacho homs")
            }
    break;
    case '3':
        if(rpizza>0){
            pizza=prompt("Cuantos  quiere?")
            pizza=parseInt(pizza)
            rpizza-=pizza;
            }else{
                alert("No hay mas pizza homs")
            }
    break;
    case '4':
            alert("Ahora vamos con la bebida homs")

    break;
    default:
            break;
}
}while(respuesta!='4')
respuesta='0';
do{
    respuesta=prompt("Escoje una bebida cantidad\n"+"1--agua-----------"+ragua+"\n2--soda------------"+rchesco+"\n3--chelish--------"+rchelish+"\n4--Terminar el pedidignho");
    switch(respuesta){
        case'1':
            if(ragua>0){
            agua=prompt("Cuantos  quiere?")
            agua=parseInt(agua)
            ragua-=agua;
            }else{
                alert("No hay mas agua homs")
            }
        break;
        case '2':
            if(rchesco>0){
                chesco=prompt("Cuantos  quiere?")
                chesco=parseInt(chesco)
                rchesco-=chesco;
                }else{
                    alert("No hay mas soda homs")
                }
        break;
        case '3':
            if(rchelish>0){
                chelish=prompt("Cuantos  quiere?")
                chelish=parseInt(chelish)
                rchelish-=chelish;
                }else{
                    alert("No hay mas chelish homs :( ")
                }
                break;
        case '4':
                alert("Enseguida le traemos su pedido homs")
    
        break;
        default:
                break;
    }
    }while(respuesta!='4')


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

document.write("<h1>Su cuenta mi estimado don guapisime es de nada mas y nada menos que (redoble) = $"+
cuenta,"</h1></br> Tacos-",tacos,"</br> nachos-",nachos,"</br> pizza-",pizza,"</br> agua-",agua,"</br> refresquish-"+
chesco,"</br> Chelish-",chelish);