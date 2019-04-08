import React from 'react';
import CartItem from "./CartItem";
import {createNewOrderActionCreator, updateCartOrderCommentActionCreator} from "../../redux/state";

const Cart = (props) => {

    let cartItems = props.state.cartItems
        .map((cartItem, index) => <CartItem index={index}
                                            goodId={cartItem.goodId}
                                            quantity={cartItem.quantity}
                                            dispatch={props.dispatch}/>);

    const onCartOrderCommentChange = (event) => {
        let newText = event.target.value;
        props.dispatch(updateCartOrderCommentActionCreator(newText))
    };

    const saveCartToOrder = () => {
        props.dispatch(createNewOrderActionCreator());
    };

    return (
        <div>
            {cartItems}
            <textarea value={props.state.cartOrderComment}
                      onChange={onCartOrderCommentChange}
                      placeholder={'Order comment'}
            />
            <button onClick={saveCartToOrder}>Save</button>
        </div>
    )
};

export default Cart;