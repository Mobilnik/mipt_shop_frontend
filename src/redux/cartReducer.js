import axios from "axios";

const SET_MUST_FETCH = 'SET_MUST_FETCH';
const FETCH_CART = 'FETCH_CART';
const FETCH_CART_PENDING = 'FETCH_CART_PENDING';
const FETCH_CART_REJECTED = 'FETCH_CART_REJECTED';
const FETCH_CART_FULFILLED = 'FETCH_CART_FULFILLED';

const INCREASE_CART_ITEM_QUANTITY = 'INCREASE-CART-ITEM-QUANTITY';
const DECREASE_CART_ITEM_QUANTITY = 'DECREASE-CART-ITEM-QUANTITY';
const UPDATE_CART_ORDER_COMMENT = 'UPDATE-CART-ORDER-COMMENT';
const CREATE_NEW_ORDER_FROM_CART = 'CREATE-NEW-ORDER-FROM-CART';

const initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,
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
        case SET_MUST_FETCH:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_CART_PENDING:
            return {
                ...state,
                fetching: false,
            };

        case FETCH_CART_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_CART_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                cartItems: action.payload.data.products
            };


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
    //fixme
    /*let order = {
        id: 3,
        userId: 1,
        status: 0,
        changeDateTime: new Date().getUTCDate(),
        comment: state.cartOrderComment,
        products: state.cartItems
    };
     state.orders.push(order);*/

    let stateCopy = {...state};

    stateCopy.cartItems = [];
    stateCopy.cartOrderComment = "";

    return stateCopy
};


//Action Creators
export const setMustFetchCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH,
        newValue: newValue
    }
};

export const fetchCartCreator = () => {
    return {
        type: FETCH_CART,
        payload: axios.get("http://localhost:8080/mipt-shop/order/cart")
    }
};

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