const DELETE_UNPROCESSED_ORDER = 'DELETE-UNPROCESSED-ORDER';

let initialState = {
    orders: [
        {
            id: 1,
            userId: 1,
            status: 0,
            changeDateTime: '2019-03-21 23:00:43.573000',
            comment: "Я глупый коммент №1",
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
