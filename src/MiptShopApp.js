import React from 'react';
import Menu from "./components/menu/Menu";
import {Route} from "react-router-dom";
import GoodPageContainer from "./components/goods/GoodPageContainer";
import OrderListContainer from "./components/orders/OrderListContainer";
import CartContainer from "./components/cart/CartContainer";
import s from './MiptShopApp.module.css'
import GoodPageFilterSidebar from "./components/goods/GoodPageFilterSidebar";

const MiptShopApp = (props) => {
    return (
        <div className={`${s.appWrapper}`}>

            <header className={`${s.appWrapperHeader}`}>
                <Menu/>
            </header>

            <div className={`${s.appWrapperSidebar}`}>
                <Route path='/goods' render={() => <GoodPageFilterSidebar store={props.store}/>}
                />
            </div>

            <div>
                <Route path='/goods' render={() => <GoodPageContainer store={props.store}/>}
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
