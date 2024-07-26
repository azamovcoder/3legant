import "./Header.scss";

import React, { Fragment, useState } from "react";

import { BsBagHeart } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import closeImg from "../../../assets/home/close.png";
import ticketImg from "../../../assets/home/ticket.svg";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="header__top">
        <div className="header__top__main container">
          <img src={ticketImg} alt="ticket.img" />
          <p>30% off storewide — Limited time! </p>
          <span>
            <NavLink>
              Shop Now
              <FaArrowRight />
            </NavLink>
          </span>
        </div>
        <button className="header__top__close-btn">
          <img src={closeImg} alt="close.png" />
        </button>
      </div>
      <div
        onClick={() => setShow((p) => !p)}
        className={`overlay ${show ? "overlay-show" : ""} `}
      ></div>
      <header>
        <div className="header">
          <div className="header__container container">
            <div className="header__logo">
              <button onClick={() => setShow((p) => !p)}>
                <FaBars />
              </button>
              <NavLink to={"/"}>
                <h3>3legant.</h3>
              </NavLink>
            </div>
            <div className={`header__main  ${show ? "show" : ""} `}>
              <ul className="header__list">
                <div className="header__list__top">
                  <h2>3legant</h2>
                  <button onClick={() => setShow((p) => !p)}>
                    <IoCloseOutline />
                  </button>
                </div>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"blog"}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={"contact"}>Contact Us</NavLink>
                </li>
              </ul>
              <div className="header__items">
                {search ? (
                  <div className="header__items__input">
                    <LuSearch />
                    <input type="text" placeholder="Search" />
                  </div>
                ) : (
                  <></>
                )}
                <NavLink>
                  <button
                    className="header__items__input__btn"
                    onClick={() => setSearch((prev) => !prev)}
                  >
                    {search ? <IoCloseOutline /> : <LuSearch />}
                  </button>
                </NavLink>
                <NavLink>
                  <IoPersonCircleOutline />
                </NavLink>
                <NavLink to={"cart/shoppingCart"}>
                  <CgShoppingBag />
                </NavLink>
                <NavLink to={"favorites"}>
                  <BsBagHeart />
                </NavLink>
              </div>
            </div>
            <div className="header__right">
              <NavLink>
                <CgShoppingBag />
              </NavLink>
              <NavLink>
                <BsBagHeart />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
