import React from 'react';
import styles from './Product.module.css'

const Product = (props) => {

    if (props.hidden) {
        return null;
    }

    const myFunction = () => {
        alert("Fix me!")
    };

    return (
        <div className={`${styles.productItemWrapper}`}>
            <div className={`${styles.productItemPhoto}`}>
                Photos support will soon be provided
            </div>

            <div className={`${styles.productItemDescription}`}>
                {props.name}
                <div className={`${styles.price}`}>
                    ₽{props.price}
                </div>
            </div>
            <button className={`${styles.productItemAddButton}`}>
                <img src="./../../../../public/images/cart.png" onClick={myFunction}/>
            </button>
        </div>
    )
};

export default Product;