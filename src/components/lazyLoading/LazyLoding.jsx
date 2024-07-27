import "./LazyLoading.scss";

import React, { memo } from "react";

const LazyLoading = () => {
  return (
    <div className="lazy__loader__container container">
      <span className="lazy__loader"></span>
    </div>
  );
};

export default memo(LazyLoading);
