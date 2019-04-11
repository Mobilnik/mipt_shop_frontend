import React from 'react';
import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import {fetchProductsCreator} from "../../redux/productsReducer";

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(fetchProductsCreator())
        }
    };
};

let ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;