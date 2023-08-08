import React, {useContext} from "react";
import {Container, Stack} from "react-bootstrap";
import {Context} from "../context/Context";
import {Header} from "../components/Header";

interface RootPageProps {
  children: React.ReactNode;
  header: string;
}

function RootPage({children, header}: RootPageProps): JSX.Element {
  const {mode, setMode, blocks} = useContext(Context);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        <Header mode={mode} setMode={setMode} header={header} blocks={blocks} />

        <div className="dropdown-divider bg-secondary"></div>

        {children}
      </Stack>
    </Container>
  );
}

export default RootPage;
