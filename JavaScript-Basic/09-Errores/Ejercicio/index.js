const logger = require("./winston/index");

function myFunct(param) {
 if (typeof param === "number") return param*2;
 throw new Error("No es un numero")
}
try {
 logger.info("Se encuentra ejecutando");
 const func = myFunct("Hola")
 console.log(func);
} catch (e) { // El valor del parametro es el Error que tenemos en la funcion
 logger.error(e)
}