import axios from 'axios';

const SET_MUST_FETCH_PRODUCTS = 'SET_MUST_FETCH_PRODUCTS';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';
const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';

const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

const initialState = {
    //todo hack
    mustFetch: true,

    fetching: false,
    fetched: false,
    error: null,
    products: [],

    filters: {
        filterText: "",
        selectedCategory: null,
        categories: [],
        minPrice: 0,
        maxPrice: 0
    }
};

const productsReducer = (state = initialState, action) => {
    if (!action.type.startsWith('@@redux/')) {
        console.log('productsReducer');
        console.log('action');
        console.log(action);
        console.log('state');
        console.log(state);
    }

    switch (action.type) {
        case SET_MUST_FETCH_PRODUCTS:
            return {
                ...state,
                mustFetch: action.newValue
            };

        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                fetching: false,
            };

        case FETCH_PRODUCTS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        case FETCH_PRODUCTS_FULFILLED:
            let newState = {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload.data,
                filters: {
                    ...state.filters,
                }
            };
            newState.products.forEach(p => p.hidden = false);
            newState.filters.categories = buildProductCategories(newState.products);
            newState.filters.minPrice = findMinPrice(newState.products);
            newState.filters.maxPrice = findMaxPrice(newState.products);
            return newState;

        case
        FILTER_PRODUCTS:
            return filterProducts(state, action.filterText);

        //todo add product to cart
    }
    return state;
};

const buildProductCategories = (products) => {
    let categories = [];
    products.forEach(p => {
        let exists = false;

        categories.forEach(c => {
            if (c.categoryId === p.categoryId) {
                exists = true;
            }
        });
        if (!exists) {
            categories.push({
                categoryId: p.categoryId,
                categoryName: p.categoryName
            });
        }
    });
    return categories;
};

const findMinPrice = (products) => {
    let minPrice = 999999999;
    products.forEach(p => {
        if (p.price < minPrice) {
            minPrice = p.price;
        }
    });
    return minPrice;
};

const findMaxPrice = (products) => {
    let maxPrice = 0;
    products.forEach(p => {
        if (p.price > maxPrice) {
            maxPrice = p.price;
        }
    });
    return maxPrice;
};




const filterProducts = (state, filterText) => {
    let stateCopy = {...state};
    stateCopy.products = [...stateCopy.products];
    stateCopy.filters.filterText = filterText;
    const filterTextLowerCase = stateCopy.filters.filterText.toLowerCase();

    stateCopy.products.forEach(product => {
        if (!product.name.toLowerCase().includes(filterTextLowerCase))
            product.hidden = true;
        else
            product.hidden = false;
    });

    return stateCopy;
};



//Action Creators
export const setMustFetchCreator = (newValue) => {
    return {
        type: SET_MUST_FETCH_PRODUCTS,
        newValue: newValue
    }
};

export const fetchProductsCreator = () => {
    return {
        type: FETCH_PRODUCTS,
        payload: axios.get("http://localhost:8080/mipt-shop/products")
    }
};


export const filterProductsCreator = (filterText) => {
    return {
        type: FILTER_PRODUCTS,
        filterText: filterText
    }
};


export default productsReducer;