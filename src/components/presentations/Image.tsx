import React from "react";
import {type IItem} from "../../types/item";
import {Stack} from "react-bootstrap";

export interface TextInputProps {
  item: IItem;
}

export function Image({item}: TextInputProps): JSX.Element {
  return (
    <Stack gap={2}>
      <h2>{item.label}</h2>
      <img
        src={item.value || "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"}
        className="rounded-3"
        alt="Avatar"
      />
    </Stack>
  );
}
