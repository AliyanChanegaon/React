import { useState } from "react";

function InputButton({ handlingTodos }) {
  const [text, setText] = useState("");

  function handingChange(e) {
    setText(e.target.value);
  }

  function handlingEmpty() {
    handlingTodos(text);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        type="text"
        placeHolder="Enter something"
        onChange={handingChange}
      />
      <button onClick={handlingEmpty}>Submit</button>
      <h1>{text}</h1>
    </div>
  );
}

export default InputButton;
