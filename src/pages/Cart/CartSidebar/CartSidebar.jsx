import "./CartSidebar.scss";

import { NavLink, useLocation } from "react-router-dom";
import React, { Fragment } from "react";

const CartSidebar = () => {
  const { pathname } = useLocation();
  let path = pathname.split("/")[2];
  return (
    <Fragment>
      <div className="cart__sidebar container">
        <h1>
          {path === "shoppingCart"
            ? "Cart"
            : path === "checkOut"
            ? "Check Out"
            : "Complete!"}
        </h1>
        <div className="cart__sidebar__items">
          <NavLink className="active">
            <span>1 </span>
            <p>Shopping cart</p>
          </NavLink>
          <NavLink>
            <span>2</span>
            <p>Checkout details</p>
          </NavLink>
          <NavLink>
            <span>3</span>
            <p>Order Complete</p>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default CartSidebar;
