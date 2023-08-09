import React, {type FormEvent, useState} from "react";
import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {MODE_TYPE} from "../types/enums/mode";
import {RenderItems} from "./RenderItems";
import {type IItem} from "../types/item";
import {type IRowBlock} from "../types/block";
import {useBlock} from "../hooks/useBlock";

interface BlockProps {
  onDeleteBlock: (id: string) => void;
  onUpdateBlackItem: (id: string, data: IRowBlock) => void;
  mode: string;
}

export function Block({
  onDeleteBlock,
  mode,
  onUpdateBlackItem,
}: BlockProps): JSX.Element {
  const block = useBlock();
  const navigate = useNavigate();
  const [itemsValue, setItemsValue] = useState<IItem[]>(block.items);

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onUpdateBlackItem(block.id, {...block, items: itemsValue});
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row className="align-items-center mb-4">
          <Col>
            <h1>{block.name}</h1>
          </Col>

          <Col xs="auto">
            <Stack gap={2} direction="horizontal">
              {mode === MODE_TYPE.EDITOR ? (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    onDeleteBlock(block.id);
                    navigate("/");
                  }}>
                  Delete
                </Button>
              ) : (
                <Button variant="success" type="submit">
                  Submit
                </Button>
              )}
              <Link to="/">
                <Button variant="outline-secondary">Back</Button>
              </Link>
            </Stack>
          </Col>
        </Row>
        <Row>
          <RenderItems items={block.items} handleChange={setItemsValue} />
        </Row>
      </Form>
    </>
  );
}
