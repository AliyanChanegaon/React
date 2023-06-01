import React from "react";
import {Todo} from "./todo";





export const List = ({data,ChangeStatus, DeleteTodo,editTodo}) => {



  return (
    <div>
      {
        data.map((todo)=>(
            <Todo data={todo} ChangeStatus={ChangeStatus} DeleteTodo={DeleteTodo} editTodo={editTodo}/>
        ))
      }
    </div>
  );
};
