import { useState } from "react";
import { List } from "./List";
import LoadingIndicator from "./Loading";
import { InputButton } from "./inputButton";
import { useEffect } from "react";
import Error from "./Error";
import Pagination from "./Pagination";
import {
  getTodos,
  DeleteTodo,
  addTodo,
  ChangeStatus,
  editTodo,
} from "../services/todos";
import axios from "axios";

// Handling using axios

function DisplayTodo() {
  const [Todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ASC");

  const getAndUpdate = () => {
    getTodos({ page, limit: "5", sort, order: "title" }).then((res) => {
      setTodos(res);
      setIsLoading(false);
    });
  };

  const HandlingAdd = async (value) => {
    addTodo(value).then((res) => getAndUpdate());
  };

  const HandlingDelete = async (id) => {
    DeleteTodo(id).then((res) => getAndUpdate());
  };

  const HandlingChangeStatus = async (id, status) => {
    ChangeStatus(id, status).then((res) => getAndUpdate());
  };

  const HandlingeditTodo = async (id, value) => {
    editTodo(id, value).then((res) => getAndUpdate());
  };

  useEffect(() => {
    getAndUpdate();
  }, [page, sort]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <InputButton AddTodo={HandlingAdd} />
      <button onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}>
        Sort by :{sort === "ASC" ? "Ascending" : "Descending"}
      </button>

      <List
        data={Todos}
        ChangeStatus={HandlingChangeStatus}
        DeleteTodo={HandlingDelete}
        editTodo={HandlingeditTodo}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default DisplayTodo;

// Normal CRUD

// const AddTodo = async (value) => {
//   try {
//     const todo = { title: value, status: false };

//     await fetch(`http://localhost:3000/todos`, {
//       method: `POST`,

//       body: JSON.stringify(todo),

//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });

//     getAndUpdate();
//   } catch (error) {
//     console.error("Failed to change todo status:", error);
//     setError(true);
//   }
// };

// const DeleteTodo = async (id) => {
//   try {
//     axios.delete(`http://localhost:3000/todos/${id}`)

//     getAndUpdate();
//   } catch (error) {
//     console.error("Failed to change todo status:", error);
//     setError(true);
//   }
// };

// const ChangeStatus = async (id, status) => {
//   try {
//     await fetch(`http://localhost:3000/todos/${id}`, {
//       method: `PATCH`,

//       body: JSON.stringify({
//         status: !status,
//       }),

//       headers: {
//         "Content-Type": "application/json",
//         Origin: "http://127.0.0.1:5500",
//       },
//     });

//     getAndUpdate();
//   } catch (error) {
//     console.error("Failed to change todo status:", error);
//     setError(true);
//   }
// };

// const editTodo = async (id, value) => {
//   try {
//     await fetch(`http://localhost:3000/todos/${id}`, {
//       method: `PATCH`,

//       body: JSON.stringify({
//         title: value,
//       }),

//       headers: {
//         "Content-Type": "application/json",
//         Origin: "http://127.0.0.1:5500",
//       },
//     });

//     getAndUpdate();
//   } catch (error) {
//     console.error("Failed to change todo status:", error);
//     setError(true);
//   }
// };
