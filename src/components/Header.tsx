import React from "react";
import {
  Button,
  ButtonGroup,
  Nav,
  Navbar,
  Stack,
  ToggleButton,
} from "react-bootstrap";
import {MODE_TYPE} from "../types/enums/mode";
import {type IRowBlock} from "../types/block";
import {useLocation} from "react-router-dom";

interface HeaderProps {
  header: string;
  blocks: IRowBlock[];
  mode: MODE_TYPE;
  setMode: (mode: MODE_TYPE) => void;
}

export function Header({
  header,
  blocks,
  mode,
  setMode,
}: HeaderProps): JSX.Element {
  const {pathname} = useLocation();

  return (
    <Navbar expand="lg">
      {" "}
      <h1>{header}</h1>
      <Navbar.Collapse>
        {pathname === "/" ? (
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "100px"}}
            navbarScroll>
            <Stack gap={1} direction="horizontal">
              {blocks.map(block => (
                <Nav.Link key={block.id} href={`#${block.id}`}>
                  <Button variant="info" size="sm">
                    {block.name}
                  </Button>
                </Nav.Link>
              ))}
            </Stack>
          </Nav>
        ) : (
          ""
        )}
      </Navbar.Collapse>
      <Stack gap={1} direction="horizontal" className="justify-content-between">
        <ButtonGroup className="mb-2">
          {[
            {name: "Editor", value: MODE_TYPE.EDITOR},
            {name: "Viewer", value: MODE_TYPE.VIEWER},
          ].map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-secondary"}
              name="radio"
              value={radio.value}
              checked={mode === radio.value}
              onChange={e => {
                setMode(e.currentTarget.value as MODE_TYPE);
              }}>
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Stack>
    </Navbar>
  );
}
