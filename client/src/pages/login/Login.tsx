import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { userApi } from "api/user";
import React from 'react'
import { getIsFetching, loginFailure, loginStart, loginSuccess } from "store/user/userSlice";
export default function Login() {
  const userRef =  React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef =  React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const isFetchingV2 = useAppSelector(getIsFetching)
  // const { dispatch , isFetching } = useContext(Context);
  const dispatchV2 = useAppDispatch();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", {
  //       username: userRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE" });
  //   }
  // };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    dispatchV2(loginStart());
    // dispatch({ type: "LOGIN_START" })
    try {
      const res = await userApi.login({
        username: userRef?.current?.['value'] ,
        password: passwordRef?.current?.['value'] ,
      });
      console.log(res)
      dispatchV2(loginSuccess( res.data));
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE" });
      dispatchV2(loginFailure());

    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetchingV2}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
