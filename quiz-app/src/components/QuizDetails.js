import React, { useState } from 'react';
import axios from 'axios';

// data used for form selection
const categories = [
  'Any Category',
  'General Knowledge',
  'Books',
  'Film',
  'Music',
  'Musicals & Theatres',
  'Television',
  'Video Games',
  'Board Games',
  'Science & Nature',
  'Computers',
  'Math',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Arts',
  'Celebrities',
  'Animals',
];
const difficulties = [
  'Any Difficulty',
  'Easy', 
  'Medium',
  'Hard',
];
const types = [
  'Any Type',
  'Multiple Choice',
  'True/False',
];

// QuizDetails Component
//    renders form to be completed by user
//
// props:
//  setQuestions(): function passed from parent component.
//                  called once we recieve data from quiz api & sets quiz-questions(state) for whole app.
//
const QuizDetails = ({setQuestions}) => {

  // details will be used as query string params when api call is updated
  const [details, setDetails] = useState({category: '', difficulty: '', type: ''})

  // form elements
  const renderedCats = categories.map((cat) => {
    return <option value={cat} key={cat}>{cat}</option>
  })
  const renderedDiffs = difficulties.map((diff) => {
    return <option value={diff} key={diff}>{diff}</option>
  })
  const renderedTypes = types.map((type) => {
    return <option value={type} key={type}>{type}</option>
  })

  // on selection of dropdown, update component state
  function handleCategoryChange(event) {
    setDetails({...details, category: event.target.value});
  }
  function handleDifficultyChange(event) {
    setDetails({...details, difficulty: event.target.value});
  }
  function handleTypeChange(event) {
    setDetails({...details, type: event.target.value});
  }
  // on form submission, call grabQuestions()
  function onSubmit(event) {
    event.preventDefault();
    grabQuestions();
  } 

  // api call to opentdb 
  // call setQuestions with data retrieved from api
  const grabQuestions = async () => {
    let response = await axios.get('https://opentdb.com/api.php?amount=10')
    setQuestions(response.data.results)
  }
  
  // quiz details form
  return (
    <div style={{display:'flex', justifyContent:'center', padding:'5rem'}}>
      <form onSubmit={onSubmit}>
        <select value={details.category} onChange={handleCategoryChange}>
          {renderedCats}
        </select>
        <select value={details.difficulty} onChange={handleDifficultyChange}>
          {renderedDiffs}
        </select>
        <select value={details.type} onChange={handleTypeChange}>
          {renderedTypes}
        </select>
        <input type='submit' value='Take Quiz' />
      </form>
    </div>
  )
}

export default QuizDetails;