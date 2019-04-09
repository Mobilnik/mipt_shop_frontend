import React from 'react';
import {connect} from "react-redux";
import GoodList from "./GoodList";


let mapStateToProps = (state) => {
    return {
        goods: state.goodsPage.goods
    };
};

let mapDispatchToProps = (dispatch) => {
    return {};
};

let GoodListContainer = connect(mapStateToProps, mapDispatchToProps)(GoodList);

export default GoodListContainer;