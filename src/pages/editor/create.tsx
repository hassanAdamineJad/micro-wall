import React from "react";
import RootPage from "../root";
import {BlockForm} from "../../components/BlockForm";
import {type IRowBlock, type IBlock} from "../../types/block";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {v4 as uuidV4} from "uuid";

export function CreatePage(): JSX.Element {
  const [blocks, setBlocks] = useLocalStorage<IRowBlock[]>("BLOCKS", []);

  const onCreateBlock = (data: IBlock): void => {
    setBlocks(prevBlocks => {
      return [...prevBlocks, {...data, id: uuidV4()}];
    });
  };

  return (
    <>
      <RootPage header="New BLock">
        <BlockForm onSubmit={onCreateBlock} />
      </RootPage>
    </>
  );
}
