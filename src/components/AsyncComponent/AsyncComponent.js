/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "../RctPageLoader/RctPageLoader";

// dashboard
const AsyncDashboardComponent = Loadable({
  loader: () => import("../../routes/dashboard"),
  loading: () => <RctPageLoader />
});

// about us
const AsyncAboutUsComponent = Loadable({
  loader: () => import("../../routes/about-us"),
  loading: () => <RctPageLoader />
});

/** ----------USER Profile ---------- */

const AsyncUserProfileComponent = Loadable({
  loader: () => import("../../routes/userProfile"),
  loading: () => <RctPageLoader />
});
/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable({
  loader: () => import("../../routes/session/login"),
  loading: () => <RctPageLoader />
});

// Session Register
const AsyncSessionRegisterComponent = Loadable({
  loader: () => import("../../routes/session/register"),
  loading: () => <RctPageLoader />
});

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
  loader: () => import("../../routes/session/lock-screen"),
  loading: () => <RctPageLoader />
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
  loader: () => import("../../routes/session/forgot-password"),
  loading: () => <RctPageLoader />
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
  loader: () => import("../../routes/session/404"),
  loading: () => <RctPageLoader />
});

// Session Page 404
const AsyncSessionPage500Component = Loadable({
  loader: () => import("../../routes/session/500"),
  loading: () => <RctPageLoader />
});

export {
  AsyncDashboardComponent,
  AsyncAboutUsComponent,
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
  AsyncUserProfileComponent
};
