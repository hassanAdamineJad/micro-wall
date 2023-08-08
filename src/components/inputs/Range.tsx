import React from "react";
import {Form} from "react-bootstrap";
import {type IItem} from "../../types/item";

export interface TextInputProps {
  item: IItem;
}

export function RangeInput({item}: TextInputProps): JSX.Element {
  return (
    <Form.Group className="mb-3" controlId={item.name}>
      <Form.Label>{item.label}</Form.Label>
      <Form.Range defaultValue={item.value} />
    </Form.Group>
  );
}
