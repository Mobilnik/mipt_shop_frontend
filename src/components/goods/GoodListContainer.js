import React from 'react';
import {connect} from "react-redux";
import GoodList from "./GoodList";
import {fetchGoodsCreator} from "../../redux/goodsReducer";

let mapStateToProps = (state) => {
    return {
        goods: state.goodsPage.goods
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchGoods: () => {
            dispatch(fetchGoodsCreator())
        }
    };
};

let GoodListContainer = connect(mapStateToProps, mapDispatchToProps)(GoodList);

export default GoodListContainer;