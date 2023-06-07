import { useContext } from "react";
import { AuthContext } from "./Context/AppContext";

export default function Home() {
  const { isAuth, token } = useContext(AuthContext);
  return (
    <div>
      {isAuth ? (
        <h1>Token:{token}</h1>
      ) : (
        <div>
          <h1>Home</h1>
        </div>
      )}
    </div>
  );
}
