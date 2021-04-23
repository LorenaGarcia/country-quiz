import styled from "styled-components";

const Container = styled.div`
  width: 60%;

  @media (max-width: 480px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 70%;
  }
`;

const ContainerQuestion = styled.div`
  background: #ffffff;
  border-radius: 24px;
  text-align: center;
  padding: 2rem;
  padding-top: 4rem;

  @media (max-width: 480px) {
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #f2f2f2;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Answer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.colorWrong ? "#EA8282" : props.colorCorrect ? "#60BF88" : "#ffffff"};
  border: 2px solid rgba(96, 102, 208, 0.7);
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.colorWrong
      ? "#FFFFFF"
      : props.colorCorrect
      ? "#FFFFFF"
      : "rgba(96, 102, 208, 0.8)"};
  cursor: pointer;

  :hover {
    background: ${(props) =>
      props.colorWrong
        ? "#EA8282"
        : props.colorCorrect
        ? "#60BF88"
        : "#f9a826"};
    color: #ffffff;
  }
`;

const AnswerFlex = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Question = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
  margin: 0;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Letter = styled.p`
  margin: 0;
  margin-right: 2rem;
  margin-left: 1rem;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

const Response = styled.p`
  margin: 0;
  margin-right: 1rem;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const ImageHeader = styled.img`
  width: 30%;
  margin-bottom: -2rem;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  width: 116px;
  height: 50px;
  border: 0;
  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  cursor: pointer;
`;

const Flag = styled.img`
  width: 10rem;
  height: 5rem;
`;

const Icon = styled.div`
  padding-right: 0.5rem;

  span {
    visibility: ${(props) =>
      props.colorWrong || props.colorCorrect ? "visible" : "hidden"};
  }
`;

export {
  Container,
  ContainerQuestion,
  Title,
  Answer,
  Letter,
  Response,
  Question,
  ImageHeader,
  ButtonContainer,
  Button,
  Flag,
  AnswerFlex,
  Icon,
};
