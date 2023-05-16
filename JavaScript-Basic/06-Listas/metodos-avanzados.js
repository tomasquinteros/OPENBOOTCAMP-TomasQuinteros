const array = ["Cordoba", "Buenos Aires", "Catamarca", "Santa Fe", "Mendoza", "Santiago del Estero"];

// .map() ==> Devuelve un valor a diferencia del map que no devuelve nada.
const newArray = array.map((provincia ,index) => `${index+1}- ${provincia}`);
console.log(newArray)

// .filter() ==> Filtra nuestro objeto, array a lo que nosotros queramos. Devuelve un nuevo array => no muta el objeto o array original
const object = [
 { name: "Tomas", age: 25 },
 {name: "Juan", age:20 },
 {name: "Victor", age:60 },
 {name: "Salvador", age:22 },
 {name: "Zoe", age:23 },
 {name: "Mirko", age:22 }
]
console.log(object.filter(persona => persona.age > 30));

// .reduce()
