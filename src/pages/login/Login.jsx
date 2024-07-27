import "./Login.scss";

import { IoEye, IoEyeOff } from "react-icons/io5";
import React, { Fragment, useEffect, useState } from "react";

import LoginImg from "../../assets/Blog/login.png";
import { setToken } from "../../context/slices/authSlices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import useGetValue from "../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "john32",
  password: "12345677",
};

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { user, setUser, handleChange } = useGetValue(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (user.name === "john32" && user.password === "12345677") {
      toast.success("Welcome to Admin !!!");
      dispatch(setToken("user-token"));
      navigate("/admin/create-product");
    } else {
      toast.error("Username or Password is wrong!!!");
    }
  };
  return (
    <Fragment>
      <div className="login">
        <div className="login__img">
          <img src={LoginImg} alt="login.jpg" />
          <h3>3legant.</h3>
        </div>
        <div className="login__right container">
          <form onSubmit={handleLogin} className="login__right__form">
            <h2>Sign In</h2>
            <p>
              Don’t have an accout yet? <span> Sign Up</span>
            </p>
            <div className="login__right__form__password">
              <input
                value={user.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Username"
              />
            </div>
            <div className="login__right__form__password">
              <input
                value={user.password}
                onChange={handleChange}
                name="password"
                type={eye ? "text" : "password"}
                placeholder="Password"
              />
              <span onClick={() => setEye((p) => !p)}>
                {" "}
                {eye ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>

            <div
              className="df
            "
            >
              <div className="login__right__form__radio">
                <input type="radio" />
                <p>Remember me </p>
              </div>
              <p>Forgot password?</p>
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
