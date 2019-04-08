import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import MiptShopApp from "./MiptShopApp";
import store from "./redux/redux-store.js";


const rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <MiptShopApp state={store.getState()}
                         dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});