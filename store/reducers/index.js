import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import authenticationsReducer from "./authenticationsReducer";
import ordersReducer from "./ordersReducer";
// import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  productsRoot: productsReducer,
  authRoot: authenticationsReducer,
  ordersRoot: ordersReducer,
  //   profileRoot: profileReducer,
  cartRoot: cartReducer,
  errorRoot: errorsReducer
});
