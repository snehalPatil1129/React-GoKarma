/**
 * Reactify - A Material Design Admin Template
 * Copyright 2018 All Rights Reserved
 * Made Wih Love
 * Created By The Iron Network, LLC
 */
import React from "react";
import ReactDOM from "react-dom";
import { runWithAdal } from "react-adal";
import { authContext } from "../src/constants/MicrosoftConfig";
// Save a reference to the root element for reuse
const rootEl = document.getElementById("root");
const DO_NOT_LOGIN = false;
// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  // runWithAdal(
  //   authContext,
  //   () => {
      const MainApp = require("./App").default;
      ReactDOM.render(<MainApp />, rootEl);
    //},
  //   DO_NOT_LOGIN
  // );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(<NextApp />, rootEl);
  });
}

render();
