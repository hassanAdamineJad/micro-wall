import {useOutletContext} from "react-router-dom";
import {type IRowBlock} from "../types/block";

export function useBlock(): IRowBlock {
  return useOutletContext<IRowBlock>();
}
