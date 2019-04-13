import React from 'react';
import {
    updateCartOrderCommentCreator,
    createNewOrderCreator,
    updateCartItemQuantityCreator,
    deleteCartItemCreator,
    fetchCartCreator,
    setMustFetchCreator
} from "../../redux/cartReducer";
import CartPage from "./CartPage";
import {connect} from "react-redux";
import {push} from "react-router-redux";

//При любых изменениях connect пытается перерисовать этот объект.
//Проверка на наличие изменений проводится через сравнение ссылок на объекты.
//Если ссылки равны, объект не будет перерисован. Поэтому нам нужны копии (оператор ...)
let mapStateToProps = (state) => {
    return {
        cartItems: state.cartPage.cartItems,
        cartOrderComment: state.cartPage.cartOrderComment,
        mustFetch: state.cartPage.mustFetch
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
            dispatch(setMustFetchCreator(newValue));
        },
        fetchCart: () => {
            dispatch(fetchCartCreator());
        },

        updateCartItemQuantity: (productId, event) => {
            let newValue = event.target.value;
            dispatch(updateCartItemQuantityCreator(productId, newValue));
        },

        deleteCartItem: (productId) => {
            dispatch(deleteCartItemCreator(productId));
        },

        changeOrderComment: (event) => {
            let newText = event.target.value;
            dispatch(updateCartOrderCommentCreator(newText))
        },

        saveCartAsOrder: () => {
            dispatch(createNewOrderCreator());
            dispatch(push('/orders'))
        }
    };
};


let CartPageContainer = connect(mapStateToProps, mapDispatchToProps)(CartPage);

export default CartPageContainer;