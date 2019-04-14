import axios from "axios";

const SET_MUST_FETCH_CART = 'SET_MUST_FETCH_CART';
const FETCH_CART = 'FETCH_CART';
const FETCH_CART_PENDING = 'FETCH_CART_PENDING';
const FETCH_CART_REJECTED = 'FETCH_CART_REJECTED';
const FETCH_CART_FULFILLED = 'FETCH_CART_FULFILLED';

const UPDATE_CART_ITEM_QUANTITY = 'UPDATE-CART-ITEM-QUANTITY';
const DELETE_CART_ITEM = 'DELETE-CART-ITEM';
const UPDATE_CART_ORDER_COMMENT = 'UPDATE-CART-ORDER-COMMENT';
const CREATE_NEW_ORDER_FROM_CART = 'CREATE-NEW-ORDER-FROM-CART';

const initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,
    cartItems: [],
    cartOrderComment: "",
    totalCost: 0
};

const cartReducer = (state = initialState, action) => {
    if (!action.type.startsWith('@@redux/')) {
        console.log('cartReducer');
        console.log('action');
        console.log(action);
        console.log('state');
        console.log(state);
    }

    switch (action.type) {
        case SET_MUST_FETCH_CART:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_CART_PENDING:
            return {
                ...state,
                fetching: false,
                error: null
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
                cartItems: action.payload.data.products,
                totalCost: calculateTotalCost(action.payload.data.products)
            };


        case UPDATE_CART_ITEM_QUANTITY:
            return updateCartItemQuantity(state, action.productId, action.newValue);
        case DELETE_CART_ITEM:
            return deleteCartItem(state, action.productId);
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
const updateCartItemQuantity = (state, productId, newValue) => {
    if (!isCorrectIntegerOrEmpty(newValue)) {
        return state;
    }

    let stateCopy = {...state};
    stateCopy.cartItems = [...state.cartItems];

    let itemToChange = findByProductId(stateCopy.cartItems, productId);
    if (newValue === "") {
        itemToChange.quantity = 1;
    } else {
        itemToChange.quantity = parseInt(newValue, 10);
    }

    stateCopy.totalCost = calculateTotalCost(stateCopy.cartItems);

    return stateCopy;
};

const calculateTotalCost = (cartItems) => {
    let totalCost = 0;
    cartItems.forEach(p => {
        totalCost += p.productPrice * p.quantity;
    });
    return totalCost;
};

const deleteCartItem = (state, productId) => {
    let stateCopy = {...state};
    stateCopy.cartItems = [...state.cartItems];

    let itemToDelete = findByProductId(stateCopy.cartItems, productId);
    let itemToDeleteIndex = stateCopy.cartItems.indexOf(itemToDelete);

    stateCopy.cartItems.splice(itemToDeleteIndex, 1);
    stateCopy.totalCost = calculateTotalCost(stateCopy.cartItems);
    return stateCopy;
};

const findByProductId = (array, productId) => {
    return array.filter(item => item.productId === productId)[0];
};

const isCorrectIntegerOrEmpty = (stringToCheck) => {
    if (stringToCheck === "") {
        return true;
    }
    return /^\+?(0|[1-9]\d*)$/.test(stringToCheck);
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
        type: SET_MUST_FETCH_CART,
        newValue: newValue
    }
};

export const fetchCartCreator = () => {
    return {
        type: FETCH_CART,
        payload: axios.get("http://localhost:8080/mipt-shop/orders/cart")
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

export const updateCartItemQuantityCreator = (productId, newValue) => {
    return {
        type: UPDATE_CART_ITEM_QUANTITY,
        productId: productId,
        newValue: newValue
    }
};
export const deleteCartItemCreator = (productId) => {
    return {
        type: DELETE_CART_ITEM,
        productId: productId,
    }
};