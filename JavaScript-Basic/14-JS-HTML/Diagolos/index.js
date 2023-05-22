const btn = document.getElementById("btn")

btn.addEventListener("click", event => {
    confirm("Estas de acuerdo?") && alert("Okay")
})