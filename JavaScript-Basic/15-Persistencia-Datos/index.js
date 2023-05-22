localStorage.setItem("name", "Tomas") // Crear items en el local storage para almacenar datos

console.log(localStorage.getItem("name")) // => Obtener el datos


// Para guardar objetos =>>>

localStorage.setItem("object", JSON.stringify({name: "Tomas", lastname: "Quinteros", isDev: true})); // => stringify -> convierte un objeto en string
console.log(localStorage.getItem("object"));
console.log(JSON.parse(localStorage.getItem("object"))) // ==> convierte el objeto strigify en un objeto JavaScript

// Eliminar cosas del localStorage => 
localStorage.removeItem("name")


/* SESSION STORAGE */
sessionStorage.setItem("name", "Tomas");

///////////////////////////////////////////

/* COOKIES */
document.cookie = "nameCookie=Tomas;expires=" + new Date(2023, 5, 23).toUTCString();
console.log(document.cookie)