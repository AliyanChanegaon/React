import React, { useState } from "react";

export const InputButton = ({AddTodo}) => {
    
  const [todo, setTodo] = useState("");

  const handlingSubmit = ()=>{

    AddTodo(todo)
    setTodo("")
  }

  return (
    <div>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handlingSubmit}>Submit</button>
    </div>
  );
};
