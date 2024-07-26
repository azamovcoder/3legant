import "./App.css";

import { Route, Routes } from "react-router-dom";

import Blog from "./pages/blog/Blog";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/Cart/CheckOut/CheckOut";
import Complete from "./pages/Cart/Complete/Complete";
import Contact from "./pages/contact/Contact";
import Favorites from "./pages/Favorites/Favorites";
import { Fragment } from "react";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Shop from "./pages/shop/Shop";
import ShoppingCart from "./pages/Cart/ShoppingCart/ShoppingCart";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="singlePage/:Id" element={<SinglePage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />}>
            <Route path="shoppingCart" element={<ShoppingCart />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="complete" element={<Complete />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
