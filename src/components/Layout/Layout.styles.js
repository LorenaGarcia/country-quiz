import styled from "styled-components";
import background from "../../images/background.png";

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: grid;

  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "main"
    "footer";

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  grid-area: footer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #f2f2f2;
  text-align: center;
`;

const TextFooter = styled.p`
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

export { Container, Main, Footer, TextFooter };
