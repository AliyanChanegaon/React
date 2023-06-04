import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

export const Todo = ({ data, ChangeStatus, DeleteTodo, editTodo }) => {
  const [isEdit, setEdit] = useState(false);
  const [input,setInput]=useState(data.title);
  console.log(data);
  const statusChange = () => {
    ChangeStatus(data.id, data.status);
  };

  const handlingEdit = () => {
    setEdit(!isEdit);
  };

  const handlingSave =()=>{
    editTodo(data.id,input);
    setEdit(!isEdit);
  }
  return (
    <>
      {isEdit ? (
        <div style={{ display: "flex" }} key={data.id}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
       

          <button style={{ backgroundColor: "green", color: "white" }} onClick={handlingSave}>
            <SaveIcon />
          </button>
          <button onClick={handlingEdit}>
            <CancelIcon />
          </button>
        </div>
      ) : (
        <div style={{ display: "flex" }} key={data.id}>
           <p>{data.title} - </p>
           <p>{data.status ? "Done" : "Pending"}</p>
          <button onClick={statusChange}>Change</button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => DeleteTodo(data.id)}
          >
            <DeleteIcon />
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={handlingEdit}
          >
            <EditIcon />
          </button>
         
        </div>
      )}
    </>
  );
};
