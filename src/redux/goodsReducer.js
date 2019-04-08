const initialState = {
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
};

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        //todo add good to cart
        default:
            break;
    }
    return state;
};

export default goodsReducer;