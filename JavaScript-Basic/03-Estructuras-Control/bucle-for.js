// FOR Tradicional

for (let i = 0; i < 11; i++) {
 console.log(i);
};

// FOR OF => recorre elemento que le pasemos.

const array = [1, 4, 5, 6, 2, 1, 15];
for (element of array) {
 console.log(element);
};

// FOReach => es identico al for of lo unico que ya es una funcion que tiene un callback
array.forEach(element => console.log(element))

// FOR in => se utiliza para los objetos en especial.

let persona = {
 name: "Tomas",
 lastname: "Quinteros",
 year: 20,
 stack: ["React", "JavaScript", "Tailwindcss"],
 isDeveloper: true
};
for (let propiedades in persona) {
 console.log(propiedades + ": " + persona[propiedades]); // Para acceder a las propiedades del objeto debemos acceder poniendo las propiedades entre corchetes.
}