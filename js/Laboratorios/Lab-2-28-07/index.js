const prompt = require("prompt-sync")({ sigint: true })
const ArrayPersonas=[];
const addDataPerson = (nombre,apellido,edad,status,insert) =>{
    let persona = {
        nombre,
        apellido,
        edad,
        status,
        insert,
    }
    if(insert=="1"){
        ArrayPersonas.push(persona);
    }
    else if(insert=="2"){
        ArrayPersonas.unshift(persona);
    }
}
let cant = prompt("Ingrese la cantidad de personas que va a ingresar: ");
for (let i=1; i<=cant ; i++){
    let nombre= prompt("Ingrese su nombre: ");
    let apellido=prompt("Ingrese su apellido: ");
    let edad=prompt("Ingrese su edad: ");
    let status=prompt("Ingrese su status: ");
    let insert=prompt("Ingrese 1 si quiere colocar sus datos al comienzo, 2 si desea ingresarlos al final: ");
    addDataPerson(nombre,apellido,edad,status,insert);
}
console.table(ArrayPersonas);