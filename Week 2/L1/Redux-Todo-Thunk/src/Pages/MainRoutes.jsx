import React from "react";
import { Route, Routes } from "react-router-dom";
import { Todos } from "./Todos";
import { SingleTodo } from "./SingleTodo";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/:id" element={<SingleTodo />} />
    </Routes>
  );
};
