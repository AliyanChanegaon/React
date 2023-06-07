import { useContext } from "react";
import { AuthContext } from "./Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { isAuth, setisAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const HandlingLogout = () => {
    setisAuth(false);

    alert("Logout successful");
    navigate("/login");
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        disabled={isAuth == false ? true : false}
        onClick={HandlingLogout}
      >
        Logout
      </button>
    </div>
  );
}
