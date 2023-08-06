import React from "react";
import RootPage from "../root";
import {BlockForm} from "../../components/BlockForm";

export function CreatePage(): JSX.Element {
  return (
    <>
      <RootPage header="New BLock">
        <BlockForm />
      </RootPage>
    </>
  );
}
