import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");

  let timer;

  useEffect(() => {
    if (state === "") {
      return;
    }

    timer = setTimeout(() => {
      console.log(state);
    }, 500);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [state]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="debouncing"
      />
    </div>
  );
}
