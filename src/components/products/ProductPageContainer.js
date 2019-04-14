import React from 'react';
import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import {fetchProductsCreator, updateProductFilterTextCreator, setMustFetchCreator} from "../../redux/productsReducer";

let mapStateToProps = (state) => {
    return {
        filterText: state.productsPage.filters.filterText,
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
        updateProductFilterText: (newValue) => {
            dispatch(updateProductFilterTextCreator(newValue));
        }
    };
};

let ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;