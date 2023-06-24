import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [clock, setClock] = useState({
        fecha: new Date(),
        age: 0,
        name: "Martin",
        lastname: 'San Jose'
    })
    
    function tick() {
        setClock((prevState) => {
            let newAge = prevState.age + 1
            return {
                ...prevState,
                fecha:new Date(),
                age: newAge
            }
        })
    }

    useEffect(()=>{
        setInterval(() => tick(), 1000)
        return (
            clearInterval(() => tick())
        )
    }, [])
    return (
        <div>
            <h2>
                Hora actual: {clock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clock.name} {clock.lastname} </h3>
            <p>Age: {clock.age}</p>
        </div>
    )
}
