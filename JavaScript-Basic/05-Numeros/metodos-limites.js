// .valueOf() ==> Obtiene los valores numericos apartir de literales
let a = 2;
console.log(a.valueOf());

// isNaN() ==> Not a Number => Nos dice si la variable es un tipo number o no;
let b = Number("Tomas!");
console.log(isNaN(b));

// Number() ==> Convertimos un numero string en numero de tipo numbre
let c = "4.644";
let c2 = Number(c);
console.log(typeof(c2));

// .parseInt() ==> Convierte el numero en enter
console.log(parseInt(c2));

// .parseFloat() ==> Convierte el numero en un valor con decimales
console.log(parseFloat(a));