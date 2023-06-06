import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import User from "./user";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import SingleUser from "./SingleUser";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/user/:id" element={<SingleUser />} />
    </Routes>
  );
}
