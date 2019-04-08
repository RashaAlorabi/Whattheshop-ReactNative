import * as actionTypes from "../actions/actionTypes";
const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  loading: true
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS:
      // console.log(
      //   "[productsReducer.js] products action.payload",
      //   action.payload
      // );
      return {
        ...state,
        products: [...action.payload],
        filteredProducts: [...action.payload],
        loading: false
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case actionTypes.FILTER_PRODUCTS:
      if (action.payload) {
        return {
          ...state,
          filteredProducts: [...state.products].filter(
            product =>
              product.name.includes(action.payload) ||
              product.description.includes(action.payload)
          ),
          loading: false
        };
      } else {
        return {
          ...state,
          filteredProducts: [...state.products],
          loading: false
        };
      }
    case actionTypes.CATEGORY_FILTER:
      return {
        ...state,
        filteredProducts: [...state.products].filter(product =>
          product.categories
            .map(category => category.name)
            .includes(action.payload)
        )
      };
    default:
      return state;
  }
};

export default productsReducer;
