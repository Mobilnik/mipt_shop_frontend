import React from 'react';
import {connect} from "react-redux";
import {deleteUnacceptedOrderCreator} from "../../redux/ordersReducer";
import OrderPage from "./OrderPage";


let mapStateToProps = (state) => {
    return {
        orders: state.ordersPage.orders,
        cartOrderComment: state.cartPage.cartOrderComment
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteUnprocessedOrder: (orderId) => {
            dispatch(deleteUnacceptedOrderCreator(orderId))
        }
    };
};

let OrderPageContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPage);


export default OrderPageContainer;