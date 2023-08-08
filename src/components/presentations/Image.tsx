import React from "react";
import {type IItem} from "../../types/item";
import {Col, Row, Stack} from "react-bootstrap";

export interface TextInputProps {
  item: IItem;
}

export function Image({item}: TextInputProps): JSX.Element {
  return (
    <Stack gap={2}>
      <Row>
        <Col xs={12}>
          <h2>{item.label}</h2>
        </Col>
        <Col xs={12} md={6}>
          {" "}
          <img
            src={
              item.value || "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
            }
            className="rounded-3 img-thumbnail"
            alt={item.name}
          />
        </Col>
      </Row>
    </Stack>
  );
}
