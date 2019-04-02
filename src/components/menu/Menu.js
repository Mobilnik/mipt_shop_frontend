import React from 'react';
import OrderList from "../orders/OrderList";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <div>
                <NavLink to='/orders'> Orders </NavLink>
            </div>
            <div>
                <NavLink to='/goods'> Goods </NavLink>
            </div>
        </nav>
    )
};

export default Menu;