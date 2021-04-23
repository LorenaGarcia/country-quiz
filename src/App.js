import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "./components/Layout";
import { Quiz } from "./components/Quiz";
import { Resume } from "./components/Resume";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [answersRandom, setAnswersRandom] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [keepGoing, setKeepGoing] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionsType = [
    { type: "capital", description: "is the capital of" },
    { type: "flag", description: "Which country does this flag belong to?" },
  ];

  useEffect(() => {
    countriesRandom();
  }, []);

  useEffect(() => {
    if (question.type) {
      scrambleAnswers();
    }
  }, [answersRandom]);

  useEffect(() => {
    if (keepGoing && correctAnswer.correct) {
      setTimeout(() => {
        countriesRandom();
      }, 1500);
    }
  }, [correctAnswer]);

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const countriesRandom = async () => {
    setCorrectAnswer({});
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

      setQuestion(questionsType[randomNumber(0, 2)]);

      if (answersRandom.length === 0) {
        setAnswersRandom([
          ...answersRandom,
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
        ]);
      } else if (keepGoing) {
        setKeepGoing(false);
        setAnswersRandom([
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
          data[randomNumber(1, 250)],
        ]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const selectAnswer = (name) => {
    setCorrectAnswer({
      iscorrect: name === answer.name ? true : false,
      correct: answer.name,
      wrong: name,
    });
    if (name === answer.name) {
      setKeepGoing(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setKeepGoing(false);
    }
  };

  const scrambleAnswers = () => {
    setAnswer(answersRandom[0]);
    const sort = answersRandom.sort(function () {
      return Math.random() - 0.5;
    });
    setAnswersRandom(sort);
  };

  const tryAgain = () => {
    countriesRandom();
    setKeepGoing(true);
    setGameOver(false);
    setCorrectAnswers(0);
  };

  return (
    <Layout>
      {!gameOver && !keepGoing && !correctAnswer.correct ? (
        <Quiz
          question={question}
          answer={answer}
          answersRandom={answersRandom}
          selectAnswer={selectAnswer}
          correctAnswer={correctAnswer}
          keepGoing={keepGoing}
          setGameOver={setGameOver}
          isLoading={isLoading}
        />
      ) : (
        !gameOver && (
          <Quiz
            question={question}
            answer={answer}
            answersRandom={answersRandom}
            selectAnswer={selectAnswer}
            correctAnswer={correctAnswer}
            keepGoing={keepGoing}
            setGameOver={setGameOver}
            isLoading={isLoading}
          />
        )
      )}

      {gameOver && (
        <Resume correctAnswers={correctAnswers} tryAgain={tryAgain} />
      )}
    </Layout>
  );
}

export default App;
