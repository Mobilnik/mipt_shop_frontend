import React from 'react';
import styles from './Product.module.css'

const Product = (props) => {
    return (
        <div className={`${styles.productItem} ${styles.textColor}`}>
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

export default Product;