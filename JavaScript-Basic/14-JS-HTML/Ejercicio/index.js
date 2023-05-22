const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
    alert("Click en el botón!");
})

$("button").on("click", function() {
    console.log("Hola, estoy utilizando jQuery")
})