// Async Function ==> La asincronía en JavaScript funciona de manera similar. Lo que hacemos en este lenguaje de programación es programar acciones que se ejecutarán en caso de que otra acción suceda. Por ejemplo, con el comando .onclick podemos programar que cuando el usuario haga clic en determinado lugar, algo suceda.

// Promise ==> nos sirve para ver lo que sale bien y lo que sale mal. 
const promises = new Promise((resolve, reject) => {
 if (false) {
  resolve();
 } else {
  reject();
 }
})

promises
 .then(() => console.log("Se ha ejecutado de forma correcta")) // SI TODO SALE BIEN
 .catch(() => console.log("Error")) // SI ALGO SALE MAL
 .finally(() => console.log("Hola!")); // SIEMPRE SE EJECUTA