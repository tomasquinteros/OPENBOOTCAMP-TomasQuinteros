// Se utiliza para ver si algun valor cumpla una condicion
const array = [1, 22, 5, 22, 4, -11,55];
const res = array.some(element => element === -11);
console.log(res);

// Obetner una lista a partir de un objeto iterable ==> strings
const str = "Hola soy tomás";
const arr_str = Array.from(str)
console.log(arr_str);

////////////////////////////////////////////////////////////////////////////////////

// .split() se utiliza para crear array mediante una cadena de caracteres donde le pasamos cual es el separador.
const array_palabras = str.split(" ");
console.log(array_palabras);