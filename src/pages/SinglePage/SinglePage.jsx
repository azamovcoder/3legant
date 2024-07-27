import "./SinglePage.scss";

import {
  FaHeart,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
} from "react-icons/fa6";
import React, { Fragment, useEffect, useState } from "react";
import { addToCart, decrementCart } from "../../context/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";

import CountdownTimer from "./countdownTimer/CountdownTimer";
import { FaRegHeart } from "react-icons/fa";
import Newsletter from "../../components/newsletter/Newsletter";
import { SingleComments } from "../../static";
import SingleLoading from "../../components/SingleLoading/SingleLoading";
import { toggleHeart } from "../../context/slices/wishlistSlices";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { Id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(Id);
  const [indexImage, setIndexImage] = useState(0);
  const [count, setCount] = useState(1);
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(product?.rating); i++) {
      res.push(
        <FaStar key={`full-${i}`} className="cart__item__rating__star" />
      );
    }
    if (product?.rating % 1 > 0.4) {
      res.push(
        <FaRegStarHalfStroke key="half" className="cart__item__rating__star" />
      );
    }
    for (let i = Math.round(product?.rating); i < 6; i++) {
      res.push(
        <FaRegStar key={`empty-${i}`} className="cart__item__rating__star" />
      );
    }

    return res;
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [Id]);
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="single container">
        <div className="single__left">
          <div className="single__left__img">
            <img src={product?.images?.[indexImage]} alt="product.img" />
          </div>
          <div className="single__left__images">
            {product?.images?.map((url, inx) => (
              <div className="single__left__images__img" key={inx}>
                <img
                  onClick={() => setIndexImage(inx)}
                  src={url}
                  alt="product.img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single__right">
          <div className="single__right__rating">
            {getRating()} {product?.stock} Reviews
          </div>
          <h3 className="single__right__title">{product?.title}</h3>
          <p className="single__right__desc">{product?.description}</p>
          <div className="single__right__prices">
            <p className="single__right__prices__price">${product?.price}</p>
            <p className="single__right__prices__old__price">
              ${product?.oldPrice}
            </p>
          </div>
          <div className="single__right__timer">
            <CountdownTimer />
          </div>
          <div className="single__right__buttons">
            <div className="single__right__buttons__top">
              <button
                onClick={() => dispatch(toggleHeart(product))}
                className="single__right__buttons__like"
              >
                {wishlistData.some((element) => element.id === product?.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
                Wishlist
              </button>
            </div>
            <button
              disabled={cartData?.some((element) => element.id === product?.id)}
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className="single__right__buttons__add__cart"
            >
              {cartData?.some((element) => element.id === product?.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
          <div className="single__right__bottom">
            <div className="single__right__bottom__item">
              <p className="single__right__bottom__item__left">SKU</p>
              <p>{product?.id}</p>
            </div>
            <div className="single__right__bottom__item">
              <p className="single__right__bottom__item__left">CATEGORY</p>
              <p>{product?.category}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="single__comments container">
        <div className="single__comments__top">
          <h2>Customer Reviews</h2>
          <div>{getRating()} 11 Reviews </div>
        </div>
        <div className="single__comments__cards">
          {SingleComments?.map((el) => (
            <div key={el?.id} className="single__comments__cards__card">
              <div className="single__comments__cards__card__img">
                <img src={el?.img} alt="" />
              </div>
              <div className="single__comments__cards__card__info">
                <h3>{el?.title}</h3>
                <span>{getRating()}</span>
                <p>{el?.desc}</p>
                <div className="single__comments__cards__card__info__buttons">
                  <button>Like</button>
                  <button>Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading && <SingleLoading />}
      <Newsletter />
    </Fragment>
  );
};

export default SinglePage;
