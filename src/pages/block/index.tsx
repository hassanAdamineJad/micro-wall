import React, {useContext} from "react";

import RootPage from "../root";
import {Block} from "../../components/Block";
import {Context} from "../../context/Context";
import {type IRowBlock} from "../../types/block";
import {useNavigate} from "react-router-dom";

export function BlockPage(): JSX.Element {
  const {blocks, setBlock, mode} = useContext(Context);
  const navigation = useNavigate();

  const onDeleteBlock = (id: string): void => {
    setBlock(prevBlock => {
      return prevBlock.filter(b => b.id !== id);
    });
  };

  const onUpdateBlackItem = (id: string, data: IRowBlock): void => {
    const newBlock = blocks.map(block => {
      if (block.id === id) {
        return {
          ...block,
          ...data,
        };
      } else {
        return block;
      }
    });
    setBlock(newBlock);

    navigation("..");
  };

  return (
    <RootPage header="Details">
      <Block
        onDeleteBlock={onDeleteBlock}
        mode={mode}
        onUpdateBlackItem={onUpdateBlackItem}
      />
    </RootPage>
  );
}
