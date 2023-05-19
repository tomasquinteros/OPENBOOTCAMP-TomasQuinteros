// .sort() ==> Ordena las listas;
const array = [1, 2, 4, 5, 6,32, -1, 4, 5, 6, 12];

console.log(array.sort()) // ==> POR DEFECTO LOS ACOMODA DE MENOR A MAYOR (TMB FUNCIONA CON LAS LETRAS.)


const newArray = array.sort((a, b) => a < b ? -1 : +1) // LOS ORDENA DE MAYOR A MENOR. => EL -1 SIGNIFICA QUE COMO A ES MENOR A B NUESTRO ELEMENTO DEBE ESTAR POR DELANTE DEL ELEMENTO B, POR ESO SE USA -1 QUE SERIA EL INDICE
console.log(newArray)

console.log(array.sort((a,b) => b - a)) // OTRA FORMA DE ACOMODAR DE MAYOR A MENOS


// Cambiar este objeto de menor a mayor con sort()
const object = [
  { name: "Tomas", age: 25 },
  {name: "Juan", age:20 },
  {name: "Victor", age:60 },
  {name: "Salvador", age:22 },
  {name: "Zoe", age:23 },
  {name: "Mirko", age:22 }
]

object.sort((a, b) => a.age - b.age);
console.log(object)