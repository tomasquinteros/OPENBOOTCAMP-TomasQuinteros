// .every() ==> Para ver si se cumple la condicion en todos los elementos de un array

const array = [1, 4, 6, 7, 1,32, 4, 2,34,55, -12];
console.log(array.every(element => typeof(element) === "number")); // => para ver si todos son numeros

console.log(array.every(element => element > 0)) 

// COMPARACION DE DOS LISTAS
const array1 = [1, 3, 5, 6];
const array2 = [1, 3, 5, 6];
function compare(array1, array2) {
  if (array1.length !== array2.length) return console.log("false");
  const res = array1.every((element, index) => element === array2[index] ? true : false);
  return console.log(res);
}
compare(array1, array2);
