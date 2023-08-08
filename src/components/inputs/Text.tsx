import React, {type ChangeEvent} from "react";
import {Form} from "react-bootstrap";
import {type IItem} from "../../types/item";

export interface TextInputProps {
  item: IItem;
  handleChange: (e: ChangeEvent, id: string) => void;
}

export function TextInput({item, handleChange}: TextInputProps): JSX.Element {
  return (
    <Form.Group className="mb-3" controlId={item.name}>
      <Form.Label>{item.label}</Form.Label>
      <Form.Control
        defaultValue={item.value}
        onChange={(e: ChangeEvent) => {
          handleChange(e, item.id);
        }}
      />
    </Form.Group>
  );
}
