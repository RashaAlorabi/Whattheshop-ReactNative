import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import authenticationsReducer from "./authenticationsReducer";
import ordersReducer from "./ordersReducer";
// import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  productsRoot: productsReducer,
  authRoot: authenticationsReducer,
  ordersRoot: ordersReducer,
  //   profileRoot: profileReducer,
  cartRoot: cartReducer
});
