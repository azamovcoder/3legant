import "./Cart.scss";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import emptyCart from "../../assets/Cart/emptycart.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);

  return (
    <Fragment>
      {cartData.length ? (
        <Outlet />
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
