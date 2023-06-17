import { useState } from "react";

export default function Loggedin() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const HandlingLoggedin = () => {
    setIsLoggedin(true);
  };

  const HandlingLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <div>
      <button onClick={HandlingLoggedin}>Logged in</button>
      <button onClick={HandlingLogout}>Logged out</button>
      <h1>{isLoggedin ? "User is logged in " : "User is not logged in"}</h1>
    </div>
  );
}
