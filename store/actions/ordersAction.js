import axios from "axios";
import * as actionTypes from "./actionTypes";
import { resetErrors } from "./errors";
const instance = axios.create({
  baseURL: "http://172.20.1.103:80/api/"
});
export const checkout = orderID => {
  return async dispatch => {
    try {
      const res = await instance.put(`order/${orderID}/checkout/`);
      const checkout = res.data;
      dispatch(resetErrors());
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: checkout
      });
      // history.push("/HomePage");
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err
      });
    }
  };
};
