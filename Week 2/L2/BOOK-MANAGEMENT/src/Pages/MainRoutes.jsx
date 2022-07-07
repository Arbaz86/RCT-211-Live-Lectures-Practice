import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import { Books } from "./Books";
import { EditBook } from "./EditBook";
import { SingleBook } from "./SingleBook";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/books/:id/edit" element={<EditBook />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>404 error page not found</h1>} />
    </Routes>
  );
};
