import {type Dispatch, type SetStateAction, createContext} from "react";
import {type IRowBlock} from "../types/block";

export interface BlockContextType {
  blocks: IRowBlock[];
  setBlock: Dispatch<SetStateAction<IRowBlock[]>>;
}

export const BlocksContext = createContext<BlockContextType>({
  blocks: [],
  setBlock: () => {},
});
