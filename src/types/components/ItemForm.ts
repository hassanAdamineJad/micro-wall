import {type IItem} from "../item";

export interface ItemFormProps {
  onSubmit: (a: IItem) => void;
}
