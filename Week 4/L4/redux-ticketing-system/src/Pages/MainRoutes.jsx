import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReqAuth } from "../Components/ReqAuth";
import { Sidebar } from "../Components/Sidebar";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction="row">
              <Sidebar />
              <Homepage />
            </Stack>
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1> 404 error page not found</h1>} />
    </Routes>
  );
};
