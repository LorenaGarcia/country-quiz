import styled from "styled-components";

const Container = styled.div`
  width: 60%;

  @media (max-width: 480px) {
    padding: 1rem;
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

const ImageHeader = styled.img`
  height: 7rem;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
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

const Results = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #1d355d;
  margin-bottom: 4rem;

  strong {
    color: #16e03a;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
`;

export {
  Container,
  ContainerQuestion,
  Title,
  Question,
  ImageHeader,
  ButtonContainer,
  Button,
  Results,
};
