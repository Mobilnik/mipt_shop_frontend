import React from 'react';
import OrderItem from "./OrderItem";

let orderItems = [
    {
        id: 1,
        userId: 1,
        status: 1,
        changeDateTime: '2019-03-21 23:00:43.573000'
    },
    {
        id: 2,
        userId: 1,
        status: 0,
        changeDateTime: '2019-03-31 23:00:43.573000'
    },
];

const OrderList = (props) => {
    return (
        <div>
            <OrderItem id={orderItems[0].id} userId={orderItems[0].userId}
                       status={orderItems[0].status} changeDateTime={orderItems[0].changeDateTime}/>
            <OrderItem id={orderItems[1].id} userId={orderItems[1].userId}
                       status={orderItems[1].status} changeDateTime={orderItems[1].changeDateTime}/>
        </div>
    )
};

export default OrderList;