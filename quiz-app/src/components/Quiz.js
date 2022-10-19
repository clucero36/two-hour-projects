import React, { useState } from 'react';
import ScoreDetails from './ScoreDetails';

// Quiz Component 
//  renders quiz questions one at a time
//  renders ScoreDetails once quiz is finished
//
// props: 
//   questions: questions to be displayed one at a time for user
//   setQuestions: passed to ScoreDetails once quiz is finished
//
const Quiz = ({questions, setQuestions}) => {

  const [index, setIndex] = useState(0) // state keeps track of current question
  const [score, setScore] = useState([]) // state keeps track of user score
  let renderedAnswers;

  // event handler passed to renderedAnswers
  // updates users score & current question
  const onClick = (e) => {
    if (e.target.value === questions[index].correct_answer)
      updateScore(1)
    else
      updateScore(0)
    setIndex(index+1);
  }
  // event handler helper funcion
  const updateScore = (flag) => {
    return setScore((prev) => {
      if (flag)
        return [...prev].concat(1)
      else 
        return [...prev].concat(0);
    })
  }

  // button elements to be displayed as answers
  if (score.length !== questions.length) {
    let answers = questions[index].incorrect_answers.concat(questions[index].correct_answer);
    renderedAnswers = answers.map((answer) => {
      return <button onClick={onClick} key={answer} value={answer}>{answer}</button>
    })
  }

  // quiz display
  return (
    <>
      {
        score.length === questions.length ? 
        ( <ScoreDetails score={score} setQuestions={setQuestions} /> ) :
        (
          <div style={{border:'1px solid black', padding:'1rem'}}>

            <div>
              <div>{questions[index].difficulty.toUpperCase()}</div>
              <div>{questions[index].category}</div>
            </div>
    
            <div style={{ display:'flex', justifyContent:'center'}}>
              <h3>Question: {index+1}</h3>
            </div>
    
            <div>
              <div>{decodeURI(questions[index].question)}</div>
            </div>
    
            <div style={{display:'flex', justifyContent:'center', padding:'4rem', gap:'1rem'}}>
              {renderedAnswers}
            </div>
          </div>
        )
      }
    </>

  )
}

export default Quiz;