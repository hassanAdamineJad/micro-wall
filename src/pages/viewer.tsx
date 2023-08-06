import React from "react";
import RootPage from "./root";
import {Col, Row} from "react-bootstrap";

export function ViewerPage(): JSX.Element {
  return (
    <>
      <RootPage header="Viewer">
        <Row>
          <Col>VI</Col>
        </Row>
      </RootPage>
    </>
  );
}
