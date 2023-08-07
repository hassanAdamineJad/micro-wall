import React, {useContext} from "react";
import {ButtonGroup, Container, Stack, ToggleButton} from "react-bootstrap";
import {Context} from "../context/Context";

interface RootPageProps {
  children: React.ReactNode;
  header: string;
}

function RootPage({children, header}: RootPageProps): JSX.Element {
  const {mode, setMode} = useContext(Context);
  return (
    <Container className="my-4">
      <Stack gap={3}>
        <Stack
          gap={1}
          direction="horizontal"
          className="justify-content-between">
          <h1>{header}</h1>
          <ButtonGroup className="mb-2">
            {[
              {name: "Editor", value: "editor"},
              {name: "Viewer", value: "viewer"},
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
                  setMode(e.currentTarget.value);
                }}>
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Stack>

        {children}
      </Stack>
    </Container>
  );
}

export default RootPage;
