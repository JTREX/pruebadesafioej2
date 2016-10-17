var suma = 0;

do {
    var ingreso = prompt("ingresa un número");
    var sumando = parseInt(ingreso);
if(!isNaN(sumando)){
    suma = sumando + suma}}
while (ingreso != "fin");
console.log(suma);
document.write("La suma es :  <strong>" + suma + "</strong>");
