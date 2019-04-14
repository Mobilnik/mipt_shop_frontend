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

    orders: []
};

const ordersReducer = (state = initialState, action) => {
    if (!action.type.startsWith('@@redux/')) {
        console.log('ordersReducer');
        console.log('action');
        console.log(action);
        console.log('state');
        console.log(state);
    }

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
            console.log('payload');
            console.log(action.payload.data);
            let orders = prepareOrdersToDisplay(action.payload.data);
            return {
                ...state,
                fetching: false,
                fetched: true,
                orders: orders
            };

        case DELETE_UNPROCESSED_ORDER:
            return deleteUnprocessedOrder(state, action.orderId);
        default:
            return state;
    }
};

const prepareOrdersToDisplay = (orderDtos) => {
    orderDtos.forEach(o => {
        o.updatedDateTime = new Date(o.updatedDateTime + "Z"); //начинаем воспринимать пришедшее время как время в UTC
        o.totalCost = calculateTotalCost(o.products);
    });
    return orderDtos;
};

const calculateTotalCost = (products) => {
    let totalCost = 0;
    products.forEach(p => {
        totalCost += p.productPrice * p.quantity;
    });
    return totalCost;
};


const deleteUnprocessedOrder = (state, orderId) => {
    let stateCopy = {...state};
    stateCopy.orders = [...state.orders];

    let orderToDelete = findByOrderId(stateCopy.orders, orderId);
    let orderToDeleteIndex = stateCopy.orders.indexOf(orderToDelete);

    stateCopy.orders.splice(orderToDeleteIndex, 1);
    return stateCopy;
};

const findByOrderId = (array, orderId) => {
    return array.filter(item => item.id === orderId)[0];
};

//Action Creators
export const setMustFetchCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_ORDERS,
        newValue: newValue
    }
};

export const fetchOrdersCreator = () => {
    return {
        type: FETCH_ORDERS,
        payload: axios.get("http://localhost:8080/mipt-shop/orders")
    }
};

export const deleteUnacceptedOrderCreator = (orderId) => {
    return {
        type: DELETE_UNPROCESSED_ORDER,
        orderId: orderId
    }
};

export default ordersReducer;