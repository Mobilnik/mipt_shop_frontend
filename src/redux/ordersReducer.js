const CREATE_NEW_ORDER_FROM_CART = 'CREATE-NEW-ORDER-FROM-CART';
const DELETE_UNPROCESSED_ORDER = 'DELETE-UNPROCESSED-ORDER';


const ordersReducer = (state, action) => {
    switch (action.type) {
        case DELETE_UNPROCESSED_ORDER:
            deleteUnprocessedOrder(state, action.orderIdx);
            break;
        default:
            break;
    }
    return state;
};

export default ordersReducer;



const deleteUnprocessedOrder = (state, orderIdx) => {
    state.orders.splice(orderIdx, 1);
};


//Action Creators
export const deleteUnprocessedOrderActionCreator = (orderIdx) => {
    return {
        type: DELETE_UNPROCESSED_ORDER,
        orderIdx: orderIdx
    }
};
