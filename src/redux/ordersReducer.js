import axios from "axios";

const DELETE_UNPROCESSED_ORDER = 'DELETE-UNPROCESSED-ORDER';

const SET_MUST_FETCH_ORDERS = 'SET_MUST_FETCH_ORDERS';
const FETCH_ORDERS = 'FETCH_ORDERS';
const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING';
const FETCH_ORDERS_REJECTED = 'FETCH_ORDERS_REJECTED';
const FETCH_ORDERS_FULFILLED = 'FETCH_ORDERS_FULFILLED';

let initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,

    orders: [
        {
            id: 1,
            userId: 1,
            status: -1,
            changeDateTime: '2019-03-21 23:00:43.573000',
            comment: "Я глупый коммент №1",
            totalCost: 150.0,
            goods: [
                {
                    goodId: 1,
                    quantity: 2,
                }
            ]
        },
        {
            id: 2,
            userId: 1,
            status: 1,
            changeDateTime: '2019-03-31 23:00:43.573000',
            comment: "Я глупый коммент №2",
            totalCost: 250.0,
            goods: [
                {
                    goodId: 15,
                    quantity: 4,
                },
                {
                    goodId: 13,
                    quantity: 1,
                }
            ]
        },
    ]
};

const ordersReducer = (state = initialState, action) => {
    console.log('ordersReducer');
    console.log('action');
    console.log(action);
    console.log('state');
    console.log(state);

    switch (action.type) {
        case SET_MUST_FETCH_ORDERS:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_ORDERS_PENDING:
            return {
                ...state,
                fetching: false,
                error: null
            };

        case FETCH_ORDERS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_ORDERS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                orders: action.payload.data
            };

        case DELETE_UNPROCESSED_ORDER:
            return deleteUnprocessedOrder(state, action.orderIdx);
        default:
            return state;
    }
};

const deleteUnprocessedOrder = (state, orderIdx) => {
    let stateCopy = {...state};
    stateCopy.orders = [...stateCopy.orders];
    stateCopy.orders.splice(orderIdx, 1);

    return stateCopy;
};


//Action Creators
export const setMustFetchCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_ORDERS,
        newValue: newValue
    }
};

export const fetchCartCreator = () => {
    return {
        type: FETCH_ORDERS,
        payload: axios.get("http://localhost:8080/mipt-shop/orders")
    }
};

export const deleteUnprocessedOrderCreator = (orderIdx) => {
    return {
        type: DELETE_UNPROCESSED_ORDER,
        orderIdx: orderIdx
    }
};

export default ordersReducer;