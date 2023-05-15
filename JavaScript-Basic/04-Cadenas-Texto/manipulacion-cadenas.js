// toLowerCase => pone todo el texto en minuscula para poder comparar

let text1 = "Hola";
let text2 = "hola";
console.log(text1 === text2) // => Esto va a dar false por más que las variables sean identicas.
// para eso toLowerCase poner el texto igual
console.log(text1.toLowerCase === text2.toLowerCase);

// Concatenar dos cadenas
console.log(text1.concat(" ", text2));
console.log(text1 + " " + text2);
console.log(`${text1} ${text2}`);

// .trim() => Sirve para poder eliminar los espacios que se encuentran al final y al principio de nuestra cadena
let texto = "Hola, mi nombre es tomas   ";
console.log(texto.trim())
console.log(texto.trimStart()) // => elimina unicamente los espacios del principio

// .charAt() => Sirve para obtener el caracter que se encuentra en una posicion

console.log(text1.charAt(2));

// Si es una cadena de texto podes buscar primero la cadena y su posicion para poder luevo buscar el caracter de esa cadena
console.log(texto.indexOf("tomas")); // => nos busca la primera instancia con ese valor
console.log(texto.lastIndexOf("tomas")) // => nos busca la ultima instancia con ese valor.
console.log(texto.charAt());

