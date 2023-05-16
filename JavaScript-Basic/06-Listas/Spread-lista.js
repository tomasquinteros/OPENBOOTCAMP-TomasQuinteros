// .concat() ==> Concatenar dos listas
let lista = ["Hola", -1, 20, true, undefined];
let lista2 = ["Chau", 1, -20, false, undefined];
console.log(lista.concat(lista2)); // ==> NO MODIFICA EL ARRAY 1

// ... ==> Unir con el factor de propagacion || SPREAD
let lista3 = [...lista, ...lista2];
console.log(lista3);