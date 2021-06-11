import React from "react";
import {
  Container,
  Title,
  ContainerQuestion,
  Question,
  Answer,
  Letter,
  Response,
  ImageHeader,
  ButtonContainer,
  Button,
  Flag,
  AnswerFlex,
  Icon,
} from "./Quiz.styles";
import adventure from "../../images/adventure.svg";
import spinner from "../../images/spinner.gif";

const Quiz = ({
  question,
  answer,
  answersRandom,
  selectAnswer,
  correctAnswer,
  keepGoing,
  setGameOver,
  isLoading,
}) => {
  return (
    <Container>
      <Title>
        Country quiz <ImageHeader src={adventure} alt="adventure" />
      </Title>
      <ContainerQuestion>
        {answer && question.type === "flag" ? (
          <>
            <Flag src={answer.flag} alt="flag" />
            <Question>{question.description}</Question>
          </>
        ) : (
          question.type === "capital" && (
            <Question>
              {answer.capital} {question.description}
            </Question>
          )
        )}

        {answersRandom.length !== 0 && !isLoading ? (
          <>
            <Answer
              colorCorrect={
                correctAnswer.correct &&
                correctAnswer.correct === answersRandom[0].name
                  ? true
                  : false
              }
              colorWrong={
                correctAnswer.wrong &&
                correctAnswer.wrong === answersRandom[0].name &&
                correctAnswer.correct !== answersRandom[0].name
                  ? true
                  : false
              }
              onClick={() =>
                !correctAnswer.correct && selectAnswer(answersRandom[0].name)
              }
            >
              <AnswerFlex>
                <Letter>A</Letter>
                <Response>{answersRandom[0].name}</Response>
              </AnswerFlex>

              <Icon
                colorCorrect={
                  correctAnswer.correct &&
                  correctAnswer.correct === answersRandom[0].name
                    ? true
                    : false
                }
                colorWrong={
                  correctAnswer.wrong &&
                  correctAnswer.wrong === answersRandom[0].name &&
                  correctAnswer.correct !== answersRandom[0].name
                    ? true
                    : false
                }
              >
                {correctAnswer.correct === answersRandom[0].name ? (
                  <span className="material-icons">check</span>
                ) : (
                  <span className="material-icons">clear</span>
                )}
              </Icon>
            </Answer>
            <Answer
              colorCorrect={
                correctAnswer.correct &&
                correctAnswer.correct === answersRandom[1].name
                  ? true
                  : false
              }
              colorWrong={
                correctAnswer.wrong &&
                correctAnswer.wrong === answersRandom[1].name &&
                correctAnswer.correct !== answersRandom[1].name
                  ? true
                  : false
              }
              onClick={() =>
                !correctAnswer.correct &&
                selectAnswer(!correctAnswer.correct && answersRandom[1].name)
              }
            >
              <AnswerFlex>
                <Letter>B</Letter>
                <Response>{answersRandom[1].name}</Response>
              </AnswerFlex>
              <Icon
                colorCorrect={
                  correctAnswer.correct &&
                  correctAnswer.correct === answersRandom[1].name
                    ? true
                    : false
                }
                colorWrong={
                  correctAnswer.wrong &&
                  correctAnswer.wrong === answersRandom[1].name &&
                  correctAnswer.correct !== answersRandom[1].name
                    ? true
                    : false
                }
              >
                {correctAnswer.correct === answersRandom[1].name ? (
                  <span className="material-icons">check</span>
                ) : (
                  <span className="material-icons">clear</span>
                )}
              </Icon>
            </Answer>
            <Answer
              colorCorrect={
                correctAnswer.correct &&
                correctAnswer.correct === answersRandom[2].name
                  ? true
                  : false
              }
              colorWrong={
                correctAnswer.wrong &&
                correctAnswer.wrong === answersRandom[2].name &&
                correctAnswer.correct !== answersRandom[2].name
                  ? true
                  : false
              }
              onClick={() =>
                !correctAnswer.correct &&
                selectAnswer(!correctAnswer.correct && answersRandom[2].name)
              }
            >
              <AnswerFlex>
                <Letter>C</Letter>
                <Response>{answersRandom[2].name}</Response>
              </AnswerFlex>
              <Icon
                colorCorrect={
                  correctAnswer.correct &&
                  correctAnswer.correct === answersRandom[2].name
                    ? true
                    : false
                }
                colorWrong={
                  correctAnswer.wrong &&
                  correctAnswer.wrong === answersRandom[2].name &&
                  correctAnswer.correct !== answersRandom[2].name
                    ? true
                    : false
                }
              >
                {correctAnswer.correct === answersRandom[2].name ? (
                  <span className="material-icons">check</span>
                ) : (
                  <span className="material-icons">clear</span>
                )}
              </Icon>
            </Answer>
            <Answer
              colorCorrect={
                correctAnswer.correct &&
                correctAnswer.correct === answersRandom[3].name
                  ? true
                  : false
              }
              colorWrong={
                correctAnswer.wrong &&
                correctAnswer.wrong === answersRandom[3].name &&
                correctAnswer.correct !== answersRandom[3].name
                  ? true
                  : false
              }
              onClick={() =>
                !correctAnswer.correct &&
                selectAnswer(!correctAnswer.correct && answersRandom[3].name)
              }
            >
              <AnswerFlex>
                <Letter>D</Letter>
                <Response>{answersRandom[3].name}</Response>
              </AnswerFlex>

              <Icon
                colorCorrect={
                  correctAnswer.correct &&
                  correctAnswer.correct === answersRandom[3].name
                    ? true
                    : false
                }
                colorWrong={
                  correctAnswer.wrong &&
                  correctAnswer.wrong === answersRandom[3].name &&
                  correctAnswer.correct !== answersRandom[3].name
                    ? true
                    : false
                }
              >
                {correctAnswer.correct === answersRandom[3].name ? (
                  <span className="material-icons">check</span>
                ) : (
                  <span className="material-icons">clear</span>
                )}
              </Icon>
            </Answer>
          </>
        ) : (
          <img src={spinner} alt="spinner" />
        )}

        {!keepGoing && correctAnswer.correct && (
          <ButtonContainer>
            <Button onClick={() => setGameOver(true)}>Next</Button>
          </ButtonContainer>
        )}
      </ContainerQuestion>
    </Container>
  );
};

export { Quiz };
