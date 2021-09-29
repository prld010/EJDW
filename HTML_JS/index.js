document.write("<h1>SERIE FUBOnoseque</h1>");
txt1= parseInt(document.getElementById("txt").value);
 var a=0;
 var b=1;
 var aux=0;
document.write(a," ",b)

 for (var i=3;i<=parseInt(txt1);i++){
  aux=a;
  a=b+a;
  b=aux;
 document.write( " ", a )
  
}
