import React from 'react';
import GoodItem from "./GoodItem";

const GoodList = (props) => {
    let goods = props.goods
        .map(good => <GoodItem id={good.id}
                               name={good.name}
                               photo={good.photo}
                               price={good.price}/>);

    return (
        <div>
            {goods}
        </div>
    )
};

export default GoodList;