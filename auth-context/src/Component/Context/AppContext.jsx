import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setisAuth] = useState(false);
  const [token, setToken] = useState("");

  const HandlingLogin = (email, token) => {
    alert("Login successful");
    console.log(token);
    setToken(token);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, setisAuth, HandlingLogin, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
