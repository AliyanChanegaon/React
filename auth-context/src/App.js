import Allroutes from "./Component/AllRoutes/Allroutes";
import Navbar from "./Component/navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>useContext & Routor</h1>

      <Navbar />
      <Allroutes />
    </div>
  );
}
