import "./Shop.scss";

import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
} from "react-icons/fa6";
import React, { Fragment, useState } from "react";

import { NavLink } from "react-router-dom";
import Newsletter from "../../components/newsletter/Newsletter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useSelector } from "react-redux";

const Shop = () => {
  const [page, setPage] = useState(1);
  const { data: length } = useGetProductsQuery();
  const { data } = useGetProductsQuery({ page, limit: 8 });
  const pageLength = Math.ceil(length?.length / 10);

  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  console.log(data);
  const handleChange = (event, value) => {
    setPage(value);
  };
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
  return (
    <Fragment>
      <div className="shop container">
        <div className="shop__hero">
          <h2>Shop Page</h2>
          <p>Let’s design the place you always imagined.</p>
        </div>
        <div className="shop__cards">
          {data?.map((el) => (
            <div className="shop__cards__card">
              <div className="shop__cards__card__img">
                <NavLink to={`/singlePage/${el?.id}`}>
                  <img src={el?.images[0]} alt="product.png" />
                </NavLink>
                <button
                  onClick={() => dispatch(toggleHeart(el))}
                  className="shop__cards__card__img__like__btn"
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
                  className="shop__cards__card__img__add-cart__btn"
                >
                  {cartData?.some((element) => element.id === el.id)
                    ? "Added to Cart"
                    : "Add to  Cart"}
                </button>
              </div>
              <div className="shop__cards__card__info">
                <div className="shop__cards__card__rating">{getRating()}</div>
                <h3 className="shop__cards__card__title">{el?.title}</h3>
                <div className="shop__cards__card__prices">
                  <span className="shop__cards__card__price">
                    ${el?.price}.00
                  </span>
                  <span className="shop__cards__card__old__price">
                    ${el?.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="shop__pagination">
          <Stack spacing={2}>
            <Pagination
              count={pageLength}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
      <Newsletter />
    </Fragment>
  );
};

export default Shop;
