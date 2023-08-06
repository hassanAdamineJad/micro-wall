import {type Item} from "../item";

export interface ItemFormProps {
  onSubmit: (a: Item) => void;
}
