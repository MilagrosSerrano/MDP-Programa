const prompt = require("prompt-sync")({ sigint: true })
let mayor = -999999;
let menor = 999999;
let n1 = prompt("Ingrese el primer número: ");
let n2 = prompt("Ingrese el segundo número: ");
let n3 = prompt("Ingrese el tercer número: ");
if ((n1 == n2) || (n2 == n3) || (n1 == n3)) {
    if (n1 == n2) {
        console.log("El número uno es igual al número dos");
    }
    if (n1 == n3) {
        console.log("El número uno es igual al número tres");
    }
    if (n2 == n3) {
        console.log("El número dos es igual al número tres");
    }
}
else{
    if(n1==n2==n3){
        console.log("Los números son todos iguales"); 
    }
}
if (n1 > n2) {
  if (n1 > n3) {
    console.log("El mayor número ingresado es: ", n1);
    }
}
else {
 if (n2 > n3) {
     console.log("El mayor número ingresado es: ", n2);
}
 else {
     console.log("El mayor número ingresado es: ", n3);
}
}

if ((n1 <= n2) && (n1 <= n3)) {
    console.log("El menor número ingresado es: ", n1);
}
else {
    if ((n2 <= n1) && (n2 <= n3)) {
        console.log("El menor número ingresado es: ", n2);
    }
    else {
        console.log("El menor número ingresado es: ", n3);
    }
}

let num = prompt("Ingrese un número para ver su tabla de multiplicar: ");
for (let i = 1; i <= 10; i++) {
    result = num * i;
    console.log(num, "X", i, "=", result);
}

let div = prompt("Ingrese un número para ver su tabla de dividir: ");
for (let i = 10; i >= 1; i--) {
    result1 = div * i;
    result2 = result1 / div;
    console.log(result1, "/", div, "=", result2);
}
