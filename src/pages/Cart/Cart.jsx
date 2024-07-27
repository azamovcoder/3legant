import "./Cart.scss";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import CartSidebar from "./CartSidebar/CartSidebar";
import emptyCart from "../../assets/Cart/emptycart.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      {cartData.length ? (
        <div className="">
          <CartSidebar />

          <Outlet />
        </div>
      ) : (
        <div className="empty__cart container">
          <img src={emptyCart} alt="empty.png" />
          <NavLink to="/">Go Home</NavLink>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
