import { useState } from "react"
function Counter() {

    var [count, setcount] = useState(0)

    function increment() {
        var newCount = count + 1
        setcount(newCount)
    }

    function decrement() {
        var newCount = count - 1
        setcount(newCount)
    }

      function reset() {
        setcount(0)
    }

    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "#0077D2",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"


        }}>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            {count === 0 && <p style={{color:"yellow"}}>Minimum limit reached</p>}
            <button onClick={increment} style={{ margin: "10px", backgroundColor: "#14B8A6", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
                Increment
            </button>
            <button onClick={decrement} style={{ margin: "10px", backgroundColor: "#14B8A6", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
                Decrement
            </button>
            <button
                onClick={reset}
                style={{ margin: "10px", backgroundColor: "#14B8A6", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>
                Reset
            </button>
        </div>
    )
}

export default Counter