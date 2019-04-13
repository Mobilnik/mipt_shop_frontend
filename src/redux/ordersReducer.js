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
    console.log('ordersReducer');
    console.log('action');
    console.log(action);
    console.log('state');
    console.log(state);

    switch (action.type) {
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
export const deleteUnprocessedOrderCreator = (orderIdx) => {
    return {
        type: DELETE_UNPROCESSED_ORDER,
        orderIdx: orderIdx
    }
};

export default ordersReducer;