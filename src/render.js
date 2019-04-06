import ReactDOM from "react-dom";
import MiptShopApp from "./MiptShopApp";
import state, {decreaseCartItemQuantity, increaseCartItemQuantity} from "./redux/state";
import React from "react";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <MiptShopApp state={state}
                         increaseCartItemQuantity={increaseCartItemQuantity}
                         decreaseCartItemQuantity={decreaseCartItemQuantity}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
