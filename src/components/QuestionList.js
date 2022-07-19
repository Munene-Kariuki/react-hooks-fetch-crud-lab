import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function deleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => {
      return question.id !== deletedQuestion.id
    })

    setQuestions(updatedQuestions)
  }


  const questionList = questions.map((question) =>{
    return <QuestionItem key={question.id} question={question} onDelete={deleteQuestion} />
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
