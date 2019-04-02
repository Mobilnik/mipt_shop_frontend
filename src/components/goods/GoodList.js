import React from 'react';
import GoodItem from "./GoodItem";

let goodItems = [
    {
        id: 1,
        name: "Bread",
        photo: "",
        price: 28.0
    },
    {
        id: 2,
        name: "Milk",
        photo: "",
        price: 45.6
    },
];

const GoodList = (props) => {
    return (
        <div>
            <GoodItem id={goodItems[0].id} userId={goodItems[0].name}
                       status={goodItems[0].photo} changeDateTime={goodItems[0].price}/>
            <GoodItem id={goodItems[1].id} userId={goodItems[1].name}
                       status={goodItems[1].photo} changeDateTime={goodItems[1].price}/>
        </div>
    )
};

export default GoodList;