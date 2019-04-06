import React from 'react';
import GoodList from "./goods/GoodList";
import OrderList from "./orders/OrderList";
import Cart from "./cart/Cart";
import Menu from "./menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";

const MyApp = (props) => {
    return (
        <BrowserRouter>
            <Menu/>
            <div>
                <Route path='/orders' render={() => <OrderList state = {props.state.ordersPage} />}/>
                <Route path='/goods' render={() => <GoodList state = {props.state.goodsPage} />}/>
                <Route path='/cart' render={() => <Cart state = {props.state.cartPage} />}/>
            </div>
        </BrowserRouter>
    );
};

export default MyApp;
