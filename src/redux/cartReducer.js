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
            return increaseCartItemQuantity(state, action.cartItemIdx);
        case DECREASE_CART_ITEM_QUANTITY:
            return decreaseCartItemQuantity(state, action.cartItemIdx);
        case UPDATE_CART_ORDER_COMMENT:
            return updateCartOrderComment(state, action.newText);
        case CREATE_NEW_ORDER_FROM_CART:
            return createNewOrderFromCart(state);
        default:
            return state;
    }
};

export default cartReducer;


//Функции, меняющие данные. Только функции, определенные в state, могут его менять
const increaseCartItemQuantity = (state, cartItemIdx) => {
    let stateCopy = {...state};
    stateCopy.cartItems = [...state.cartItems];
    stateCopy.cartItems[cartItemIdx].quantity++;

    return stateCopy;
};

const decreaseCartItemQuantity = (state, cartItemIdx) => {
    let stateCopy = {...state};
    stateCopy.cartItems = [...state.cartItems];
    stateCopy.cartItems[cartItemIdx].quantity++;

    return stateCopy;
};

const updateCartOrderComment = (state, newText) => {
    let stateCopy = {...state};
    stateCopy.cartOrderComment = newText;

    return stateCopy;
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

    let stateCopy = {...state};

    stateCopy.cartItems = [];
    stateCopy.cartOrderComment = "";

    return stateCopy
};


//Action Creators
export const increaseCartItemCreator = (cartItemIdx) => {
    return {
        type: INCREASE_CART_ITEM_QUANTITY,
        cartItemIdx: cartItemIdx
    }
};

export const decreaseCartItemCreator = (cartItemIdx) => {
    return {
        type: DECREASE_CART_ITEM_QUANTITY,
        cartItemIdx: cartItemIdx
    }
};

export const updateCartOrderCommentCreator = (newText) => {
    return {
        type: UPDATE_CART_ORDER_COMMENT,
        newText: newText
    }
};

export const createNewOrderCreator = () => {
    return {
        type: CREATE_NEW_ORDER_FROM_CART
    }
};