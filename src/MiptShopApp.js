import React from 'react';
import Menu from "./components/menu/Menu";
import {Route} from "react-router-dom";
import GoodListContainer from "./components/goods/GoodListContainer";
import OrderListContainer from "./components/orders/OrderListContainer";
import CartContainer from "./components/cart/CartContainer";

const MiptShopApp = (props) => {
    return (
        <div>
            <Menu/>
            <div>
                <Route path='/goods' render={() => <GoodListContainer store={props.store}/>}
                />
                <Route path='/orders' render={() => <OrderListContainer store={props.store}/>}
                />
                <Route path='/cart' render={() => <CartContainer store={props.store}/>}
                />
            </div>
        </div>
    );
};

export default MiptShopApp;
