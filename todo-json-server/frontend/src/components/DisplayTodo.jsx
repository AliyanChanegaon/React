import { useState } from "react";
import { List } from "./List";
import LoadingIndicator from "./Loading";
import { InputButton } from "./inputButton";
import { useEffect } from "react";
import Error from "./Error";
import Pagination from "./Pagination";
import { api } from "../services/todos";

function DisplayTodo() {
  const [Todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ASC");

  const getTodos = async () => {
    let response = await fetch(
      `${api}?_sort=title&_order=${sort}&_page=${page}&_limit=2`
    );
    let data = await response.json();

    setTodos([...data]);
    setIsLoading(false);
    console.log("iojiojio", data.length);
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
  }, [page, sort]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <InputButton AddTodo={AddTodo} />
      <button onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}>
        Sort by :{sort === "ASC" ? "Ascending" : "Descending"}
      </button>

      <List
        data={Todos}
        ChangeStatus={ChangeStatus}
        DeleteTodo={DeleteTodo}
        editTodo={editTodo}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default DisplayTodo;
