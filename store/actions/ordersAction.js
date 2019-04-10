import axios from "axios";
import * as actionTypes from "./actionTypes";
import * as actionCreatores from "./index";
// import { resetErrors } from "./";
const instance = axios.create({
  baseURL: "http://192.168.8.122/api/"
});
export const checkout = (orderID, navigation) => {
  return async dispatch => {
    try {
      const res = await instance.put(`order/${orderID}/checkout/`);
      const checkout = res.data;
      dispatch(actionCreatores.fetchCartList());
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: checkout
      });
      navigation.replace("Thanks");
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err
      });
    }
  };
};
