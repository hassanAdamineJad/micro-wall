import React, {useContext} from "react";
import RootPage from "../root";
import {Block} from "../../components/Block";
import {Context} from "../../context/Context";

export function BlockPage(): JSX.Element {
  const {setBlock} = useContext(Context);

  const onDeleteBlock = (id: string): void => {
    setBlock(prevBlock => {
      return prevBlock.filter(b => b.id !== id);
    });
  };

  return (
    <RootPage header="Block Details">
      <Block onDeleteBlock={onDeleteBlock} />
    </RootPage>
  );
}
