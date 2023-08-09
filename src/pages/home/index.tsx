import React, {useContext} from "react";
import {BlockCard} from "../../components/Card";
import {Button} from "react-bootstrap";
import {Context} from "../../context/Context";
import {Link} from "react-router-dom";
import {MODE_TYPE} from "../../types/enums/mode";
import RootPage from "../root";

export function HomePage(): JSX.Element {
  const {blocks, mode} = useContext(Context);

  return (
    <>
      <RootPage header="Home">
        {mode === MODE_TYPE.EDITOR ? (
          <Link to={`/new`} className="position-absolute">
            <Button variant="primary" size="lg" className="float-button">
              Add Block
            </Button>
          </Link>
        ) : (
          ""
        )}

        {blocks.map(block => {
          return <BlockCard key={block.id} data={block} />;
        })}
      </RootPage>
    </>
  );
}
