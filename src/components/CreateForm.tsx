import React, {type FormEvent, useState, useRef} from "react";
import {Offcanvas, Col, Row, Stack, Form, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {ItemForm} from "./ItemForm";
import {type IItem} from "../types/item";
import {RenderItems} from "./RenderItems";
import {type IBlock} from "../types/block";

interface IBlockFormProps {
  onSubmit: (a: IBlock) => void;
}

export function CreateForm({onSubmit}: IBlockFormProps): JSX.Element {
  const navigation = useNavigate();
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState<IItem[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleCloseAddItem = (): void => {
    setShowAddItem(false);
  };
  const handleShowAddItem = (): void => {
    setShowAddItem(true);
  };

  const handleSubmitItems = (item: IItem): void => {
    setItems(prev => [...prev, item]);
    handleCloseAddItem();
  };

  const handleRemoveItem = (id: string): void => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmit({
      name: titleRef.current!.value,
      items,
    });
    //  Back to main page
    navigation("..");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={5}>
          <Row>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>
            <Col xs={9}>
              <div className="dropdown-divider bg-info"></div>
            </Col>
            <Col xs={12} md={6} className="mt-3">
              <RenderItems
                items={items}
                handleChange={setItems}
                handleRemoveItem={handleRemoveItem}
              />
            </Col>
            <Col xs={12}>
              <Button
                type="button"
                onClick={handleShowAddItem}
                variant="outline-secondary">
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
          <ItemForm onSubmit={handleSubmitItems} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
