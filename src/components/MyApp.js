import React from 'react';
import OrderList from "./orders/OrderList";
import Menu from "./menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import GoodList from "./goods/GoodList";

const MyApp = (props) => {
    return (
        <BrowserRouter>
            <Menu/>
            <div>
                <Route path='/orders' render={() => <OrderList state = {props.state.ordersPage} />}/>
                <Route path='/goods' render={() => <GoodList state = {props.state.goodsPage} />}/>
            </div>
        </BrowserRouter>
    );
};

export default MyApp;
