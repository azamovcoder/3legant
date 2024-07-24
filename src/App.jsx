import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Shop from "./pages/shop/Shop";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="singlePage/:Id" element={<SinglePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
