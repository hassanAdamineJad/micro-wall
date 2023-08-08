import React, {useRef, type FormEvent} from "react";
import {Button, Form, Stack} from "react-bootstrap";
import {
  ItemInputTypesEnum,
  ItemPresentingTypesEnum,
} from "../types/enums/itemTypes";
import {type ItemFormProps} from "../types/components/ItemForm";
import {v4 as uuidV4} from "uuid";

export function ItemForm({onSubmit}: ItemFormProps): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    onSubmit({
      id: uuidV4(),
      name: nameRef.current!.value,
      label: labelRef.current!.value,
      type: typeRef.current!.value,
      value: valueRef.current!.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required ref={nameRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="label">
          <Form.Label>Label</Form.Label>
          <Form.Control required ref={labelRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select aria-label="Default select example" ref={typeRef}>
            <option>Select Type</option>

            {Object.values({
              ...ItemPresentingTypesEnum,
              ...ItemInputTypesEnum,
            }).map((type, key) => {
              return (
                <option key={key} value={type}>
                  {type}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="value">
          <Form.Label>Default Value</Form.Label>
          <Form.Control ref={valueRef} />
        </Form.Group>

        <Button type="submit" variant="primary">
          Add Item
        </Button>
      </Stack>
    </Form>
  );
}
