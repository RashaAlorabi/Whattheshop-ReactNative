import * as actionTypes from "../actions/actionTypes";
const initialState = {
  // items: [],
  order: {
    cart_items: []
  },
  loading: true
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FITCH_CART_LIST:
      console.log(action.payload);
      return {
        ...state,
        order: action.payload,
        loading: false
      };

    case actionTypes.ADD_ITEM_CART:
      console.log(action.payload);

      let item = action.payload;
      let foundItem = state.order.cart_items.find(
        theItem =>
          theItem.orderID === item.orderID &&
          theItem.productID === item.productID
      );
      console.log("[cartReducer.js] foundItem: ", foundItem);
      if (foundItem) {
        console.log("[cartReducer.js] ITEM FOUND! ");
        foundItem.quantity = item.quantity;
        foundItem.subtotal = item.subtotal;
        return {
          ...state,
          order: { ...state.order, cart_items: [...state.order.cart_items] }
        };
      } else {
        console.log("[cartReducer.js] ITEM NOT FOUND!  :(");
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
      console.log("[cartReducer.js] action.payload: ", action.payload.id);
      let updatedItem = state.order.cart_items.find(
        item => item.id == action.payload.id
      );
      console.log("[cartReducer.js] updatedItem: ", updatedItem);
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
