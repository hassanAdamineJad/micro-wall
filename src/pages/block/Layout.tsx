import React, {useContext} from "react";
import {Navigate, Outlet, useParams} from "react-router-dom";
import {Context} from "../../context/Context";

export function BlockLayout(): JSX.Element {
  const {blocks} = useContext(Context);
  const {id} = useParams();

  const block = blocks.find(n => n.id === id);

  if (block == null) return <Navigate to="/" replace />;

  return <Outlet context={block} />;
}
