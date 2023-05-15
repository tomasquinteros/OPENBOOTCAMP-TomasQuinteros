const array = [1, "hola", false, undefined, null, {id:1}] // ==> PODEMOS ALMACENAR CUALQUIER VALOR.
// se accede atraves del limite
console.log(array[1]);
console.log(array[0]);

// METODOS PARA INTRODUCIR NUEVOS VALORES
 // ==> MUTAN EL ARRAY!
 // .push() ==> Introduce el valor en la ultima posicion
  array.push("Tomas");
  console.log(array);
 // .unshift() ==> Intrudice el valro en la primera posicion
  array.unshift(3);
  console.log(array);

// METODOS PARA ELIMINAR VALORES DEL ARRAY
 // ==> Tambien mutan el array!
  // .pop() ==> Elimina el valor de la ultima posicion;
   array.pop();
   console.log(array);
  // .shift() ==> Elimina la primera posicion de la posicion
   array.shift();
   console.log(array);

// METODO .splice(x, y, z) ==> Metodo para eliminar, modificar o añadir valores en nuestro array
const array2 = [1, 2, 4, 6, 3, 2, 5];
 // Eliminar valores .splice(indice, valores a elminar)
  array2.splice(2, 1); // ==> en la x le ponemos desde donde queremos que nos elimine, en la y la cantidad de elementos que se encuentra a partir de la x
  console.log(array2);
 // Añadir valores .splice(indice, 0, valor)
  array2.splice(2, 0, "Tomas", "Juan");
  console.log(array2);
 // Modificar valor .splice(indice, 1, valor)
  array2.splice(2, 1, 3);
  console.log(array2);

