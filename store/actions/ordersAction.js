import axios from "axios";
import * as actionTypes from "./actionTypes";
// import * as actionCreatores from "./index";
import { WebBrowser, Linking } from "expo";
// import { resetErrors } from "./";
const instance = axios.create({
  baseURL: "http://172.20.10.3:80/api/"
});
export const checkout = (orderID, info, navigation) => {
  return async dispatch => {
    try {
      const res = await instance.post(`order/${orderID}/checkout/`, {
        phoneNumber: info.phoneNumber,
        requestFrom: "native"
      });
      const checkout = res.data;
      console.log("checkout order ", checkout.order);

      dispatch({
        type: actionTypes.FITCH_CART_LIST,
        payload: checkout.order
      });
      await WebBrowser.openAuthSessionAsync(
        JSON.parse(checkout.response.join("")).transaction.url,
        "exp://172.20.10.3:19000/thanks/"
      );
      Linking.addEventListener("thanks", navigation.replace("Thanks"));
      // history.push("/HomePage");
    } catch (err) {
      console.log("errror!!!!!!!!!!!!!!!!!!!!!", err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err
      });
    }
  };
};

export const final_checkout = orderID => {
  return async dispatch => {
    try {
      const res = await instance.post(`order/${orderID}/checkout/final/`);
      const checkout = res.data;
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: checkout
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err
      });
    }
  };
};
