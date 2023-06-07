import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Logout from "../logout";
import Userdetails from "../userdetails";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/userdetails" element={<Userdetails />} />
    </Routes>
  );
};

export default Allroutes;
