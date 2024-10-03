import { useState } from "react"

function Counter() {
  // let counter = 0;

  const [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
    // counter += 1;
    // console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    // counter -= 1;
    // console.log(counter)
  }

  return (
    <>
        <h1>Counter</h1>
        <h2>Count Value: {counter}</h2>
        <button onClick={addValue}>Add Count</button>{" "}
        <button onClick={removeValue}>Remove Count</button>
        <div>Final Count: {counter}</div>
    </>
  );
}

export default Counter