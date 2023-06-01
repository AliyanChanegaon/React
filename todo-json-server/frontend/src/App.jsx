import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import LoadingIndicator from "./components/Loading";
import { InputButton } from "./components/inputButton";
import { useEffect } from "react";
import Error from "./components/Error";
import Pagination from "./components/Pagination";
import { api } from "./services/todos";

function App() {
  const [Todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage] =useState(1);

  const getTodos = async () => {
    let response = await fetch(`${api}?_page=${page}&_limit=3`);
    let data = await response.json();

    setTodos([...data]);
    setIsLoading(false);
    console.log(data);
  };

  const AddTodo = async (value) => {
    try {
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
    } catch (error) {
      console.error("Failed to change todo status:", error);
      setError(true);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: `DELETE`,

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      getTodos();
    } catch (error) {
      console.error("Failed to change todo status:", error);
      setError(true);
    }
  };

  const ChangeStatus = async (id, status) => {
    try {
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
    } catch (error) {
      console.error("Failed to change todo status:", error);
      setError(true);
    }
  };

  const editTodo = async (id, value) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: `PATCH`,

        body: JSON.stringify({
          title: value,
        }),

        headers: {
          "Content-Type": "application/json",
          Origin: "http://127.0.0.1:5500",
        },
      });

      getTodos();
    } catch (error) {
      console.error("Failed to change todo status:", error);
      setError(true);
    }
  };

  useEffect(() => {
    getTodos();
  }, [page]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <InputButton AddTodo={AddTodo} />
      <List
        data={Todos}
        ChangeStatus={ChangeStatus}
        DeleteTodo={DeleteTodo}
        editTodo={editTodo}
      />
      <Pagination page={page} setPage={setPage}/>
    </div>

  );
}

export default App;
