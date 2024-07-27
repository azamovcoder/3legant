import "./Favorites.scss";

import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
} from "react-icons/fa6";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "../../components/cardItem/CardItem";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../context/slices/cartSlices";
import emptyImg from "../../assets/Cart/emptyw.svg";
import { toggleHeart } from "../../context/slices/wishlistSlices";

const Favorites = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  let wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  console.log(wishlistData);
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(wishlistData?.el?.rating); i++) {
      res.push(
        <FaStar key={`full-${i}`} className="cart__item__rating__star" />
      );
    }
    if (wishlistData?.el?.rating % 1 > 0.4) {
      res.push(
        <FaRegStarHalfStroke key="half" className="cart__item__rating__star" />
      );
    }
    for (let i = Math.round(wishlistData?.el?.rating); i < 6; i++) {
      res.push(
        <FaRegStar key={`empty-${i}`} className="cart__item__rating__star" />
      );
    }

    return res;
  };
  const dispatch = useDispatch();
  return (
    <Fragment>
      {wishlistData.length ? (
        <div className="favorites container">
          <div className="favorites__cards">
            {wishlistData?.map((el) => (
              <div className="favorites__cards__card">
                <div className="favorites__cards__card__img">
                  <NavLink to={`/singlePage/${el?.id}`}>
                    <img src={el?.images[0]} alt="product.png" />
                  </NavLink>
                  <button
                    onClick={() => dispatch(toggleHeart(el))}
                    className="favorites__cards__card__img__like__btn"
                  >
                    {wishlistData.some((element) => element.id === el.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                  <button
                    disabled={cartData?.some((element) => element.id === el.id)}
                    onClick={() => {
                      dispatch(addToCart(el));
                    }}
                    className="favorites__cards__card__img__add-cart__btn"
                  >
                    {cartData?.some((element) => element.id === el.id)
                      ? "Added to Cart"
                      : "Add to  Cart"}
                  </button>
                </div>
                <div className="favorites__cards__card__info">
                  <div className="favorites__cards__card__rating">
                    {getRating()}
                  </div>
                  <h3 className="favorites__cards__card__title">{el?.title}</h3>
                  <div className="favorites__cards__card__prices">
                    <span className="favorites__cards__card__price">
                      ${el?.price}.00
                    </span>
                    <span className="favorites__cards__card__old__price">
                      ${el?.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="empty">
            <img src={emptyImg} alt="empty.png" />
            <h2>Your Favorites empty yet.</h2>
            <NavLink to={"/"}>Go Home</NavLink>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Favorites;
