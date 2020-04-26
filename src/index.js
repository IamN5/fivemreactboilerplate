import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./App";
import WindowListener from "./components/WindowListener";
import store from "./store";

const MOUNT_NODE = document.getElementById("app");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <WindowListener>
          <App />
      </WindowListener>
    </Provider>,
    MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept(["./App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
