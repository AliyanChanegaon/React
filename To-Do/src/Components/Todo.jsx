import { useState } from "react";
import InputButton from "./input";

import List from "./list";

function Todo() {
  const [Todos, setTodos] = useState([
    {
      title: "text",
      status: false,
      id: new Date().toDateString() + "text"
    }
  ]);

  const handlingTodos = (text) => {
    const NewItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    // Todos.push(NewItem);
    console.log(Todos);
    setTodos([...Todos, NewItem]);
  };

  return (
    <div>
      <InputButton handlingTodos={handlingTodos} />

      <List data={Todos} />
    </div>
  );
}

export default Todo;
