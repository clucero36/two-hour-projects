import React, { useState } from 'react';
import Quiz from './components/Quiz';
import QuizDetails from './components/QuizDetails';

// App Component
//    renders QuizDetails if quiz api hasn't been called
//    renders Quiz when question data is recieved
//
function App() {

  const [questions, setQuestions] = useState([])

  return (
    <>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h2>Quiz App</h2>
      </div>
      <div>
        {
          questions.length === 0 ? <QuizDetails setQuestions={setQuestions}/> : <Quiz setQuestions={setQuestions} questions={questions} />
        }
      </div>
    </>
  );
}

export default App;
