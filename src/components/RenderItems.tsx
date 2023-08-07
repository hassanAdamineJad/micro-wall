import React from "react";
import {
  Col,
  Row,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import {type IItem} from "../types/item";
import {ItemTypesEnum} from "../types/enums/itemTypes";

export function RenderItems({
  items,
  handleChange,
  handleRemoveItem,
}: {
  items: IItem[];
  handleChange: any;
  handleRemoveItem: (id: string) => void;
}): JSX.Element {
  return (
    <Row>
      {items.map((item: IItem, key) => {
        const {id, label, name, type, value} = item;
        const hasMarkUp = type === ItemTypesEnum.MARKUP;
        const hasImage = type === ItemTypesEnum.IMAGE;

        return (
          <>
            <Col xs={10} key={id}>
              {hasMarkUp ? (
                <FormGroup className="mb-3" controlId={name}>
                  <FormLabel>{label}</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={15}
                    onChange={e => handleChange(e, id)}
                    defaultValue={value}
                  />
                </FormGroup>
              ) : (
                <FormGroup className="mb-3" controlId={name}>
                  <FormLabel>{label}</FormLabel>
                  <FormControl
                    type="text"
                    placeholder={hasImage ? "Image URL" : ""}
                    onChange={e => handleChange(e, name, key)}
                    defaultValue={value}
                  />
                </FormGroup>
              )}
            </Col>
            <Col xs="auto" className="mt-3 align-self-center">
              <Button
                variant="outline-danger"
                onClick={() => {
                  handleRemoveItem(id);
                }}>
                &times;
              </Button>
            </Col>
          </>
        );
      })}
    </Row>
  );
}
