import { verifiedTaskExisted } from "./JavaScript/add-task";
const taskNew = document.getElementById("task-new");
const tasks = document.querySelector("div.tasks"); 
const arrayTask = [{task: "tomas", completed: true}];

taskNew.addEventListener("change", event => {
  const newTask = {
    task: event.target.value,
    completed: false
  } 
  if (!verifiedTaskExisted(newTask, arrayTask)) {
    arrayTask.push(newTask)
  }
})