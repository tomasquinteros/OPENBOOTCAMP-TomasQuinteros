const text_long = "Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original.";

//.match => Para encontrar todas las instancias debemos utilizar /g

console.log(text_long.match(/soy/g)); // ==> lo devuelve como un array

// .includes ==> Se usa para saber si contiene la palabra
console.log(text_long.includes("es")); // ==> Devuelve false o true

// .startsWith => si la cadena arranca con la palabra que buscamos
console.log(text_long.startsWith("Un")) // ==> Devuelve false o true
// .endsWith => si la cadena termina con la palabra que nosotros buscamos
console.log(text_long.endsWith(".")) // ==> Devuelve false o true


