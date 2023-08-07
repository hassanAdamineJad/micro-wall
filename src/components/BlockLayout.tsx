import React, {useContext} from "react";
import {Navigate, Outlet, useParams} from "react-router-dom";
import {BlocksContext} from "../context/BlockContext";

export function BlockLayout(): JSX.Element {
  const {blocks} = useContext(BlocksContext);

  const {id} = useParams();
  const block = blocks.find(n => n.id === id);

  if (block == null) return <Navigate to="/" replace />;

  return <Outlet context={block} />;
}
