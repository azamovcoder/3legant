import "./index.css";

import React, { Suspense, lazy } from "react";

import { BrowserRouter } from "react-router-dom";
import LazyLoding from "./components/lazyLoading/LazyLoding";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./context";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Suspense fallback={<LazyLoding />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>
);
