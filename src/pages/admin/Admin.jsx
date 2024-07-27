import "./Admin.scss";

import React, { Fragment } from "react";

import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Fragment>
      <div className="admin">
        <AdminSidebar />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Admin;
