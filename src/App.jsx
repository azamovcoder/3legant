import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/Cart/CheckOut/CheckOut";
import Complete from "./pages/Cart/Complete/Complete";
import Contact from "./pages/contact/Contact";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import Favorites from "./pages/Favorites/Favorites";
import { Fragment } from "react";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
import ManageProducts from "./pages/admin/manageProduct/ManageProducts";
import NotFound from "./pages/notFound/NotFound";
import Shop from "./pages/shop/Shop";
import ShoppingCart from "./pages/Cart/ShoppingCart/ShoppingCart";
import SinglePage from "./pages/SinglePage/SinglePage";
import { ToastContainer } from "react-toastify";

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
          <Route path="*" element={<NotFound />} />
          <Route path="cart" element={<Cart />}>
            <Route path="shoppingCart" element={<ShoppingCart />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="complete" element={<Complete />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProducts />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
