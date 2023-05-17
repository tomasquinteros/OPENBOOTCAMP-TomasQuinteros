function myFunct (param) {
 if (typeof param === "number") return param*2
 throw new Error("No es un numero")
}

/*  console.log(myFunct("22")); */

// UNA BUENA PRACTICA ES UTILIZAR TRY Y CATCH
try {
 console.log("Se encuentra ejecutando");
 const s = myFunct("aa");
 console.log(s)
} catch (e) { // El valor del parametro es el Error que tenemos en la funcion
 console.log(e)
} finally {
 console.log("Esto se ejecuta siempre")
}

