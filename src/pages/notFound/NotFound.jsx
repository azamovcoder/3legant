import "./NotFound.scss";

import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className=" not__found container">
      <div className="not__found__frame">
        <h1>404</h1>
        <h2>Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
