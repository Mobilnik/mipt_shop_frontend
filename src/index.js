import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let goods = [
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

let orders = [
    {
        id: 1,
        userId: 1,
        status: 1,
        changeDateTime: '2019-03-21 23:00:43.573000'
    },
    {
        id: 2,
        userId: 1,
        status: 0,
        changeDateTime: '2019-03-31 23:00:43.573000'
    },
];

ReactDOM.render(<App goods = {goods} orders = {orders}/>, document.getElementById('root'));