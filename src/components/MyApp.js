import React from 'react';
import OrderList from "./orders/OrderList";
import Menu from "./menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import GoodList from "./goods/GoodList";

const MyApp = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <div>
                <Route path='/orders' component={OrderList}/>
                <Route path='/goods' component={GoodList}/>
            </div>
        </BrowserRouter>
    );
};

export default MyApp;
