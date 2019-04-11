import React from 'react';
import Product from "./item/Product";
import s from "./ProductPage.module.css";


let ProductPage = (props) => {
    props.fetchProducts();

    let products = props.products
        .map(product => <Product id={product.id}
                                 name={product.name}
                                 photo={product.photo}
                                 price={product.price}/>);

    return (

        <div className={`${s.productPageWrapper}`}>

            <textarea className={`${s.productPageSearch}`}
                      placeholder={'Enter a product name'}
                      maxLength={20}
            />

            <div className={`${s.productPageGrid}`}>
                {products}
            </div>

        </div>
    );

};

export default ProductPage;