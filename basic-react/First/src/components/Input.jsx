import { useEffect, useState } from "react";

export function InputMy({appendData}) {

  const [initial, setInitial] = useState("AA");
  
  function AppendKaro(){
    appendData(initial)
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <input
        value={initial}
        onChange={(event) => setInitial(event.target.value)}
        type="text"
        placeholder="Enter your text"
      />
      <button onClick={AppendKaro}>Enter</button>
    </div>
  );
}
