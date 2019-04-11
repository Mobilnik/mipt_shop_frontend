import React from 'react';
import {connect} from "react-redux";
import GoodList from "./GoodPage";
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

let GoodPageContainer = connect(mapStateToProps, mapDispatchToProps)(GoodList);

export default GoodPageContainer;