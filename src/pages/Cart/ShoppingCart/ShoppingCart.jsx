import "./ShoppingCart.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import {
  addToCart,
  decrementCart,
  remove,
} from "../../../context/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";

import CartSidebar from "../CartSidebar/CartSidebar";
import { IoCloseOutline } from "react-icons/io5";
import couponImg from "../../../assets/Cart/coupon.svg";

const ShoppingCart = () => {
  const cartData = useSelector((state) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState("");
  const [coupon, setCoupon] = useState(0);
  console.log(cartData);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);
  console.log(totalPrice);

  const [shipping, setShipping] = useState(0);
  const subtotal = totalPrice;

  const handleShippingChange = (e) => {
    setShipping(parseFloat(e.target.value));
  };
  const total = subtotal + shipping;
  const handleAmount = (e) => {
    e.preventDefault();
    if (value === "Laylo") {
      setCoupon(+total * 0.02 * 0.2);
    } else {
      alert("Promocode error");
    }
    setValue("");
  };
  return (
    <Fragment>
      <CartSidebar />
      <div className="shopping__cart container">
        <div className="shopping__cart__list">
          <div className="shopping__cart__list__top">
            <h3>Product</h3>
            <ul>
              <li>
                <h3>Quantity</h3>
              </li>
              <li>
                <h3>Price</h3>
              </li>
              <li>
                <h3>Subtotal</h3>
              </li>
            </ul>
          </div>
          <div className="shopping__cart__list__items">
            {cartData?.map((el) => (
              <div key={el?.id} className="shopping__cart__list__item">
                <div className="shopping__cart__list__item__left">
                  <img src={el?.images[0]} alt="product.img" />
                  <div className="shopping__cart__list__item__left__desc">
                    <h4>{el?.title}</h4>
                    <p>Stock: {el?.stock}</p>
                    <div className="shopping__cart__list__item__right__button__dn">
                      <button
                        disabled={el.quantity <= 1}
                        onClick={() => dispatch(decrementCart(el))}
                      >
                        -
                      </button>
                      <span>{el?.quantity}</span>
                      <button onClick={() => dispatch(addToCart(el))}>+</button>
                    </div>
                    <button id="rem" onClick={() => dispatch(remove(el))}>
                      Remove
                    </button>
                  </div>
                </div>
                <ul className="shopping__cart__list__item__right">
                  <li className="shopping__cart__list__item__right__button">
                    <button
                      disabled={el.quantity <= 1}
                      onClick={() => dispatch(decrementCart(el))}
                    >
                      -
                    </button>
                    <span>{el?.quantity}</span>
                    <button onClick={() => dispatch(addToCart(el))}>+</button>
                  </li>
                  <li className="shopping__cart__list__item__right__price">
                    <p>${el?.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(remove(el))}
                    >
                      <IoCloseOutline fontSize={20} />
                    </button>
                  </li>
                  <li className="shopping__cart__list__item__right__subtotal">
                    <p>${el?.price * el?.quantity}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-summary">
          <h2>Cart summary</h2>
          <div className="shipping-options">
            <label>
              <input
                type="radio"
                name="shipping"
                value="0"
                checked={shipping === 0}
                onChange={handleShippingChange}
              />
              Free shipping
              <span className="cost">$0.00</span>
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                value="15"
                checked={shipping === 15}
                onChange={handleShippingChange}
              />
              Express shipping
              <span className="cost">+$15.00</span>
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                value="21"
                checked={shipping === 21}
                onChange={handleShippingChange}
              />
              Pick Up
              <span className="cost">$21.00</span>
            </label>
          </div>
          <div className="summary">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>${total.toFixed(2) - coupon}</span>
            </div>
          </div>
          <NavLink to={"/cart/checkOut"}>
            <button className="checkout-button">Checkout</button>
          </NavLink>
        </div>
      </div>
      <div className="shopping__coupon container">
        <h3>Have a coupon?</h3>
        <p>Add your code for an instant cart discount</p>
        <form onSubmit={handleAmount} className="shopping__coupon__input">
          <div className="shopping__coupon__input__left">
            <img src={couponImg} alt="" />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Coupon Code"
            />
          </div>
          <button>Apply</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
