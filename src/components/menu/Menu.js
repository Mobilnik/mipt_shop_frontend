import React from 'react';
import {NavLink} from "react-router-dom";

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