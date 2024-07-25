import "./SinglePage.scss";

import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import React, { Fragment, useState } from "react";

import CountdownTimer from "./countdownTimer/CountdownTimer";
import { FaRegHeart } from "react-icons/fa";
import Newsletter from "../../components/newsletter/Newsletter";
import { SingleComments } from "../../static";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { Id } = useParams();
  const { data: product } = useGetProductByIdQuery(Id);
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

  return (
    <Fragment>
      <div className="single container">
        <div className="single__left">
          <div className="single__left__img">
            <img src={product?.images[indexImage]} alt="product.img" />
          </div>
          <div className="single__left__images">
            {product?.images?.map((url, inx) => (
              <div className="single__left__images__img">
                <img
                  onClick={() => setIndexImage(inx)}
                  src={url}
                  key={inx}
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
              <div className="single__right__buttons__counter">
                <button
                  disabled={count == 1}
                  onClick={() => setCount((prev) => prev - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
              </div>
              <button className="single__right__buttons__like">
                <FaRegHeart /> Wishlist
              </button>
            </div>
            <button className="single__right__buttons__add__cart">
              Add to Cart
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
          <div className="">{getRating()} 11 Reviews </div>
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
      <Newsletter />
    </Fragment>
  );
};

export default SinglePage;
