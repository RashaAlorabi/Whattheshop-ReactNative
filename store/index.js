import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import * as actionCreators from "./actions";
const middlewares = [thunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);
store.dispatch(actionCreators.checkForExpiredToken());
export default store;
