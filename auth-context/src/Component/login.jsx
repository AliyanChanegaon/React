import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Context/AppContext";
export default function Login() {
  const { isAuth, setisAuth, HandlingLogin } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandlingSubmit = () => {
    const UserDetails = {
      email,
      password
    };
    axios
      .post("https://reqres.in/api/register", UserDetails)
      .then((res) => {
        console.log("success");
        HandlingLogin(UserDetails.email, res.data.token);
        setisAuth(true);
      })
      // "email": "eve.holt@reqres.in",
      //"password": "cityslicka"
      .catch((error) => {
        console.log("failed");
      });
  };
  return (
    <div>
      {isAuth ? (
        <div style={{ marginTop: "20px" }}>
          <h1>Your Logged in</h1>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <div>
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button onClick={HandlingSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}
