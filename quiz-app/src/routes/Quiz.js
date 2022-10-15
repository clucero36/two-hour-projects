import React, { useState } from 'react';

const Quiz = ({questions}) => {
  console.log("quiz")
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState([])

  const onClick = (e) => {
    if (e.target.value === questions[index].correct_answer)
      updateScore(1)
    else
      updateScore(0)
    setIndex(index+1);
  }

  const updateScore = (flag) => {
    return setScore((prev) => {
      if (flag)
        return [...prev].concat(1)
      else 
        return [...prev].concat(0);
    })
  }

  let answers = questions[index].incorrect_answers.concat(questions[index].correct_answer);
  let renderedAnswers = answers.map((answer) => {
    return <button onClick={onClick} key={answer} value={answer}>{answer}</button>
  })

  console.log(questions[index], score)

  return (
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

export default Quiz;