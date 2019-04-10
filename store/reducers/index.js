import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import authenticationsReducer from "./authenticationsReducer";

import profileReducer from "./profileReducer";
import ordersReducer from "./ordersReducer";

import cartReducer from "./cartReducer";

export default combineReducers({
  productsRoot: productsReducer,
  authRoot: authenticationsReducer,
  profileRoot: profileReducer,
  ordersRoot: ordersReducer,
  cartRoot: cartReducer
});
