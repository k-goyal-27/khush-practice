/*
In the place of these 3 lifecycle in functional components-
  -componentDidMount
  -componentDidUpdate
  -componentWillUnmount
useEffect-> It's a hook that allows us to produce side-effects in our components.
side-effects->
  -Network request
  -Manual DOM manipulation
  -Event listeners or timeouts and intervals
all these are considered to be side effects of the components since their main job dosen't specifically
has to do with managing states or displaying content on the screen.
*/

import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App
