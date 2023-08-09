import React, {useContext, useEffect} from "react";
import RootPage from "../root";
import {CreateForm} from "../../components/CreateForm";
import {type IBlock} from "../../types/block";
import {v4 as uuidV4} from "uuid";
import {Context} from "../../context/Context";
import {useNavigate} from "react-router-dom";
import {MODE_TYPE} from "../../types/enums/mode";

export function CreatePage(): JSX.Element {
  const {setBlock, mode} = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === MODE_TYPE.VIEWER) {
      navigate("..");
    }
  }, [mode]);

  const onCreateBlock = (data: IBlock): void => {
    setBlock(prevBlocks => {
      return [...prevBlocks, {...data, id: uuidV4()}];
    });
  };

  return (
    <>
      <RootPage header="New BLock">
        <CreateForm onSubmit={onCreateBlock} />
      </RootPage>
    </>
  );
}
