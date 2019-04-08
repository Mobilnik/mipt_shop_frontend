import React from 'react';
import CartItem from "./CartItem";
import {createNewOrderActionCreator, updateCartOrderCommentActionCreator} from "../../redux/state";

const Cart = (props) => {

    let cartItems = props.state.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            goodId={cartItem.goodId}
                                            quantity={cartItem.quantity}
                                            dispatch={props.dispatch}/>);

    let cartOrderComment = React.createRef();

    const onCartOrderCommentChange = () => {
        let newText = cartOrderComment.current.value;
        props.dispatch(updateCartOrderCommentActionCreator(newText))
    };

    const saveCartToOrder = () => {
        props.dispatch(createNewOrderActionCreator());
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