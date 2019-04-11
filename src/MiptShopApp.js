import React from 'react';
import Menu from "./components/menu/Menu";
import {Route} from "react-router-dom";
import ProductPageContainer from "./components/products/ProductPageContainer";
import OrderListContainer from "./components/orders/OrderListContainer";
import CartContainer from "./components/cart/CartContainer";
import s from './MiptShopApp.module.css'
import ProductPageSidebar from "./components/products/ProductPageSidebar";

const MiptShopApp = (props) => {
    return (
        <div className={`${s.appWrapper}`}>

            <header className={`${s.appHeader}`}>
                <Menu/>
            </header>

            <div className={`${s.appSidebar}`}>
                <Route path='/products' render={() => <ProductPageSidebar store={props.store}/>}
                />
            </div>

            <div>
                <Route path='/products' render={() => <ProductPageContainer store={props.store}/>}
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
