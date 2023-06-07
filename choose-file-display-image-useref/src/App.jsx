import { useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef(null);
  const handleChooseFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      ref.current.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="file" onChange={handleChooseFile} />
      <img ref={ref} src="" alt="" />
    </div>
  );
}
