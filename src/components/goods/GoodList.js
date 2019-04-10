import React from 'react';
import GoodItem from "./GoodItem";

const GoodList = (props) => {
    let goods = props.goods
        .map(good => <GoodItem id={good.id}
                               name={good.name}
                               photo={good.photo}
                               price={good.price}/>);

    console.log('in good list');
    console.log(props.goods);
    return (
        <div>
            {goods}
            <button onClick={props.fetchGoods}>Click me</button>
        </div>
    )
};

export default GoodList;