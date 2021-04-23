import React from "react";
import {
  Container,
  Title,
  ContainerQuestion,
  Question,
  ImageHeader,
  ButtonContainer,
  Button,
  Results,
} from "./Resume.styles";
import winners from "../../images/winners.svg";

const Resume = ({ correctAnswers, tryAgain }) => {
  return (
    <Container>
      <Title>Country quiz</Title>
      <ContainerQuestion>
        <ImageHeader src={winners} alt="resume" />
        <Question>Results</Question>
        <Results>
          You got <strong>{correctAnswers}</strong> correct answers
        </Results>

        <ButtonContainer>
          <Button onClick={tryAgain}>Try again</Button>
        </ButtonContainer>
      </ContainerQuestion>
    </Container>
  );
};

export { Resume };
