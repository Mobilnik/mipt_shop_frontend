import React from 'react';
import OrderItem from "./OrderItem";

const OrderList = (props) => {
    let orders = props.orders
        .map((order, index) => <OrderItem id={order.id}
                                          index={index}
                                          userId={order.userId}
                                          status={order.status}
                                          changeDateTime={order.changeDateTime}
                                          comment={order.comment}
                                          deleteUnprocessedOrder={props.deleteUnprocessedOrder}/>);

    return (
        <div>
            {orders}
        </div>
    )
};

export default OrderList;