import React from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {

    let cartItems = props.state.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            goodId={cartItem.goodId}
                                            quantity={cartItem.quantity}
                                            dispatch={props.dispatch}/>);

    let cartOrderComment = React.createRef();

    const onCartOrderCommentChange = () => {
        let newText = cartOrderComment.current.value;
        props.dispatch({type: 'UPDATE-CART-ORDER-COMMENT', newText: newText})
    };

    const saveCartToOrder = () => {
        props.dispatch({type: 'CREATE-NEW-ORDER-FROM-CART'});
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