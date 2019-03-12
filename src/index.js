import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

import { createStore } from "redux"; // Step one .. To
import { Provider } from "react-redux"; // Step two
import reducer from "./store/reducer"; // Step three
const store = createStore(reducer); // Step four

// Step five
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
