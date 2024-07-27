import "./CartSidebar.scss";

import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";

const CartSidebar = () => {
  const pathnames = ["shoppingCart", "checkOut", "complete"];
  let { pathname } = useLocation();
  pathname = pathname.split("/")[2];
  let index = pathnames.findIndex((text) => text === pathname);

  let completed = { color: "green" };
  let disabled = { color: "#aaa" };
  let active = { color: "#000" };
  return (
    <Fragment>
      <ul className="cart__sidebar__items container">
        <li
          className=""
          style={index > 0 ? completed : index === 0 ? active : disabled}
        >
          Shopping cart
        </li>
        <li style={index > 1 ? completed : index === 1 ? active : disabled}>
          Checkout detail
        </li>
        <li style={index > 2 ? completed : index === 2 ? active : disabled}>
          Order complete
        </li>
      </ul>
    </Fragment>
  );
};

export default CartSidebar;
