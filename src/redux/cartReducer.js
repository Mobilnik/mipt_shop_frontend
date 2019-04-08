const INCREASE_CART_ITEM_QUANTITY = 'INCREASE-CART-ITEM-QUANTITY';
const DECREASE_CART_ITEM_QUANTITY = 'DECREASE-CART-ITEM-QUANTITY';
const UPDATE_CART_ORDER_COMMENT = 'UPDATE-CART-ORDER-COMMENT';
const CREATE_NEW_ORDER_FROM_CART = 'CREATE-NEW-ORDER-FROM-CART';

let initialState = {
    cartItems: [
        {
            goodId: 1,
            quantity: 2
        },
        {
            goodId: 2,
            quantity: 3
        },
    ],
    cartOrderComment: ""
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_CART_ITEM_QUANTITY:
            increaseCartItemQuantity(state, action.cartItemIdx);
            break;
        case DECREASE_CART_ITEM_QUANTITY:
            decreaseCartItemQuantity(state, action.cartItemIdx);
            break;
        case UPDATE_CART_ORDER_COMMENT:
            updateCartOrderComment(state, action.newText);
            break;
        case CREATE_NEW_ORDER_FROM_CART:
            createNewOrderFromCart(state);
            break;
        default:
            break;
    }
    return state;
};

export default cartReducer;



//Функции, меняющие данные. Только функции, определенные в state, могут его менять
const increaseCartItemQuantity = (state, cartItemIdx) => {
    state.cartItems[cartItemIdx].quantity++;
};

const decreaseCartItemQuantity = (state, cartItemIdx) => {
    state.cartItems[cartItemIdx].quantity--;
};

const updateCartOrderComment = (state, newText) => {
    state.cartOrderComment = newText;
};

const createNewOrderFromCart = (state) => {
    let order = {
        id: 3,
        userId: 1,
        status: 0,
        changeDateTime: new Date().getUTCDate(),
        comment: state.cartOrderComment,
        goods: state.cartItems
    };
    //fixme state.orders.push(order);

    state.cartItems = [];
    state.cartOrderComment = "";
};



//Action Creators
export const increaseCartItemActionCreator = (cartItemIdx) => {
    return {
        type: INCREASE_CART_ITEM_QUANTITY,
        cartItemIdx: cartItemIdx
    }
};

export const decreaseCartItemActionCreator = (cartItemIdx) => {
    return {
        type: DECREASE_CART_ITEM_QUANTITY,
        cartItemIdx: cartItemIdx
    }
};

export const updateCartOrderCommentActionCreator = (newText) => {
    return {
        type: UPDATE_CART_ORDER_COMMENT,
        newText: newText
    }
};

export const createNewOrderActionCreator = () => {
    return {
        type: CREATE_NEW_ORDER_FROM_CART
    }
};