import {combineReducers, createStore} from "redux";
import ordersReducer from "./ordersReducer";
import goodsReducer from "./goodsReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    ordersPage: ordersReducer,
    goodsPage: goodsReducer,
    cartPage: cartReducer
});

export let store = createStore(reducers);

export default store;