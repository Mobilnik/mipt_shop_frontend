import React from 'react';
import styles from './OrderItem.module.css'
import DeleteUnprocessedOrderButton from "./DeleteUnprocessedOrderButton";

const OrderItem = (props) => {
    return (
        <div className={`${styles.orderItem} ${styles.textColor}`}>
            id: {props.id}
            <br/>
            userId: {props.userId}
            <br/>
            status: {props.status}
            <br/>
            changeDateTime: {props.changeDateTime}
            <br/>
            comment: {props.comment}
            <br/>
            <DeleteUnprocessedOrderButton status={props.status}
                                          deleteUnprocessedOrder={props.deleteUnprocessedOrder}
            />
            <br/>
        </div>
    )
};

export default OrderItem;