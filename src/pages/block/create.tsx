import React, {useContext} from "react";
import RootPage from "../root";
import {BlockForm} from "../../components/BlockForm";
import {type IBlock} from "../../types/block";
import {v4 as uuidV4} from "uuid";
import {Context} from "../../context/Context";

export function CreatePage(): JSX.Element {
  const {setBlock} = useContext(Context);

  const onCreateBlock = (data: IBlock): void => {
    setBlock(prevBlocks => {
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