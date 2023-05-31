import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { InputButton } from "./components/inputButton";
import { useEffect } from "react";

function App() {
  const [Todos, setTodos] = useState([]);

  const getTodos = async () => {
    let response = await fetch(`http://localhost:3000/todos`);
    let data = await response.json();

    setTodos([...data]);
    console.log(data);
  };

  const AddTodo = async (value) => {
    const todo = { title: value, status: false };

    await fetch(`http://localhost:3000/todos`, {
      method: `POST`,

      body: JSON.stringify(todo),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    getTodos();
  };

  const DeleteTodo = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: `DELETE`,

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getTodos();
  };

  const ChangeStatus = async (id, status) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: `PATCH`,

      body: JSON.stringify({
        status: !status,
      }),

      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5500",
      },
    });

    getTodos();
  };

  const editTodo= async (id)=>{
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: `PATCH`,

      body: JSON.stringify({
        title: id,
      }),

      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5500",
      },
    });

  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <InputButton AddTodo={AddTodo} />
      <List data={Todos} ChangeStatus={ChangeStatus} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
