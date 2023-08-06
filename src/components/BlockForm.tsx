import React, {type FormEvent, useState, useRef} from "react";
import {Offcanvas, Col, Row, Stack, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ItemForm} from "./itemForm";
import {type Item} from "../types/item";

export function BlockForm(): JSX.Element {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleCloseAddItem = (): void => {
    setShowAddItem(false);
  };
  const handleShowAddItem = (): void => {
    setShowAddItem(true);
  };

  const handleItems = (item: Item): void => {
    setItems(prev => [...prev, item]);
    handleCloseAddItem();
  };

  console.log(items);

  function handleSubmit(e: FormEvent): void {}

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={5}>
          <Row xs={1}>
            <Col>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>
            <div className="dropdown-divider bg-secondary"></div>
            <Col>render Items</Col>
            <Col>
              <Button
                type="button"
                onClick={handleShowAddItem}
                variant="outline-secondary"
                className="mt-4">
                Add Item +
              </Button>
            </Col>
          </Row>

          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Link to="..">
              <Button type="button" variant="outline-secondary">
                Cancel
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Form>

      <Offcanvas show={showAddItem} onHide={handleCloseAddItem} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Item</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ItemForm onSubmit={handleItems} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
