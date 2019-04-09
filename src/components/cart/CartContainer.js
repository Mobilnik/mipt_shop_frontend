import React from 'react';
import {
    updateCartOrderCommentActionCreator,
    createNewOrderActionCreator,
    decreaseCartItemActionCreator,
    increaseCartItemActionCreator,
} from "../../redux/cartReducer";
import Cart from "./Cart";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        cartItems: state.cartPage.cartItems,
        cartOrderComment: state.cartPage.cartOrderComment
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeOrderComment: (event) => {
            let newText = event.target.value;
            dispatch(updateCartOrderCommentActionCreator(newText))
        },
        saveCartAsOrder: () => {
            dispatch(createNewOrderActionCreator());
        },
        increaseCartItemQuantity: (cartItemIdx) => {
            dispatch(increaseCartItemActionCreator(cartItemIdx));
        },
        decreaseCartItemQuantity: (cartItemIdx) => {
            dispatch(decreaseCartItemActionCreator(cartItemIdx));
        }
    };
};


let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;