import axios from 'axios';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';
const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                fetching: false,
            };
        case FETCH_PRODUCTS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        case FETCH_PRODUCTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload.data,
            };
        //todo add product to cart
    }
    return state;
};

//Action Creators
export const fetchProductsCreator = () => {
    return {
        type: FETCH_PRODUCTS,
        payload: axios.get("http://localhost:8080/mipt-shop/good")
    }
};

export default productsReducer;