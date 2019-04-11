import React from 'react';
import styles from './Product.module.css'

const Product = (props) => {

    if (props.hidden) {
        return null;
    }

    return (
        <div className={`${styles.productItem} ${styles.textColor}`}>
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