import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { InputButton } from "./components/inputButton";

const InitialLists = [{ id: 1, title: "json-server", status: false }];

function App() {
  const [Todos, setTodos] = useState(InitialLists);

  const AddTodo = (value) => {
    const todo = { id: Todos.length + 1, title: value, status: false };

    setTodos([...Todos, todo]);
  };

  const ChangeStatus = (id) => {
    const arr = Todos.map((el) => {
      if (el.id == id) {
        el.status = !el.status;
      }
      return el;
    });

    setTodos([...arr]);
  };

  const DeleteTodo = (id) => {
    const arr = Todos.filter((todo) => todo.id !== id)

    setTodos([...arr]);
  };

  return (
    <div>
      <InputButton AddTodo={AddTodo} />
      <List data={Todos} ChangeStatus={ChangeStatus} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
