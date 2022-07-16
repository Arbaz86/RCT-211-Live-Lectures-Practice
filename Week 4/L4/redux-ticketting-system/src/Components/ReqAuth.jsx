import React from "react";
import { Navigate } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const isAuth = false;
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};
