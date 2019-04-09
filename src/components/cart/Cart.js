import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {

    let cartItems = props.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            goodId={cartItem.goodId}
                                            quantity={cartItem.quantity}
                                            increaseCartItemQuantity={props.increaseCartItemQuantity}
                                            decreaseCartItemQuantity={props.decreaseCartItemQuantity}/>);

    const onCartOrderCommentChange = (event) => {
        props.changeOrderComment(event);
    };

    const saveCartAsOrder = () => {
        props.saveCartAsOrder();
    };

    return (
        <div>
            {cartItems}
            <textarea value={props.cartOrderComment}
                      onChange={onCartOrderCommentChange}
                      placeholder={'Order comment'}
            />
            <button onClick={saveCartAsOrder}>Save</button>
        </div>
    )
};

export default Cart;