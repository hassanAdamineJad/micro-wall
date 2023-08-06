import React from "react";
import {Container, Stack} from "react-bootstrap";

interface RootPageProps {
  children: React.ReactNode;
  header: string;
}

function RootPage({children, header}: RootPageProps): JSX.Element {
  return (
    <Container className="my-4">
      <Stack gap={3}>
        <h1>{header}</h1>
        {children}
      </Stack>
    </Container>
  );
}

export default RootPage;
