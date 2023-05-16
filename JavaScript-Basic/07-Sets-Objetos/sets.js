// SETS (conjunto no ordenado de elementos unicos) ==> son una forma de lista que se conforman de forma diferente.

const array = [1, 5, 4,7, 5, 2, 5, 7];

const set = new Set(array); // ==> no nos deja almacenar valores que sean identicos
console.log(set);

// .add() => agrega elementos a nuestro conjunto
set.add("Hola")
console.log(set);

// .delete => elimina elementos de nuestro conjunto
set.delete(1);
console.log(set);

// .clear => Vacía todo el conjunto
//set.clear();
console.log(set);

// .has => verificar si contiene algo
console.log(set.has("Hola"));

//PROPIEDAD!
// .size => Para saber el tamaño del conjunto
console.log(set.size)

//ITERAR UN SET
set.forEach(element => {console.log(element)});
//CREAR UN ARRAY CON LOS DATOS DEL SET
const array_set = [...set] // => utilizando spread
console.log(array_set);