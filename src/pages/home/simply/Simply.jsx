import "./Simply.scss";

import React, { Fragment } from "react";

import { FaArrowRight } from "react-icons/fa6";

const Simply = () => {
  return (
    <Fragment>
      <div className="simply container">
        <div className="simply__top">
          <h2>Simply Unique/ Simply Better.</h2>
          <p>
            <span>3legant </span>is a gift & decorations store based in HCMC,
            Vietnam. Est since 2019.
          </p>
        </div>
        <div className="simply__cards">
          <div className="simply__card__left">
            <div className="simply__card__left__item">
              <h3>Living Room</h3>
              <button>
                Shop Now <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="simply__card__right__top">
            <div className="simply__card__right__top__item">
              <h3>Bedroom</h3>
              <button>
                Shop Now <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="simply__card__right__bottom">
            <div className="simply__card__right__bottom__item">
              <h3>Kitchen</h3>
              <button>
                Shop Now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Simply;
