import React from 'react';
import styles from './Good.module.css'

const Good = (props) => {
    return (
        <div className={`${styles.goodItem} ${styles.textColor}`}>
            id: {props.id}
            <br/>
            name: {props.name}
            <br/>
            photo: {props.photo}
            <br/>
            price: {props.price}
            <br/>
            <br/>
        </div>
    )
};

export default Good;