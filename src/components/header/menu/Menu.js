import { HashRouter, NavLink } from "react-router-dom";

function Menu() {
  return (
    <HashRouter>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </HashRouter>
  );
}

export default Menu;
