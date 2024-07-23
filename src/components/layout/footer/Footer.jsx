import "./Footer.scss";

import { LuFacebook, LuInstagram } from "react-icons/lu";
import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className=" footer container">
          <div className="footer__top">
            <div className="footer__top__left">
              <h3>3legant.</h3>
              <p>Gift & Decoration Store</p>
            </div>
            <ul className="footer__list">
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
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__left">
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <h4>Privacy Policy</h4>
              <h4>Terms of Use</h4>
            </div>
            <div className="footer__bottom__right">
              <NavLink>
                <LuInstagram />
              </NavLink>
              <NavLink>
                <LuFacebook />
              </NavLink>
              <NavLink>
                <TbBrandYoutube />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
