import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import MiptShopApp from "./MiptShopApp";
import state, {
    subscribe,
    createNewOrderFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
    updateCartOrderComment
} from "./redux/state.js";


const rerenderEntireTree = () => {

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

rerenderEntireTree();
subscribe(rerenderEntireTree);