import "./Home.scss";

import React, { Fragment } from "react";

import About from "./about/About";
import Articles from "./articles/Articles";
import Hero from "./hero/Hero";
import NewArrivals from "./newArrivals/NewArrivals.";
import Newsletter from "../../components/newsletter/Newsletter";
import Sale from "./sale/Sale";
import Simply from "./simply/Simply";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <NewArrivals />
      <Simply />
      <About />
      <Sale />
      <Articles />
      <Newsletter />
    </Fragment>
  );
};

export default Home;
