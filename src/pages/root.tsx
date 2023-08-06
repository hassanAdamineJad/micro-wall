import React from "react";
import {Container} from "react-bootstrap";

interface RootPageProps {
  children: React.ReactNode;
  header: string;
}

function RootPage({children, header}: RootPageProps): JSX.Element {
  return (
    <Container className="my-4">
      <h1>{header}</h1>
      {children}
    </Container>
  );
}

export default RootPage;
