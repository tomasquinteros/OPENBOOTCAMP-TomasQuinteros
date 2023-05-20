// Eventos por defecto ==> un ejemplo es el onSubmit
/* const form = document.getElementById("form");
console.log(form)

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault() // Para prevenir lo que hará por defecto
})
 */




// Custom events ==> crear nuestros propios eventos.

const p = document.getElementById("parrafo");

p.addEventListener('changeText', event => {
  console.log(event.detail)
  p.innerText = event.detail.text;
  p.style.color = event.detail.color;
})

function changeText (newText, color) {
  const event = new CustomEvent("changeText", { // Aca creamos el elemento custom
    detail: {
      text: newText,
      color
    }
  })
  p.dispatchEvent(event); // Acá disparamos nuestro evento al addeventlistener
}

const button = document.getElementById("changeText");
button.addEventListener("click", () => {
  this.changeText("Nuevo texto", "red")
})