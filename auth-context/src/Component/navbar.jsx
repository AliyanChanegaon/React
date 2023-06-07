import { NavLink } from "react-router-dom";
import Userdetails from "./userdetails";

const Links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Login",
    path: "/login"
  },
  {
    title: "Logout",
    path: "/logout"
  },
  {
    title: "Userdetails",
    path: "/userdetails"
  }
];

export default function Navbar() {
  const activeStyle = {
    color: "red",
    textDecoration: "none"
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none"
  };

  const style = {
    display: "flex",
    justifyContent: "space-around",
    gap: "10px",
    textDecoration: "none",
    color: "black"
  };

  return (
    <>
      <div style={style}>
        {Links.map((el, idx) => (
          <NavLink
            to={el.path}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            key={idx}
          >
            {el.title}
          </NavLink>
        ))}
      </div>
    </>
  );
}
