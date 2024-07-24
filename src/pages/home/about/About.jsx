import "./About.scss";

import React, { Fragment } from "react";

import { HomeAboutData } from "../../../static";

const About = () => {
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
