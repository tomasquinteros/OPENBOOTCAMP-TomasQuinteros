const object = {
 id: 4,
 name: "tomas",
 lastName: "quinteros",
 isDev: true,
 moviesFavorites: ["Gladiador", "Harry Potter"]
}

// ==> Si queremos copiar este objeto en otro y luego cambiar un valor, se nos cambia en ambos objetos
const object2 = object;
object2.name = "said";
console.log(object.name)

// PARA PODER DUPLICAR UN OBJETO DEBEMOS UTILIZAR SPREAD
const object3 = {...object};
object3.name = "Rolfo";
console.log(object3.name)
console.log(object.name)
