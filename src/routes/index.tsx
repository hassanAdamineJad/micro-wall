import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "../pages/home";
import {CreatePage} from "../pages/block/create";
import {BlockLayout} from "../pages/block/Layout";
import {BlockPage} from "../pages/block";

export function AppRoutes(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/:id" element={<BlockLayout />}>
          <Route index element={<BlockPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
