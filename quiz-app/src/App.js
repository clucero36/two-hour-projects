import React, { useState } from 'react';
import Quiz from './routes/Quiz';
import QuizDetails from './routes/QuizDetails';

function App() {
  console.log('App')
  const [questions, setQuestions] = useState([])

  return (
    <>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h2>Quiz App</h2>
      </div>
      <div>
        {
          questions.length === 0 ? <QuizDetails setQuestions={setQuestions}/> : <Quiz questions={questions} />
        }
      </div>
    </>
  );
}

export default App;
