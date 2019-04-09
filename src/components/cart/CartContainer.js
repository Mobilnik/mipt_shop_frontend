import React from 'react';
import {
    updateCartOrderCommentCreator,
    createNewOrderCreator,
    decreaseCartItemCreator,
    increaseCartItemCreator,
} from "../../redux/cartReducer";
import Cart from "./Cart";
import {connect} from "react-redux";

//При любых изменениях connect пытается перерисовать этот объект.
//Проверка на наличие изменений проводится через сравнение ссылок на объекты.
//Если ссылки равны, объект не будет перерисован. Поэтому нам нужны копии (оператор ...)
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
            dispatch(updateCartOrderCommentCreator(newText))
        },
        saveCartAsOrder: () => {
            dispatch(createNewOrderCreator());
        },
        increaseCartItemQuantity: (cartItemIdx) => {
            dispatch(increaseCartItemCreator(cartItemIdx));
        },
        decreaseCartItemQuantity: (cartItemIdx) => {
            dispatch(decreaseCartItemCreator(cartItemIdx));
        }
    };
};


let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;