import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {type IItem} from "../types/item";
import {TextInput} from "./inputs/Text";
import {RangeInput} from "./inputs/Range";
import {Text} from "./presentations/Text";
import {Image} from "./presentations/Image";
import {Markdown} from "./presentations/MarkDown";

interface RenderItemsProps {
  items: IItem[];
  handleChange: (e: any, id: string) => void;
  handleRemoveItem: (id: string) => void;
}

const components: any = {
  textInput: TextInput,
  range: RangeInput,
  text: Text,
  image: Image,
  Markdown,
};

export function RenderItems({
  items,
  handleChange,
  handleRemoveItem,
}: RenderItemsProps): JSX.Element {
  return (
    <Row>
      {items.map((item: IItem, key) => {
        const {id, type} = item;

        const Component = components[type];

        return (
          <>
            <Col xs={10} key={id}>
              <Component item={item} />
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
