import React from 'react';
import OrderItem from "./OrderItem";

const OrderList = (props) => {
    let orders = props.state.orders
        .map(order => <OrderItem id={order.id}
                                 userId={order.userId}
                                 status={order.status}
                                 changeDateTime={order.changeDateTime}/>);

    return (
        <div>
            {orders}
        </div>
    )
};

export default OrderList;