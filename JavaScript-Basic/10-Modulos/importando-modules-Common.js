// Formas de importar modulos:
// 1. CommonJS -> require
// 2. ES6 -> import

const { sum, div, multi, eleva, rest, factorial } = require("./matematicas/functions-aritmeticas");
console.log(sum(5, 10));