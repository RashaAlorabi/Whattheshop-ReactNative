import axios from "axios";

import * as actionTypes from "./actionTypes";
// import { resetErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://172.20.10.3:80/api/"
});

export const profile = () => {
  console.log("called profile");
  return async dispatch => {
    try {
      const res = await instance.get("profile/");
      const Profile = res.data;
      console.log("heres the profile: ");
      // dispatch(resetErrors());
      dispatch({
        type: actionTypes.PROFILE,
        payload: Profile
      });
    } catch (err) {
      //   dispatch({
      //     type: actionTypes.SET_ERRORS,
      //     payload: err
      //   });
      console.error("this is my own error : " + err);
    }
  };
};

export const profileUpdate = (userData, profileData) => {
  return async dispatch => {
    try {
      const res = await instance.put("profile/update/", {
        user: { ...userData },
        profile: { ...profileData }
      });
      const UpdatedProfile = res.data;
      //   console.log(UpdatedProfile, "here is the profile update action");
      dispatch({
        type: actionTypes.PROFILE_UPDATE,
        payload: UpdatedProfile
      });
      dispatch(profile());
    } catch (err) {
      //   dispatch({
      //     type: actionTypes.SET_ERRORS,
      //     payload: err
      //   });
      console.error(err);
    }
  };
};
