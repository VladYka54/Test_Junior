import React from 'react';
import { NavLink, Route, Router } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (

    <div className='app-wrapper-content' >

      <nav className={s.nav}>
        <div className={s.item, s.UkraineHeader}>
          <NavLink to="/Ukraine" activeClassName={s.active}>Ukraine </NavLink>
        </div>

        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/Global" activeClassName={s.active}> Global </NavLink>
        </div>
      </nav>

    </div>

  )
}

export default Header;