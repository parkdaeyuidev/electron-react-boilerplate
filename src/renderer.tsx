import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { App } from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

export default hot(module)(App);
