import React from 'react';

// ScoreDetails Component
//  renders total score & a button to reset questions state
//
// props: 
//  score: score array 
//  setQuestions: called when user wants to take another quiz. Sets app quiz questions equal to empty array
const ScoreDetails = ({score, setQuestions}) => {

  let totalScore = score.reduce((prev, curr) => prev+curr, 0);

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', flexDirection:'column', width:'50%', margin:'0 auto'}}>
        <h2>Nice! You Scored: {totalScore} out of 10</h2>
        <button onClick={() => setQuestions([])}>New Quiz</button>
      </div>
    </div>  
  )
}

export default ScoreDetails