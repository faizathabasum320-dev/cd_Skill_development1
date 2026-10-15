import React, { useState } from "react";

function Assessment() {
  const questions = [
    {
      question: "Which language is mainly used for Android development?",
      options: ["Java", "HTML", "SQL", "CSS"],
      answer: "Java",
    },
    {
      question: "Which data structure follows LIFO?",
      options: ["Queue", "Stack", "Array", "Tree"],
      answer: "Stack",
    },
    {
      question: "Which language is commonly used for data analysis?",
      options: ["Python", "HTML", "CSS", "XML"],
      answer: "Python",
    },
    {
      question: "Which command is used to retrieve data from a database?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      answer: "SELECT",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const finalScore =
      score + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0);

    return (
      <div className="page-container">
        <div className="page-heading">
          <div>
            <p className="eyebrow">ASSESSMENT</p>
            <h1>Assessment Complete</h1>
            <p className="page-subtitle">
              Here is your assessment result.
            </p>
          </div>
        </div>

        <div className="result-card">
          <div className="result-circle">
            {finalScore}/{questions.length}
          </div>

          <h2>Your Score</h2>

          <p>
            You answered <strong>{finalScore}</strong> out of{" "}
            <strong>{questions.length}</strong> questions correctly.
          </p>

          <button
            className="primary-button"
            onClick={restartAssessment}
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">SKILL ASSESSMENT</p>

          <h1>Test Your Skills</h1>

          <p className="page-subtitle">
            Answer the questions to understand your current skill level.
          </p>
        </div>
      </div>

      <div className="assessment-container">
        <div className="assessment-top">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>
            Score: {score}
          </span>
        </div>

        <div className="assessment-progress">
          <div
            className="assessment-progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="assessment-card">
          <p className="question-number">
            Question {currentQuestion + 1}
          </p>

          <h2>{question.question}</h2>

          <div className="option-list">
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`assessment-option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) =>
                    setSelectedAnswer(e.target.value)
                  }
                />

                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="assessment-actions">
            <button
              className="primary-button"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "Submit Assessment"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;