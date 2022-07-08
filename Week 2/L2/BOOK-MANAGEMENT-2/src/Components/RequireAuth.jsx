import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//to varify the user is authenticated,
//if yes,the let him go to the expected components
//else redirect him to login page
export const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const location = useLocation();
  console.log("inside require auth", location);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
