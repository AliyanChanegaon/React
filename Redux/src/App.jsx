import { Counter } from "./Component/Counter";
import Todo from "./Component/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <hr />
      <h1>Counter</h1>
      <hr />
      <Counter />
      <hr />
      <h1>Todo</h1>
      <hr />

      <Todo />
    </div>
  );
}
