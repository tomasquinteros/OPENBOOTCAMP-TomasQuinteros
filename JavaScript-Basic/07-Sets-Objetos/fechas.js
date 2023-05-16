// new Date() para tener la fecha

const date = new Date();
console.log(date)

// Arrancar la fecha de cuando queramos

const date2 = new Date(1954, 10, 24, 20, 10);
console.log(date2)

//Comparar dos fechas
console.log(date.getTime() === date2.getTime());

// OBETENER AÑO, DIA, MES, ETC...

console.log(date.getDay());
console.log(date.getFullYear())
console.log(date.getHours());

// Para verlo en nuestra forma =>
console.log(date.toLocaleDateString("en-US"));