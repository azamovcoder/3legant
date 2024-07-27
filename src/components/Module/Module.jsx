import "./module.scss";

import React, { memo } from "react";

import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Module = ({ children, close, width }) => {
  return (
    <>
      <div className="owerlay" onClick={() => close(false)}></div>
      <div style={{ width }} className="modal">
        {children}
      </div>
    </>
  );
};

export default memo(Module);
