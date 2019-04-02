import React from 'react';
import styles from './GoodItem.module.css'

const GoodItem = (props) => {
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
            <br/>
        </div>
    )
};

export default GoodItem;