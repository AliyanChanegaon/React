import React from "react";

export const Todo = ({ data, ChangeStatus, DeleteTodo }) => {
  const statusChange = () => {
    ChangeStatus(data.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <p>{data.title} - </p>
      <p>{data.status ? "Done" : "Pending"}</p>
      <button onClick={statusChange}>Change</button>
      <button onClick={() => DeleteTodo(data.id)}>Delete</button>
    </div>
  );
};
