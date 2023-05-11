// Lista, array, arreglos => conjunto de datos puesto en orden
const array = [1, "string", true, undefined, null] // => puede tener cualquier tipo de datos, ya sean primitivos como objetos o listas. Son mutables
const array2 = new Array("1", 2, true, undefined);
console.log(array[2], array2[1]);
// Objetos => Representa datos con sus propiedades.
const movil = {
 anchura: 10,
 marca: "iPhone",
 altura: 20
} // => al igual que los arrays puede tener cualquier dato. Son mutables
console.log(movil.altura);

// Fechas
const ahora = new Date(); // Forma normal
const fecha_milis = new Date(10); //Accedemos a otro tiempo
const fecha_string = new Date("March 15 2023") 
 //Acceder a dia, año, mes, hora, segundo, milisegunda se utiliza la misma forma con getDate;

const dia = ahora.getDate()
const mes = ahora.getMonth();
const año = ahora.getFullYear();
const seconds = ahora.getSeconds(); 