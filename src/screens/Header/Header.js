import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={style.header}>    
    <div className={style.header__links}>  
      <NavLink to={"/Ukraine"} activeClassName={style.active} className={style.header__links__item}>Ukraine</NavLink>
      <NavLink to={"/World"} activeClassName={style.active} className={style.header__links__item}>World</NavLink>
      </div>
    </header>
  );
};

export default Header;
