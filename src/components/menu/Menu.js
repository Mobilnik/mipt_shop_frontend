import React from 'react';
import s from "./Menu.module.css"
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <div className={`${s.menu}`}>
                <div className={`${s.menuItem}`}>
                    <NavLink to='/profile' activeClassName={s.activeLink}> Profile </NavLink>
                </div>
                <div className={`${s.menuItem}`}>
                    <NavLink to='/orders' activeClassName={s.activeLink}> Orders </NavLink>
                </div>
                <div className={`${s.menuItem}`}>
                    <NavLink to='/goods' activeClassName={s.activeLink}> Products </NavLink>
                </div>

                <div className={`${s.menuItem}`}>
                    <NavLink to='/cart' activeClassName={s.activeLink}> Cart </NavLink>
                </div>

                <div className={`${s.menuItem}`}>
                    <NavLink to='/logout'> Logout </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Menu;