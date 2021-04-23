import React from "react";
import { Container, Main, Footer, TextFooter } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
      <Footer>
        <TextFooter>created by Lorraine</TextFooter>
      </Footer>
    </Container>
  );
};

export { Layout };
