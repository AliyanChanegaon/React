import React from "react";
import { Todo } from "./todo";





export const List = ({data,ChangeStatus, DeleteTodo}) => {



  return (
    <div>
      {
        data.map((todo)=>(
            <Todo data={todo} ChangeStatus={ChangeStatus} DeleteTodo={DeleteTodo} />
        ))
      }
    </div>
  );
};
