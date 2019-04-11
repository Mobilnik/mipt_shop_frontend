import {applyMiddleware, combineReducers, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import ordersReducer from "./ordersReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    ordersPage: ordersReducer,
    productsPage: productsReducer,
    cartPage: cartReducer
});

const middleware = applyMiddleware(promise, thunk);
export let store = createStore(reducers, middleware);

export default store;