let rerenderEntireTree;

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

let state = {
    userId: 1,

    ordersPage: {
        orders: [
            {
                id: 1,
                userId: 1,
                status: 1,
                changeDateTime: '2019-03-21 23:00:43.573000',
                comment: "Я глупый коммент №1",
                goods: [
                    {
                        goodId: 1,
                        quantity: 2,
                    }
                ]
            },
            {
                id: 2,
                userId: 1,
                status: 1,
                changeDateTime: '2019-03-31 23:00:43.573000',
                comment: "Я глупый коммент №2",
                goods: [
                    {
                        goodId: 15,
                        quantity: 4,
                    },
                    {
                        goodId: 13,
                        quantity: 1,
                    }
                ]
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
        ],
        cartOrderComment: ""
    }
};

//Функции, меняющие данные. Только функции, определенные в state, могут его менять
export const increaseCartItemQuantity = (cartItemIdx) => {
    state.cartPage.cartItems[cartItemIdx].quantity++;
    rerenderEntireTree();
};

export const decreaseCartItemQuantity = (cartItemIdx) => {
    state.cartPage.cartItems[cartItemIdx].quantity--;

    rerenderEntireTree();
};

export const updateCartOrderComment = (newText) => {
    state.cartPage.cartOrderComment = newText;

    rerenderEntireTree();
};

export const createNewOrderFromCart = () => {
    let order = {
        id: 3,
        userId: state.userId,
        status: 0,
        changeDateTime: new Date().getUTCDate(),
        comment: state.cartPage.cartOrderComment,
        goods: state.cartPage.cartItems
    };
    state.ordersPage.orders.push(order);

    state.cartPage.cartItems = [];
    state.cartPage.cartOrderComment = "";

    rerenderEntireTree();
};


export default state;