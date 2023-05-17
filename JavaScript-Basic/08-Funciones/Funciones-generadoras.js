// Las funciones generadoras son utilizadas mas que todo para crear IDs, entra a la funcion y guarda en memoria el dato, entonces cada vez que la llamemos ese dato cambiara para arriba

function* generateID() {
 let id = 0;
 while(true) {
  id++;
  if (id === 11) {
   return;
  }
  yield id;
 }
}

const id = generateID();
console.log(id.next().value); // Para generar un valor
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);


