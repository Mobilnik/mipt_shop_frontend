import React from 'react';
import GoodList from "./components/goods/GoodList";
import OrderList from "./components/orders/OrderList";
import Cart from "./components/cart/Cart";
import Menu from "./components/menu/Menu";
import {Route} from "react-router-dom";

const MiptShopApp = (props) => {
    return (
        <div>
            <Menu/>
            <div>
                <Route path='/orders' render={() => <OrderList state={props.state.ordersPage}
                                                               dispatch={props.dispatch}/>}
                />
                <Route path='/goods' render={() => <GoodList state={props.state.goodsPage}/>}
                />
                <Route path='/cart' render={() => <Cart state={props.state.cartPage}
                                                        dispatch={props.dispatch}/>}
                />
            </div>
        </div>
    );
};

export default MiptShopApp;