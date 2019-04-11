import React from 'react';
import Product from "./item/Product";
import s from "./ProductPage.module.css";


let ProductPage = (props) => {
    if (props.mustFetch) {
        props.fetchProducts();
        props.setMustFetch(false);
    }

    let products = props.products
        .map(product => <Product id={product.id}
                                 name={product.name}
                                 photo={product.photo}
                                 price={product.price}
                                 hidden={product.hidden}/>);

    const onFilterTextChange = (event) => {
        props.filterProducts(event)
    };

    return (
        <div className={`${s.productPageWrapper}`}>

            <textarea className={`${s.productPageSearch}`}
                      value={props.filterText}
                      onChange={onFilterTextChange}
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