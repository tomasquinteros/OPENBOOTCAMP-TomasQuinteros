import { sum, multi } from "../Ejercicio/controller.js";
import chalk from "chalk";
const suma = sum(1, 2);
console.log(suma);
const multiplicacion = multi(4, 5);
console.log(chalk.green(multiplicacion));