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
//import MicrosoftConfig from "../../constants/MicrosoftConfig";
import axios from "axios";
// import { authContext, getToken } from "../../constants/MicrosoftConfig";
import { getToken } from "../../constants/MicrosoftConfig";

//let user = authContext.getCachedUser();

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
  /***----------------REACT ADAL----------------- */
 // authContext.logOut();
 getToken();
  console.log("responseToken", localStorage.getItem('token'));
  //     userToken = localStorage.getItem('token');
  //     //dispatch(setLoginSuccess(userName, userToken));
  //     var organizationURI = "https://gokarmaphase3.crm8.dynamics.com";

  //     var headers = {
  //       Authorization: "Bearer " + userToken,
  //       Accept: "application/json",
  //       "Content-Type": "application/json; charset=utf-8",
  //       "OData-MaxVersion": "4.0",
  //       "OData-Version": "4.0"
  //     };
  //     axios
  //       .get(organizationURI + "/api/data/v9.0/accounts", { headers: headers })
  //       .then(response => {
  //         console.log("account response", response);
  //       })
  //       .catch(err => {
  //         console.log("account err", err);
  //       });
 
  // let result;
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // const options = {
  //     method: 'GET',
  //     headers
  // };

  // adalApiFetch(fetch, 'https://gokarmaphase3.crm8.dynamics.com/api/data/v9.1/leads', options)
  // .then(response =>{
  //   console.log(response);
  //     let leads = JSON.stringify(response);
  //     console.log(leads);
  // })
  // .catch(error => console.error('SERVER ERROR:', error));

};
