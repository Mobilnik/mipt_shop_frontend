import React from 'react';
import s from './Order.module.css'
import OrderStatus from "./OrderStatus";
import CancelOrderButton from "./cancel/CancelOrderButton";

const Order = (props) => {
    console.log(props);
    return (
        <div className={`${s.orderWrapper}`}>

            <div className={s.orderId}>
                Order #{props.id}
            </div>

            <div className={s.orderDateUpdated}>
                Status updated: {props.changeDateTime}
            </div>

            <div className={s.orderTotalCost}>
                ₽{props.totalCost}
            </div>

            <div className={s.orderStatus}>
                <OrderStatus status={props.status}/>
            </div>

            <CancelOrderButton id={props.id}
                               status={props.status}
                               deleteUnprocessedOrder={props.deleteUnprocessedOrder}
            />

            <div className={s.orderComment}>
                Comment: {props.comment}
            </div>


        </div>
    )
};

export default Order;