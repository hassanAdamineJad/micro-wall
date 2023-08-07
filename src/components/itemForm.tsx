import React, {useRef, type FormEvent} from "react";
import {Button, Form, Stack} from "react-bootstrap";
import {ItemTypesEnum} from "../types/enums/itemTypes";
import {type ItemFormProps} from "../types/components/ItemForm";

export function ItemForm({onSubmit}: ItemFormProps): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    onSubmit({
      name: nameRef.current!.value,
      label: labelRef.current!.value,
      type: typeRef.current!.value,
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

        <Form.Group className="mb-3" controlId="label">
          <Form.Label>Type</Form.Label>
          <Form.Select aria-label="Default select example" ref={typeRef}>
            <option>Select Type</option>

            {Object.values(ItemTypesEnum).map((type, key) => {
              return (
                <option key={key} value={type}>
                  {type}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Add Item
        </Button>
      </Stack>
    </Form>
  );
}
