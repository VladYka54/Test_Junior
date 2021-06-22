import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <NavLink to={"/Ukraine"}>Ukraine</NavLink>
      <NavLink to={"/World"}>World</NavLink>
    </header>
  );
};

export default Header;
