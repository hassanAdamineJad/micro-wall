import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "../pages/home";
import {EditorPage} from "../pages/editor/editor";
import {CreatePage} from "../pages/editor/create";
import {ViewerPage} from "../pages/viewer";
import {BlockLayout} from "../components/BlockLayout";
import {BlockPage} from "../pages/block/blockPage";

export function AppRoutes(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/editor">
          <Route index element={<EditorPage />} />
          <Route path="new" element={<CreatePage />} />
        </Route>
        <Route path="/:id" element={<BlockLayout />}>
          <Route index element={<BlockPage />} />
          <Route path="edit" element={<>Edit</>} />
        </Route>

        <Route path="/viewer">
          <Route index element={<ViewerPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
