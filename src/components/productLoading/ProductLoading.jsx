import "./ProductLoading.scss";

import React, { Fragment } from "react";

const ProductLoading = () => {
  return (
    <Fragment>
      <div className=" loading__products container">
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
      </div>
    </Fragment>
  );
};

export default ProductLoading;
