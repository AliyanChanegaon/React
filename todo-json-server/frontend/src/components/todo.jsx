import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

export const Todo = ({ data, ChangeStatus, DeleteTodo , editTodo }) => {
  console.log(data);
  const statusChange = () => {
    ChangeStatus(data.id,data.status);
  };
  return (
    <div style={{ display: "flex" }}>
      <p>{data.title} - </p>
      <p>{data.status ? "Done" : "Pending"}</p>
      <button onClick={statusChange}>Change</button>
      <button style={{backgroundColor:"red",color:"white"}} onClick={() => DeleteTodo(data.id)}><DeleteIcon/></button>
      <button style={{backgroundColor:"blue",color:"white"}} onClick={() => editTodo(data.id)} ><EditIcon /></button>
      <button style={{backgroundColor:"green",color:"white"}}><SaveIcon/></button>
    </div>
  );
};
