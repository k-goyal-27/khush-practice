import React, { useState } from "react"

function App() {
    const values = useState("yes");
    console.log(values);  // ["yes", ƒ()]
    /* REASON-> useState returns an array because we kind of expected to use araay destructuring when we
    get this value. useState is not returning object it is returning array so we use array destructuring 
    instead of object destructuring.
 */

    return (
        <div>
            <h1>Is state important to know? {values[0]}</h1>
        </div>
    )
}

export default App;

/* function App() {
    const [values] = useState("yes");
    console.log(values);  // ["yes", ƒ()]


    return (
        <div>
        //If we dont want to use {values[0]} then we can put values in the [] itself when it declared.
            <h1>Is state important to know? {values}</h1>
        </div>
    )
} */

