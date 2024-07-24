import "./CardItem.scss";

import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const CardItem = ({ el }) => {
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(el?.rating); i++) {
      res.push(
        <FaStar key={`full-${i}`} className="cart__item__rating__star" />
      );
    }
    if (el?.rating % 1 > 0.4) {
      res.push(
        <FaRegStarHalfStroke key="half" className="cart__item__rating__star" />
      );
    }
    for (let i = Math.round(el?.rating); i < 6; i++) {
      res.push(
        <FaRegStar key={`empty-${i}`} className="cart__item__rating__star" />
      );
    }

    return res;
  };
  return (
    <Fragment>
      <div className="product__item">
        <div className="product__item__img">
          <NavLink to={`/singlePage/${el?.id}`}>
            <img src={el?.images[0]} alt="product.png" />
          </NavLink>
        </div>
        <div className="product__item__info">
          <div className="product__item__rating">{getRating()}</div>
          <h3 className="product__item__title">{el?.title}</h3>
          <div className="product__item__prices">
            <span className="product__item__price">${el?.price}.00</span>
            <span className="product__item__old__price">${el?.oldPrice}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardItem;
