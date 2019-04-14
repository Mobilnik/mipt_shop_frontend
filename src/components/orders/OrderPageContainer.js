import React from 'react';
import {connect} from "react-redux";
import {deleteUnprocessedOrderCreator} from "../../redux/ordersReducer";
import OrderPage from "./OrderPage";


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

let OrderPageContainer = connect(mapStateToProps, mapDispatchToProps)(OrderPage);


export default OrderPageContainer;