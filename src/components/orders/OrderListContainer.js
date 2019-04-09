import React from 'react';
import {connect} from "react-redux";
import {deleteUnprocessedOrderCreator} from "../../redux/ordersReducer";
import OrderList from "./OrderList";


let mapStateToProps = (state) => {
    return {
        orders: state.ordersPage.orders,
        cartOrderComment: state.cartPage.cartOrderComment
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteUnprocessedOrder: (orderIdx) => {
            dispatch(deleteUnprocessedOrderCreator(orderIdx))
        }
    };
};

let OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);


export default OrderListContainer;