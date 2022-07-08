import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  console.log("Inside Login Page", location);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        return navigate(comingFrom, { replace: true });
      });
    }
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
