//Hacemos una tabla del 1 al 10 del numero que el usuario ingrese.
// let numero = parseInt(prompt("Ingrese numero"));

// for(let i=1; i <= 10; i++){ //i++ --> i= i+1
//     let resultado = numero * i
//     console.log(numero + " x " + i + " : " + resultado)
// }
//--------------------------------------------------------------------
//Lo mismo pero con while
// let i = 1;

// while(i <= 10){
//     let resultado = numero * i
//     console.log(numero + " x " + i + " : " + resultado)
//     i++; //i++ --> i= i+1
// }
//--------------------------------------------------------------------
let nombre = prompt("Ingrese nombre o SALIR para terminar")

while( nombre != "SALIR"){
    console.log("Usted ingreso" + nombre)
    nombre = prompt("Ingrese nombre o SALIR para terminar")
}