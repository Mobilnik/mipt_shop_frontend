import axios from 'axios';

const FETCH_GOODS = 'FETCH_GOODS';
const FETCH_GOODS_PENDING = 'FETCH_GOODS_PENDING';
const FETCH_GOODS_REJECTED = 'FETCH_GOODS_REJECTED';
const FETCH_GOODS_FULFILLED = 'FETCH_GOODS_FULFILLED';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    goods: [
        {
            id: 1,
            name: "Bread",
            photo: "photo 1",
            price: 28.0
        },
        {
            id: 2,
            name: "Milk",
            photo: "photo 2",
            price: 45.6
        },
    ]
};

const goodsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case FETCH_GOODS_PENDING:
            console.log('trying to send http get for goods');
            newState = {
                ...state,
                fetching: false,
                error: action.error
            };
            console.log('new state');
            console.log(newState);
            return newState;
        case FETCH_GOODS_REJECTED:
            console.log('facing an error');
            newState = {
                ...state,
                fetching: false,
                error: action.error
            };
            console.log('new state');
            console.log(newState);
            return newState;
        case FETCH_GOODS_FULFILLED:
            console.log('trying to receive');
            newState = {
                ...state,
                fetching: false,
                fetched: true,
                goods: action.payload.data,
            };
            console.log('new state');
            console.log(newState);
            return newState;
        //todo add good to cart
        default:
            break;
    }
    console.log('retuning state without changes');
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