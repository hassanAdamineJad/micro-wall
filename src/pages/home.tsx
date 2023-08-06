import React from "react";
import RootPage from "./root";
import {Button, Col, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

export function HomePage(): JSX.Element {
  return (
    <>
      <RootPage header="Well come to the Micro Wall">
        <Row>
          <Col>
            <Stack
              gap={3}
              direction="horizontal"
              className="justify-content-center">
              <Link to={`/editor`}>
                <Button variant="primary">Editor</Button>
              </Link>
              <Link to="/viewer">
                <Button variant="secondary">Viewer</Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </RootPage>
    </>
  );
}
