const parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id);
    })
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".section")
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    })
    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
}) 

const trash = document.getElementById("trash");
trash.addEventListener('dragover', (event) => {
	event.preventDefault()
})
trash.addEventListener("drop", event => {
    console.log(event)
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})