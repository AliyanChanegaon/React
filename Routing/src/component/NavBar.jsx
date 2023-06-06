import { Link, NavLink } from "react-router-dom";

const Links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/user",
    title: "User"
  },
  {
    path: "/login",
    title: "Login"
  }
];

const defaultstyle = {
  color: "blue"
};

const activestyle = {
  color: "red"
};

export default function NavBar() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        {Links.map((link) => (
          <NavLink
            style={({ isActive }) => (isActive ? activestyle : defaultstyle)}
            to={link.path}
          >
            {link.title}
          </NavLink>
          // Navlink has a default porperty isActive to check if we are on which route
          // use it to highlight page
        ))}
      </nav>
    </div>
  );
}
