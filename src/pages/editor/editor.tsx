import React from "react";
import RootPage from "../root";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function EditorPage(): JSX.Element {
  return (
    <>
      <RootPage header="Editor">
        <Link to={`/editor/new`}>
          <Button variant="primary" size="lg" className="float-button">
            Add Block
          </Button>
        </Link>
      </RootPage>
    </>
  );
}
