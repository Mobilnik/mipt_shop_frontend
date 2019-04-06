import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {
    let cartItems = props.state.cartItems
        .map(cartItem => <CartItem goodId={cartItem.quantity}
                                   quantity={cartItem.quantity}/>);

    return (
        <div>
            {cartItems}
        </div>
    )
};

export default Cart;