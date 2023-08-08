import React, {
  type ChangeEvent,
  type SetStateAction,
  type Dispatch,
} from "react";
import {Col, Row, Button} from "react-bootstrap";
import {type IItem} from "../types/item";
import {TextInput} from "./inputs/Text";
import {RangeInput} from "./inputs/Range";
import {Text} from "./presentations/Text";
import {Image} from "./presentations/Image";
import {Markdown} from "./presentations/MarkDown";

const components: any = {
  textInput: TextInput,
  range: RangeInput,
  text: Text,
  image: Image,
  markdown: Markdown,
};

interface RenderItemsProps {
  items: IItem[];
  handleChange: Dispatch<SetStateAction<IItem[]>>;
  handleRemoveItem?: (id: string) => void;
}

export function RenderItems({
  items,
  handleChange,
  handleRemoveItem,
}: RenderItemsProps): JSX.Element {
  const handleChangeInput = (e: ChangeEvent, id: string): void => {
    const {target} = e;
    const value = (target as HTMLButtonElement).value;

    handleChange(prev => {
      return prev.map(i => {
        if (i.id === id) {
          return {...i, value};
        } else {
          return i;
        }
      });
    });
  };

  return (
    <Row>
      {items.map((item: IItem, key) => {
        const {id, type} = item;

        const Component = components[type];

        return (
          <div key={id}>
            <Col xs={10}>
              <Component item={item} handleChange={handleChangeInput} />
            </Col>
            <Col xs="auto" className="mt-3 align-self-center">
              {handleRemoveItem ? (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    handleRemoveItem(id);
                  }}>
                  &times;
                </Button>
              ) : (
                ""
              )}
            </Col>
          </div>
        );
      })}
    </Row>
  );
}
