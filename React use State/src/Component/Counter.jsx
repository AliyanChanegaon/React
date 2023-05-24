import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  // counter is state setCounter is dispatcher funciton
  // useState(value) here value is initial value of counter
  // dispatcher funciton is used to update the state of counter

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Remove</button>
    </div>
  );
}
