import "./Complete.scss";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteAllCart } from "../../../context/slices/cartSlices";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleComplete = () => {
    dispatch(deleteAllCart());
    navigate("/");
  };

  useEffect(() => {
    return () => {
      handleComplete();
    };
  }, []);
  const cartData = useSelector((state) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);
  const subtotal = totalPrice;

  const total = subtotal;
  return (
    <Fragment>
      <div className="complete container">
        <h2>Thank you! 🎉</h2>
        <h1>Your order has been received</h1>
        <div className="complete__cards">
          {cartData?.map((el) => (
            <div key={el?.id} className="complete__cards__card">
              <img src={el?.images[0]} alt="product.png" />
              <span>{el?.quantity}</span>
            </div>
          ))}
        </div>
        <div className="complete__details">
          <div className="df">
            <p>Order code:</p>
            <span>#0123_45678</span>
          </div>
          <div className="df">
            <p>Date:</p>
            <span>October 19, 2023</span>
          </div>
          <div className="df">
            <p>Total:</p>
            <span>${total}</span>
          </div>
          <div className="df">
            <p>Payment method:</p>
            <span>Credit Card</span>
          </div>
        </div>
        <button onClick={() => handleComplete()}>Purchase history</button>
      </div>
    </Fragment>
  );
};

export default Complete;
