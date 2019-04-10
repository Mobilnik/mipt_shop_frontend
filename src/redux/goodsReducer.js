import axios from 'axios';

const FETCH_GOODS = 'FETCH_GOODS';
const FETCH_GOODS_PENDING = 'FETCH_GOODS_PENDING';
const FETCH_GOODS_REJECTED = 'FETCH_GOODS_REJECTED';
const FETCH_GOODS_FULFILLED = 'FETCH_GOODS_FULFILLED';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    goods: []
};

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS_PENDING:
            return {
                ...state,
                fetching: false,
            };
        case FETCH_GOODS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        case FETCH_GOODS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                goods: action.payload.data,
            };
        //todo add good to cart
    }
    return state;
};

//Action Creators
export const fetchGoodsCreator = () => {
    return {
        type: FETCH_GOODS,
        payload: axios.get("http://localhost:8080/mipt-shop/good")
    }
};

export default goodsReducer;