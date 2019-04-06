import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {

    let cartItems = props.state.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            goodId={cartItem.goodId}
                                            quantity={cartItem.quantity}
                                            increaseCartItemQuantity={props.increaseCartItemQuantity}
                                            decreaseCartItemQuantity={props.decreaseCartItemQuantity}/>);

    let cartOrderComment = React.createRef();

    const onCartOrderCommentChange = () => {
        let text = cartOrderComment.current.value;
        props.updateCartOrderComment(text)
    };

    const saveCartToOrder = () => {
        props.createNewOrderFromCart();
    };

    return (
        <div>
            {cartItems}
            <textarea ref={cartOrderComment}
                      placeholder={'Order comment'}
                      onChange={onCartOrderCommentChange}
                      value={props.state.cartOrderComment}/>
            <button onClick={saveCartToOrder}>Save</button>
        </div>
    )
};

export default Cart;