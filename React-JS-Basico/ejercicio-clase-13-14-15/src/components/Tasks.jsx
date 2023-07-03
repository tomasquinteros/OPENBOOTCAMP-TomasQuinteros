const Tasks = ({task, handleChange}) => {
    return (
        <div>
            {
                task.length === 0 ? (
                    <p>No hay tareas...</p>
                )
                    :
                    (
                        task.map(task => {
                            return (
                                <div key={task.id}>
                                    <p>{task.title} - <span>{task.status ? "Completed" : "Pendient"}</span></p>
                                    <button onClick={() => handleChange(task.id)}>Change Status</button>
                                </div>
                            )
                        })
                    )
            }
        </div>
    )
}

export default Tasks