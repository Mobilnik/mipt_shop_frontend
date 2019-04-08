let store = {
    _state: {
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
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    //Функции, меняющие данные. Только функции, определенные в state, могут его менять
    increaseCartItemQuantity(cartItemIdx) {
        this._state.cartPage.cartItems[cartItemIdx].quantity++;
        this._callSubscriber();
    },

    decreaseCartItemQuantity(cartItemIdx) {
        this._state.cartPage.cartItems[cartItemIdx].quantity--;

        this._callSubscriber();
    },

    updateCartOrderComment(newText) {
        this._state.cartPage.cartOrderComment = newText;
        this._callSubscriber();
    },

    createNewOrderFromCart() {
        let order = {
            id: 3,
            userId: this._state.userId,
            status: 0,
            changeDateTime: new Date().getUTCDate(),
            comment: this._state.cartPage.cartOrderComment,
            goods: this._state.cartPage.cartItems
        };
        this._state.ordersPage.orders.push(order);

        this._state.cartPage.cartItems = [];
        this._state.cartPage.cartOrderComment = "";

        this._callSubscriber();
    },

    dispatch(action) {
        switch (action.type) {
            case 'INCREASE-CART-ITEM-QUANTITY':
                this.increaseCartItemQuantity(action.cartItemIdx);
                break;
            case 'DECREASE-CART-ITEM-QUANTITY':
                this.decreaseCartItemQuantity(action.cartItemIdx);
                break;
            case 'UPDATE-CART-ORDER-COMMENT':
                this.updateCartOrderComment(action.newText);
                break;
            case 'CREATE-NEW-ORDER-FROM-CART':
                this.createNewOrderFromCart();
                break;
            default:
                return;
        }
    }
};


export default store;