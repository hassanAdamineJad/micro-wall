import React from "react";
import {Button, Col, Row, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useBlock} from "../hooks/useBlock";

export function Block({
  onDeleteBlock,
}: {
  onDeleteBlock: (id: string) => void;
}): JSX.Element {
  const block = useBlock();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{block.name}</h1>
        </Col>

        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Button
              variant="outline-danger"
              onClick={() => {
                onDeleteBlock(block.id);
                navigate("/");
              }}>
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
