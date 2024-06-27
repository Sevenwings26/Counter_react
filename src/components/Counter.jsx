import React, { useState } from 'react'

function Counter() {
    const [count, setCounter] = useState(0);

    const increase = () => {
        setCounter(count + 1)
    }

    const decrease = () => {
        if(count > 0){
            setCounter(count - 1)
        } else {''}
    }

  return (
    <div>
        <h2>Count: {count}</h2>
        <p>Click on either of the buttons to count up or down</p>
        <button onClick={increase}>Increase Count</button>
        <button onClick={decrease}>Decrease Count</button>
    </div>
  )
}

export default Counter