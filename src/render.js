import ReactDOM from "react-dom";
import MiptShopApp from "./MiptShopApp";
import state, {decreaseCartItemQuantity, increaseCartItemQuantity, updateCartOrderComment, createNewOrderFromCart} from "./redux/state";
import React from "react";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <MiptShopApp state={state}
                         increaseCartItemQuantity={increaseCartItemQuantity}
                         decreaseCartItemQuantity={decreaseCartItemQuantity}
                         updateCartOrderComment={updateCartOrderComment}
                         createNewOrderFromCart={createNewOrderFromCart}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
