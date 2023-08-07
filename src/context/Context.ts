import {type Dispatch, type SetStateAction, createContext} from "react";
import {type IRowBlock} from "../types/block";

export interface ContextType {
  blocks: IRowBlock[];
  setBlock: Dispatch<SetStateAction<IRowBlock[]>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<ContextType>({
  blocks: [],
  setBlock: () => {},
  mode: "editor",
  setMode: () => {},
});
