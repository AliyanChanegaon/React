import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [Todos, setTodos] = useState([]);

  const handlingChange = (e) => {
    setText(e.target.value);
  };

  const handlingTodos = () => {
    const NewItem = {
      title: text,
      status: false
      // id:new Date().toDateString()+text
    };
    Todos.push(NewItem);

    // setTodos([...Todos,NewItem]);
    setText("");
  };

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={handlingChange}
          placeholder="Enter Something"
        />

        <button onClick={handlingTodos}>Submit</button>
        <h1>{text}</h1>
        <ul>
          {Todos.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
