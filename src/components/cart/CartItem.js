import React from 'react';
import styles from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <div className={`${styles.cartItem} ${styles.textColor}`}>
            index: {props.index}
            <br/>
            goodId: {props.goodId}
            <br/>
            quantity: {props.quantity}
            <br/>
            <button onClick={() => props.increaseCartItemQuantity(props.index)}>
                +
            </button>
            <button onClick={() => props.decreaseCartItemQuantity(props.index)}>
                -
            </button>
            <br/>
        </div>
    );
};

export default CartItem;