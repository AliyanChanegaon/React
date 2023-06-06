import NavBar from "./component/NavBar";
import AllRoutes from "./component/pages/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}
