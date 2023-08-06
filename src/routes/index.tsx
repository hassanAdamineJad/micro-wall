import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "../pages/home";

export function AppRoutes(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
