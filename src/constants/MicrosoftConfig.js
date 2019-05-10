// //  const config = {
// //   // client_id: "2ad88395-b77d-4561-9441-d0e40824f9bc",
// //   // username: "admin@espldevelopment.onmicrosoft.com",
// //   // password: "espl@2019",
// //   // resource: "https://gokarmaphase3.crm8.dynamics.com/",
// //   // grant_type: "password"

// //   grant_type:"password",
// //   username:"admin@espldevelopment.onmicrosoft.com",
// //   password:"espl@2019",
// //   client_id:"ee7ad2e1-579a-4928-aaa4-7893511cc0a8",
// //   resource:"https://gokarmaphase3.crm8.dynamics.com",
// //   client_secret:"L2A/CZCEprk502DfIJlnd]iay?-gSS6d"

// // };
// // export default config;
// import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

// export const adalConfig = {
// tenant: 'admin@espldevelopment.onmicrosoft.com',
// clientId: 'ee7ad2e1-579a-4928-aaa4-7893511cc0a8',
// endpoints: {
//     api: 'https://gokarmaphase3.crm8.dynamics.com' // <-- The Azure AD-protected API
// },
// cacheLocation: 'localStorage',
// };

// export const authContext = new AuthenticationContext(adalConfig);

// export const adalApiFetch = (fetch, url, options) =>
// adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

// export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);


/*********------------------ADAl Angular ------------------- */
import AuthenticationContext from "adal-angular";

var adalConfig = {
  instance: "https://login.microsoftonline.com/",
  tenant: "64a00412-0979-4b9f-bf11-3638b71518e4",
  clientId: "ee7ad2e1-579a-4928-aaa4-7893511cc0a8",
  extraQueryParameter: "nux=1",
  client_secret: "L2A/CZCEprk502DfIJlnd]iay?-gSS6d",
        disableRenewal: false,
  endpoints: {
    localhostUri: "http://localhost:3000"
  }
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => {
  let user = authContext.getCachedUser();
  if (user) {
    authContext.acquireToken(authContext.config.clientId, function(
      error,
      token
    ) {
      localStorage.setItem("token", token);
    });
  } else {
    authContext.login();
  }
};

export const logout = () => {
    authContext.logout();
}
export const login = () => {
    authContext.login();
}
const isCallback = authContext.isCallback(window.location.hash);

authContext.handleWindowCallback();

if (isCallback && !authContext.getLoginError()) {
  window.location = authContext._getItem(
    authContext.CONSTANTS.STORAGE.LOGIN_REQUEST
  );
}


// /** ------------------REACT ADAL---------------------------- */
// import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
// var adalConfig = {
//   tenant: "64a00412-0979-4b9f-bf11-3638b71518e4",
//   clientId: "ee7ad2e1-579a-4928-aaa4-7893511cc0a8",
//   cacheLocation: 'localStorage',
//   endpoints: {
//     api: 'ee7ad2e1-579a-4928-aaa4-7893511cc0a8'
//   }
// };

// export const authContext = new AuthenticationContext(adalConfig);

// export const adalApiFetch = (fetch, url, options) =>
//   adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

// export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);