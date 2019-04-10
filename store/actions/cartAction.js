import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as actionCreatores from "./index";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/"
  baseURL: "http://192.168.8.122/api/"

});
export const fetchCartList = () => {
  return async dispatch => {
    try {
      const res = await instance.get("order/items/");
      const CartList = res.data;
      dispatch({
        type: actionTypes.FITCH_CART_LIST,
        payload: CartList
      });
    } catch (err) {
      console.error("Error while fetching the cart items", err);
    }
  };
};

export const addItemToCart = (orderID, productID, quantity) => {
  return async dispatch => {
    try {
      const res = await instance.post(
        `order/${orderID}/items/${productID}/add/`,
        { quantity: quantity }
      );
      dispatch(actionCreatores.fetchAllProducts());
      dispatch(fetchCartList());
      const newItem = res.data;
      dispatch({
        type: actionTypes.ADD_ITEM_CART,
        payload: newItem
      });
    } catch (err) {
      console.error("Error while adding the cart item", err);
    }
  };
};
export const deleteItemCart = itemID => {
  return async dispatch => {
    try {
      const res = await instance.delete(`items/${itemID}/delete/`);
      const deleteItem = res.data;
      dispatch(fetchCartList());
      dispatch({
        type: actionTypes.DELETE_ITEM_CART,
        payload: itemID
      });
    } catch (err) {
      console.error("Error while deleteing the cart item", err);
    }
  };
};

export const updateItemCart = (itemID, quantity) => {
  return async dispatch => {
    try {
      const res = await instance.put(`items/${itemID}/update/`, {
        quantity: quantity
      });
      dispatch(fetchCartList());
      const updateItem = res.data;

      dispatch({
        type: actionTypes.UPDATE_ITEM_CART,
        payload: updateItem
      });
      //   history.push("/private");
    } catch (err) {
      console.error("Error while updating the cart item", err);
    }
  };
};
