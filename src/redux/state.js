//функциии, меняющие state, должны находиться в state
import {rerenderEntireTree} from "../render";

let state = {
    ordersPage: {
        orders: [
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
        ],
    },

    goodsPage: {
        goods: [
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
        ]
    },

    cartPage: {
        cartItems: [
            {
                goodId: 1,
                quantity: 2
            },
            {
                goodId: 2,
                quantity: 3
            },
        ]
    }
};

export const increaseCartItemQuantity = (cartItemIdx) => {
    state.cartPage.cartItems[cartItemIdx].quantity++;
    rerenderEntireTree();
};

export const decreaseCartItemQuantity = (cartItemIdx) => {
    state.cartPage.cartItems[cartItemIdx].quantity--;
    rerenderEntireTree();
};



export default state;