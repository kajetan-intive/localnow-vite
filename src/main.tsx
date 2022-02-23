import { initNavigation } from "@noriginmedia/react-spatial-navigation";
import { SplashScreen } from "@project/containers";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { GlobalStateProvider } from "./redux";

initNavigation({});

ReactDOM.render(
  <GlobalStateProvider>
    <HashRouter>
      <SplashScreen />
    </HashRouter>
  </GlobalStateProvider>,
  document.getElementById("root")
);
