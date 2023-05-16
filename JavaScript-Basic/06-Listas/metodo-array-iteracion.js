const array = ["Holaa", 2, 5, undefined, true];

// FOR ==> Forma antigua y poco eficiente
for (let i=0; i < array.length; i++) {
 console.log(array[i]);
}

// forEach() ==> Forma ES6 y efectiva
array.forEach(elemento => {
 console.log(elemento);
});

// .find() ==> buscar un valor dentro del array
let value = array.find(elemento => elemento === 5);
console.log(value);
