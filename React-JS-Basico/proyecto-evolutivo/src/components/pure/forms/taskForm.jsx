import PropTypes from "prop-types"
import { useRef } from "react"
import { LEVELS } from "../../../models/levels.enum"
import { Task } from '../../../models/task.class'

export default function TaskForm({add}) {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const levelRef = useRef(LEVELS.NORMAL)
    
    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }
    return (
        <form onSubmit={addTask} className="flex flex-col gap-4 w-full p-4 bg-slate-200 border-2 border-gray-300">
            <ul className=" flex flex-col gap-6 w-full">
                <li>
                    <input type="text" ref={nameRef} id="inputName" placeholder="Name of task" className="w-full p-2"/>
                </li>
                <li>
                    <input type="text" ref={descriptionRef} id="inputDescription" placeholder="Descript your task" className="w-full p-2"/>
                </li>
                <li className="flex gap-2 flex-col">
                    <label htmlFor="selectPriority">Priority</label>
                    <select ref={levelRef} defaultValue={LEVELS.NORMAL} name="selectPriority" id="selectPriority" className="w-2/6 bg-white">
                        <option value={LEVELS.NORMAL}>NORMAL</option>
                        <option value={LEVELS.URGENT}>URGENT</option>
                        <option value={LEVELS.BLOCKING}>BLOCKING</option>
                    </select>
                </li>
            </ul>
            <button className="bg-slate-600 text-gray-200 w-2/6 rounded-md p-2" type="submit">Add</button>
        </form>
        
    )
}

TaskForm.propTypes = {
    add:  PropTypes.func.isRequired
}
