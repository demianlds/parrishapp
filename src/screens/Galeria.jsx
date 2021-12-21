import React, { useState } from 'react'

const Galeria = () => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }
    const restart = () => {
        setCounter(0)
    }
    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default Galeria
