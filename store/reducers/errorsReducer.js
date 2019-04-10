import * as actionTypes from "../actions/actionTypes";

const initialState = {
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        errors: Object.keys(action.payload).map(key => {
          if (
            action.payload[key].toString() ===
            "Unable to log in with provided credentials."
          ) {
            return "The username and password combination is incorrect.";
          }
          return `${key}: ${action.payload[key]}`;
        })
      };
    case actionTypes.RESET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
