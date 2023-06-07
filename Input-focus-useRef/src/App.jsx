import { useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef(null);

  const InvokingInput = () => {
    ref.current.focus();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input ref={ref} type="text" placeholder="Enter" />
      <button onClick={InvokingInput}>Click</button>
    </div>
  );
}
