import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import authenticationsReducer from "./authenticationsReducer";

import profileReducer from "./profileReducer";
import ordersReducer from "./ordersReducer";

import cartReducer from "./cartReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  productsRoot: productsReducer,
  authRoot: authenticationsReducer,
  profileRoot: profileReducer,
  ordersRoot: ordersReducer,
  cartRoot: cartReducer,
  errorRoot: errorsReducer,
});
