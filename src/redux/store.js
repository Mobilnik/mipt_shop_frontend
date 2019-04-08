import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";

let store = {
    _state: {
        ordersPage: {
            orders: [
                {
                    id: 1,
                    userId: 1,
                    status: 0,
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
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.cartPage = cartReducer(this._state.cartPage, action);
        this._state.ordersPage = ordersReducer(this._state.ordersPage, action);
        this._callSubscriber();
    }
};

export default store;