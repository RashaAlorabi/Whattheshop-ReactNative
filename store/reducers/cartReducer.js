import * as actionTypes from "../actions/actionTypes";
const initialState = {
  order: {
    cart_items: []
  },
  loading: true
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FITCH_CART_LIST:
      return {
        ...state,
        order: action.payload,
        loading: false
      };

    case actionTypes.ADD_ITEM_CART:
      let item = action.payload;
      let foundItem = state.order.cart_items.find(
        theItem =>
          theItem.orderID === item.orderID &&
          theItem.productID === item.productID
      );

      if (foundItem) {
        foundItem.quantity = item.quantity;
        foundItem.subtotal = item.subtotal;
        return {
          ...state,
          order: { ...state.order, cart_items: [...state.order.cart_items] }
        };
      } else {
        return {
          ...state,
          order: {
            ...state.order,
            cart_items: state.order.cart_items.concat(item)
          },
          loading: false
        };
      }

    case actionTypes.UPDATE_ITEM_CART:
      let updatedItem = state.order.cart_items.find(
        item => item.id == action.payload.id
      );

      updatedItem.quantity = action.payload.quantity;
      //updatedItem.subtotal = action.payload.subtotal;
      return {
        ...state,
        order: { ...state.order, cart_items: [...state.order.cart_items] },
        loading: false
      };
    case actionTypes.DELETE_ITEM_CART:
      let newList = state.order.cart_items.filter(
        item => item.id !== parseInt(action.payload)
      );
      return {
        ...state,
        order: { ...state.order, cart_items: [...newList] },
        loading: false
      };

    default:
      return state;
  }
};

export default cartReducer;
