import axios from 'axios';

const SET_MUST_FETCH_PRODUCTS = 'SET_MUST_FETCH_PRODUCTS';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';
const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';

const SELECT_PRODUCT_CATEGORY = 'SELECT_PRODUCT_CATEGORY';
const UPDATE_MIN_PRICE_FILTER = 'UPDATE_MIN_PRICE_FILTER';
const UPDATE_MAX_PRICE_FILTER = 'UPDATE_MAX_PRICE_FILTER';
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
        selectedCategoryId: null,
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
            return fetchProductsFulfilled(state, action);

        case SELECT_PRODUCT_CATEGORY:
            return selectProductCategory(state, action);

        case UPDATE_MIN_PRICE_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    minPrice: action.newValue
                }
            };

        case UPDATE_MAX_PRICE_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    minPrice: action.newValue
                }
            };

        case FILTER_PRODUCTS:
            return filterProducts(state, action.newValue);

        //todo add product to cart
    }
    return state;
};

const fetchProductsFulfilled = (state, action) => {
    let stateCopy = {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload.data,
        filters: {
            ...state.filters,
        }
    };
    stateCopy.products.forEach(p => p.hidden = false);
    stateCopy.filters.categories = buildProductCategories(stateCopy.products);
    stateCopy.filters.minPrice = findMinPrice(stateCopy.products);
    stateCopy.filters.maxPrice = findMaxPrice(stateCopy.products);
    return stateCopy;
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

const selectProductCategory = (state, action) => {
    return {
        ...state,
        filters: {
            ...state.filters,
            selectedCategoryId: action.categoryId
        },
    };
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

export const selectProductCategoryCreator = (categoryId) => {
    return {
        type: SELECT_PRODUCT_CATEGORY,
        categoryId: categoryId
    }
};


export const updateMinPriceFilterCreator = (newValue) => {
    return {
        type: UPDATE_MIN_PRICE_FILTER,
        newValue: newValue
    }
};

export const updateMaxPriceFilterCreator = (newValue) => {
    return {
        type: UPDATE_MAX_PRICE_FILTER,
        newValue: newValue
    }
};

export const filterProductsCreator = (newValue) => {
    return {
        type: FILTER_PRODUCTS,
        newValue: newValue
    }
};


export default productsReducer;