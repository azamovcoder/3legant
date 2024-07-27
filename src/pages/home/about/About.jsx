import "./About.scss";

import React, { Fragment, useEffect } from "react";

import { HomeAboutData } from "../../../static";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="about container">
        <div className="about__cards">
          {HomeAboutData?.map((el) => (
            <div key={el?.id} className="about__card">
              <img src={el?.img} alt={el?.title} />
              <h3>{el?.title}</h3>
              <p>{el?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
