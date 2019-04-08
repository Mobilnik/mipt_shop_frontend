import React from 'react';
import styles from './CartItem.module.css'

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
            <button onClick={() => props.dispatch({type: 'INCREASE-CART-ITEM-QUANTITY', cartItemIdx: props.index})}>
                +
            </button>
            <button onClick={() => props.dispatch({type: 'DECREASE-CART-ITEM-QUANTITY', cartItemIdx: props.index})}>
                -
            </button>
            <br/>
        </div>
    );
};

export default CartItem;