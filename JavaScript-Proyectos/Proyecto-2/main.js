const inputTask = document.querySelector("input")
const btnADD = document.querySelector(".btnSubmit")
const tasks = document.querySelector(".ul-container");
const empty = document.querySelector("span")
const taskData = [];
const getData = localStorage.getItem("data")

if (getData) {
  JSON.parse(getData).forEach(element => {
    createElement(element.task)
    taskData.push(element)
  });
}

btnADD.addEventListener("click", event => {
  event.preventDefault();
  const text = inputTask.value;
  
  if (text.length > 0) {
    createElement(text)
    addNewTask(text)
  }
  empty.style.display = "none"
  inputTask.value = ""
})

function createElement(text) {
  const list = document.createElement("li");
  const parraf = document.createElement("p");
  parraf.classList.add("task-parraf")
  parraf.textContent= text;
  list.appendChild(parraf)
  list.appendChild(addButtonDelete());
  list.appendChild(addCheckCompleted())
  tasks.appendChild(list)
}
function addNewTask (text) {
  taskData.push({task: text})
  localStorage.setItem("data", JSON.stringify(taskData))
}
function addButtonDelete () {
  const btnDel = document.createElement("button")
  const liQuantities = document.querySelectorAll("li").length;
  btnDel.classList.add = "deleteBTN";
  btnDel.addEventListener("click", event => {
    const list = event.target.parentElement;
    const p = list.querySelector("p.task-parraf").textContent;
    console.log(taskData)
    
    for (let i=0; i < taskData.length; i++) {
      if (taskData[i].task === p) {
        taskData.splice(i, 1);
      }
    }
    localStorage.setItem("data", JSON.stringify(taskData))
    console.log(taskData)
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
