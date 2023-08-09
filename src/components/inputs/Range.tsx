import React, {type ChangeEvent} from "react";
import {Form} from "react-bootstrap";
import {type IItem} from "../../types/item";

export interface TextInputProps {
  item: IItem;
  handleChange: (e: ChangeEvent, id: string) => void;
}

export function RangeInput({item, handleChange}: TextInputProps): JSX.Element {
  return (
    <Form.Group className="mb-3" controlId={item.name}>
      <Form.Label>{item.label}</Form.Label>
      <Form.Range
        onChange={(e: ChangeEvent) => {
          handleChange(e, item.id);
        }}
        defaultValue={item.value}
      />
    </Form.Group>
  );
}
