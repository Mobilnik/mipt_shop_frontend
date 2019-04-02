import React from 'react';
import OrderList from ".//orders/OrderList";
import Menu from ".//menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";

const MyApp = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <div>
                <Route path='orders' component={OrderList}/>
            </div>
        </BrowserRouter>
    );
};

export default MyApp;
