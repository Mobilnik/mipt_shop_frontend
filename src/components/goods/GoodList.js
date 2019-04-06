import React from 'react';
import GoodItem from "./GoodItem";

let goodItems = [
    {
        id: 1,
        name: "Bread",
        photo: "photo 1",
        price: 28.0
    },
    {
        id: 2,
        name: "Milk",
        photo: "photo 2",
        price: 45.6
    },
];

let goods = goodItems
    .map(good => <GoodItem id={good.id}
                           name={good.name}
                           photo={good.photo}
                           price={good.price}/>);

const GoodList = (props) => {
    return (
        <div>
            {goods}
        </div>
    )
};

export default GoodList;