import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store.js";
import MiptShopApp from "./MiptShopApp";

const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <MiptShopApp/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree();