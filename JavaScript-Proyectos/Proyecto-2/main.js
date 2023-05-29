const inputTask = document.querySelector("input")
const btnADD = document.querySelector(".btnSubmit")
const tasks = document.querySelector(".ul-container");
const empty = document.querySelector("span")
const arrayTaskS = []

btnADD.addEventListener("click", event => {
  event.preventDefault();
  const text = inputTask.value;
  arrayTaskS.push(text)
  const list = document.createElement("li");
  const parraf = document.createElement("p");
  parraf.textContent= text;
  list.appendChild(parraf)
  list.appendChild(addButtonDelete());
  list.appendChild(addCheckCompleted())
  tasks.appendChild(list)
  empty.style.display = "none"
  inputTask.value = ""
  localStorage.setItem("items", arrayTaskS);
})

function addButtonDelete () {
  const btnDel = document.createElement("button")
  const liQuantities = document.querySelectorAll("li").length;
  btnDel.classList.add = "deleteBTN";
  btnDel.addEventListener("click", event => {
    const list = event.target.parentElement;
    tasks.removeChild(list);
    if (liQuantities === 0) {
      empty.style.display = "block"
    }
  })
  return btnDel;
}

function addCheckCompleted () {
  const inputCompleted = document.createElement("input")
  inputCompleted.type = "checkbox";
  inputCompleted.addEventListener("click", event => {
    const { checked } = event.currentTarget;
    const list = inputCompleted.parentNode
    if (checked) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none"
    }
  })
  return inputCompleted;
}


































































/* const arrayTask = [{task: "Hola hola", isCompleted: false}, {task: "Juan", isCompleted:true}]
renderInHTML(arrayTask)


form.addEventListener("submit", e =>  {
  e.preventDefault();
  const data = document.getElementById("newTask")
  addTodo(data.value.trim())
})


function addTodo (newTask) {
  const task = {
    task: newTask,
    isCompleted: false
  }
  arrayTask.push(task);
  renderInHTML(arrayTask)
}

function renderInHTML (arrayTask) {
  const element = document.createElement("div");
  element.classList.add("task")
  arrayTask.map((value, index) => {
      element.innerHTML = `
      <div id="${index}">
      <input type="checkbox" id="completed" isTrusted="${value.isCompleted}"/>
      <button>X</button>
      </div>
      <h2>${value.task}</h2>
      `
    }
    )
    tasks.append(element)
} */