/**
 * Auth Actions
 * Auth Action With Google, Facebook, Twitter and Github
 */
import firebase from "firebase";
import { NotificationManager } from "react-notifications";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "../actions/types";
import MicrosoftConfig from "../../constants/MicrosoftConfig";
import axios from "axios";
/**
 * Redux Action To Sigin User With Firebase
 */
export const signinUserInFirebase = (user, history) => dispatch => {
  dispatch({ type: LOGIN_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
};

/**
 * Redux Action To Signout User From  Firebase
 */
export const logoutUserFromFirebase = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
  localStorage.removeItem("user_id");
};

/**
 * Redux Action To Signup User In Firebase
 */
export const signupUserInFirebase = (user, history) => dispatch => {
  dispatch({ type: SIGNUP_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
};

/**
 * Redux Action To Signin User In Firebase With Facebook
 */
export const signinUserWithFacebook = history => dispatch => {
  dispatch({ type: LOGIN_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
};

/**
 * Redux Action To Signin User In Firebase With Google
 */
export const signinUserWithGoogle = history => dispatch => {
  dispatch({ type: LOGIN_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
};

/**
 * Redux Action To Signin User In Firebase With Github
 */
export const signinUserWithGithub = history => dispatch => {
  dispatch({ type: LOGIN_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
};

/**
 * Redux Action To Signin User In Firebase With Twitter
 */
export const signinUserWithTwitter = history => dispatch => {
  dispatch({ type: LOGIN_USER });
  localStorage.setItem("user_id", "user-id");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: localStorage.getItem("user_id")
  });
  history.push("/");
  console.log(result);
};

/**Redux action to Sign in Microsoft CRM  */
export const signInToMicrosoftCRM = history => dispatch => {
  axios
    .post(
      "https://login.microsoftonline.com/common/oauth2/token",
      MicrosoftConfig
    )
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("error", error);
    });
};
