import React, {useContext} from "react";
import RootPage from "../root";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BlockCard} from "../../components/BlockCard";
import {BlocksContext} from "../../context/BlockContext";

export function EditorPage(): JSX.Element {
  const {blocks} = useContext(BlocksContext);

  return (
    <>
      <RootPage header="Editor">
        <Link to={`/editor/new`}>
          <Button variant="primary" size="lg" className="float-button">
            Add Block
          </Button>
        </Link>

        {blocks.map(block => {
          return <BlockCard key={block.id} data={block} />;
        })}
      </RootPage>
    </>
  );
}
