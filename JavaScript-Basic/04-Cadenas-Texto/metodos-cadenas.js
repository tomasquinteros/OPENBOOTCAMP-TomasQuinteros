let text = "Mi nombre es tomás quinteros"

// .lenght => Se utiliza para saber el tamaño de nuestra variable string (tmb se utiliza en arrays)
console.log(text.length());

// .slice => Se utiliza para saber donde queremos que comience nuestro string, sabiendo el tamaño de nuestro string podemos decir de donde arranca
console.log(text.slice(2, 10)) // aca le decimos que comienza desde la posicion dos y termina en la posicion 10.

// .substring => Funciona al igual que .slice, la diferencia que este esta más enfocado en el tipo de dato string.
console.log(text.substring(2,5));

// .substr => Este tipo de metodo se encuentra deprecado (no se utiliza más.)
console.log(text.substr(2, 6));


// .replace => Reemplaza una parte del texto que nosotros querramos, le debemos indicar que es lo que tiene que cambiar y con que lo vamos a cambiar

console.log(text.replace("tomás", "Quinteros")); // => en el primer parametro le indicamos que debe buscar en nuestro string y en el segundo parametro le debemos decir con que lo remplazamos |||| SOLO REMPLAZA EL PRIMER RESULTADO ENCONTRADO

 // Hay una forma de poder cambiar todas las instancias => debemos utilizar la expresion /g en .replace:
 
 let text_long = "Me llamo tomas, soy de carlos paz, estudio programacion, soy una persona muy tranquila."
 console.log(text_long.replace(/soy/g, "SOY"));

