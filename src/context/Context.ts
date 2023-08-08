import {type Dispatch, type SetStateAction, createContext} from "react";
import {type IRowBlock} from "../types/block";
import {MODE_TYPE} from "../types/enums/mode";

export interface ContextType {
  blocks: IRowBlock[];
  setBlock: Dispatch<SetStateAction<IRowBlock[]>>;
  mode: MODE_TYPE;
  setMode: Dispatch<SetStateAction<MODE_TYPE>>;
}

export const Context = createContext<ContextType>({
  blocks: [],
  setBlock: () => {},
  mode: MODE_TYPE.EDITOR,
  setMode: () => {},
});
