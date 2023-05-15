// toString() ==> Pasar de tipo number a string
const a = 5;
const a_s = a.toString();

// .toFixed() ==> Limita el numero de decimales || LO TRANSFORMA EN STRING
let num1 = 0.4;
let num2 = 0.3 * 1.797;
console.log(num2)
console.log(num2.toFixed(4)); // ==> este metodo nos devuelve el valor como un string para eso debemos pasarlo nuevamente a number.

// .toPrecision(x) ==> Limita el numero en cifras significativas || LO TRANSFORMA EN STRING!
console.log(num2.toPrecision(2));
let num3 = 2325453543;
console.log(num3.toPrecision(4)); // ==> tambien funciona para numeros grandes, lo que hacemos es achicar en las cifras significativs : multiplicado 9 veces.



