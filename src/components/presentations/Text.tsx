import React from "react";
import {type IItem} from "../../types/item";

export interface TextInputProps {
  item: IItem;
}

export function Text({item}: TextInputProps): JSX.Element {
  return (
    <>
      <h1>{item.label}</h1>
      <p>{item.value}</p>
    </>
  );
}
