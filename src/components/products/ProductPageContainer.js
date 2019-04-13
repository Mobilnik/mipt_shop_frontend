import React from 'react';
import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import {fetchProductsCreator, filterProductsCreator, setMustFetchCreator} from "../../redux/productsReducer";

let mapStateToProps = (state) => {
    return {
        filterText: state.productsPage.filterText,
        products: state.productsPage.products,
        mustFetch: state.productsPage.mustFetch
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMustFetch: (newValue) => {
          dispatch(setMustFetchCreator(newValue));
        },
        fetchProducts: () => {
            dispatch(fetchProductsCreator());
        },
        filterProducts: (event) => {
            let newText = event.target.value;
            dispatch(filterProductsCreator(newText));
        }
    };
};

let ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;