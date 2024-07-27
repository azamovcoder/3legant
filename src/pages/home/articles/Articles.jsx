import "./Articles.scss";

import React, { Fragment, useEffect } from "react";

import ArtImg1 from "../../../assets/home/art1.png";
import ArtImg2 from "../../../assets/home/art2.png";
import ArtImg3 from "../../../assets/home/art3.png";
import { FaArrowRight } from "react-icons/fa6";

const Articles = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="articles container">
        <div className="articles__top">
          <h2>Articles</h2>
          <button>
            More Articles <FaArrowRight />
          </button>
        </div>
        <div className="articles__cards">
          <div className="articles__cards__card">
            <img src={ArtImg1} alt="art.png" />
            <h3>7 ways to decor your home</h3>
            <button>
              Read More <FaArrowRight />
            </button>
          </div>
          <div className="articles__cards__card">
            <img src={ArtImg2} alt="art.png" />
            <h3>Kitchen organization</h3>
            <button>
              Read More <FaArrowRight />
            </button>
          </div>
          <div className="articles__cards__card">
            <img src={ArtImg3} alt="art.png" />
            <h3>Decor your bedroom</h3>
            <button>
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Articles;
