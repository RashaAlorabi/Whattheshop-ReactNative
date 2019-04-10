import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: {},
  loading: true
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case actionTypes.PROFILE_UPDATE:
      console.log(action.payload, "reducer");
      return {
        ...state,
        profile: { created_on: state.profile.created_on, ...action.payload },
        loading: false
      };

    default:
      return state;
  }
};

export default profileReducer;
