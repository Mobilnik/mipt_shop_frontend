import React from 'react';
import styles from './CartItem.module.css'

const CartItem = (props) => {
    //React связывает DOM и VirtualDOM
   /* const increaseQuanty = () => {
        props.quantity++;
    };

    const decreaseQuanty = () => {
        props.quantity++;
    };*/

    return (
        <div className={`${styles.cartItem} ${styles.textColor}`}>
            goodId: {props.goodId}
            <br/>
            quantity: {props.quantity}
            <br/>
            <button onClick={increaseQuanty}>+</button>
            <button onClick={decreaseQuanty}>-</button>
            <br/>
        </div>
    );
};

export default CartItem;