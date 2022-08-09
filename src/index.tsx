import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";

import { MaterialUiThemeProvider } from "./contexts/index";
import PlaycanvasContext from "./contexts/playCanvas/playcanvasContext";

import App from "./App";
import Playcanvas from "./playcanvas";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <MaterialUiThemeProvider>
    <SnackbarProvider maxSnack={3}>
      <PlaycanvasContext.Provider value={new Playcanvas()}>
        <App />
      </PlaycanvasContext.Provider>
    </SnackbarProvider>
  </MaterialUiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();
