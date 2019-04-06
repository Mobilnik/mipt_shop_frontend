import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {
    let cartItems = props.state.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                   goodId={cartItem.goodId}
                                   quantity={cartItem.quantity}
                                   increaseCartItemQuantity={props.increaseCartItemQuantity}
                                   decreaseCartItemQuantity={props.decreaseCartItemQuantity}/>);

    return (
        <div>
            {cartItems}
        </div>
    )
};

export default Cart;