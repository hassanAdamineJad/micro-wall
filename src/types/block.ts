import {type IItem} from "./item";

export interface IBlock {
  name: string;
  items: IItem[];
}

export interface IRowBlock extends IBlock {
  id: string;
}
