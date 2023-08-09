const prompt = require("prompt-sync")({ sigint: true })
const ArrayPersonas=[];
const addDataPerson = (nombre,apellido,edad,status) =>{
    let persona = {
        nombre,
        apellido,
        edad,
        status,
    }
    ArrayPersonas.push(persona);
}
for (let i=1; i<=3 ; i++){
    let nombre= prompt("Ingrese su nombre: ");
    let apellido=prompt("Ingrese su apellido: ");
    let edad=prompt("Ingrese su edad: ");
    let status=prompt("Ingrese su status: ");
    addDataPerson(nombre,apellido,edad,status);
}
console.table(ArrayPersonas);

/**
 * Datos para evitar el ingreso por input
 * 
 * addDataPerson("Carlos","Perez",50,1);
 */

const promedio = () => {
    let suma=0;
    ArrayPersonas.forEach( (element) => {
        suma = suma + element.edad;
    });
    let promedio = suma / ArrayPersonas.length;
}
promedio();

let busca = prompt("Ingrese la/s letra/s por las que desea filtrar los resultados: ");
arrayFiltrado = ArrayPersonas.filter((element)=>{
    if((element.nombre).includes(busca) || (element.apellido).includes(busca)){
        return element;
    }
});
console.table(arrayFiltrado);