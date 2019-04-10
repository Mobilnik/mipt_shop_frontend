import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {applyMiddleware, combineReducers, createStore} from "redux";
import ordersReducer from "./ordersReducer";
import goodsReducer from "./goodsReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    ordersPage: ordersReducer,
    goodsPage: goodsReducer,
    cartPage: cartReducer
});

const middleware = applyMiddleware(promise, thunk);
export let store = createStore(reducers, middleware);

export default store;