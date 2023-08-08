import React from "react";
import {type IItem} from "../../types/item";
import {Stack} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export interface TextInputProps {
  item: IItem;
}

export function Markdown({item}: TextInputProps): JSX.Element {
  return (
    <Stack gap={2}>
      <h2>{item.label}</h2>
      <ReactMarkdown>{item.value}</ReactMarkdown>
    </Stack>
  );
}
