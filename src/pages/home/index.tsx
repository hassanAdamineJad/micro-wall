import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";
import RootPage from "../root";
import {BlockCard} from "../../components/BlockCard";

export function HomePage(): JSX.Element {
  const {blocks} = useContext(Context);

  return (
    <>
      <RootPage header="Home">
        <Link to={`/new`}>
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
