import React from 'react';
import OrderList from "../orders/OrderList";
import {BrowserRouter, Route} from "react-router-dom";

const Menu = () => {
    return (
        <BrowserRouter>
            <Route path='orders' component={OrderList}/>
        </BrowserRouter>
    )
};

export default Menu;