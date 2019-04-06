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

let orders = orderItems
    .map(order => <OrderItem id={order.id}
                             userId={order.userId}
                             status={order.status}
                             changeDateTime={order.changeDateTime}/>);


const OrderList = (props) => {
    return (
        <div>
            {orders}
        </div>
    )
};

export default OrderList;