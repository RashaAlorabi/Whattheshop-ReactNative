import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: true
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default ordersReducer;
