const parraf = document.querySelectorAll(".parrafo");

parraf.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { // Creamos un evento que escuche cuando agarramos el elemento
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () => { // Creamos un evento que escuche cuando soltamos ese elemento
        parrafo.classList.remove("dragging")
    })
});


const section = document.querySelectorAll(".section")
console.log(section)
section.forEach(element => {
    element.addEventListener("dragover", event => { // Creamos un evento que escuche en que posicion va el elemento agarrado
        event.preventDefault();
        console.log("dragover")
    })

    element.addEventListener("drop", event => { // Creamos un evento en el cual suelta el elemento en donde nosotros lo arrastramos (si es en otra caja de seccion, lo suelta ahi)
        console.log("Drop")
        const id_parraf = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parraf)
        element.appendChild(parrafo)
    })
});