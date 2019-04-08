import React from 'react';
import styles from './CartItem.module.css'
import {decreaseCartItemActionCreator, increaseCartItemActionCreator} from "../../redux/cartReducer";

const CartItem = (props) => {
    //React связывает DOM и VirtualDOM
    return (
        <div className={`${styles.cartItem} ${styles.textColor}`}>
            index: {props.index}
            <br/>
            goodId: {props.goodId}
            <br/>
            quantity: {props.quantity}
            <br/>
            <button onClick={() => props.dispatch(increaseCartItemActionCreator(props.index))}>
                +
            </button>
            <button onClick={() => props.dispatch(decreaseCartItemActionCreator(props.index))}>
                -
            </button>
            <br/>
        </div>
    );
};

export default CartItem;