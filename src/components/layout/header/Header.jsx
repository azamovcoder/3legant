import "./Header.scss";

import React, { Fragment } from "react";

import { BsBagHeart } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import closeImg from "../../../assets/home/close.png";
import ticketImg from "../../../assets/home/ticket.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="header__top">
        <div className="header__top__main container">
          <img src={ticketImg} alt="tiketImg" />
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
      <header>
        <div className="header">
          <div className="header__container container">
            <div className="header__logo">
              <NavLink to={"/"}>
                <h3>3legant.</h3>
              </NavLink>
            </div>
            <ul className="header__list">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Shop</NavLink>
              </li>
              <li>
                <NavLink>Blog</NavLink>
              </li>
              <li>
                <NavLink>Contact Us</NavLink>
              </li>
            </ul>
            <div className="header__items">
              <NavLink>
                <LuSearch />
              </NavLink>
              <NavLink>
                <IoPersonCircleOutline />
              </NavLink>
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
