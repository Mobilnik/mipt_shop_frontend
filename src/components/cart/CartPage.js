import React from 'react';
import CartItem from "./item/CartItem";

const CartPage = (props) => {
    if (props.mustFetch) {
        props.fetchCart();
        props.setMustFetch(false);
    }

    let cartItems = props.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            productId={cartItem.productId}
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

export default CartPage;