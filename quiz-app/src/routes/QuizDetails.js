import React, { useState } from 'react';
import axios from 'axios';

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

const QuizDetails = ({setQuestions}) => {
  console.log('QuizDetails')

  const [details, setDetails] = useState({category: '', difficulty: '', type: ''})

  const renderedCats = categories.map((cat) => {
    return <option value={cat} key={cat}>{cat}</option>
  })

  const renderedDiffs = difficulties.map((diff) => {
    return <option value={diff} key={diff}>{diff}</option>
  })

  const renderedTypes = types.map((type) => {
    return <option value={type} key={type}>{type}</option>
  })

  function handleCategoryChange(event) {
    setDetails({...details, category: event.target.value});
  }
  function handleDifficultyChange(event) {
    setDetails({...details, difficulty: event.target.value});
  }
  function handleTypeChange(event) {
    setDetails({...details, type: event.target.value});
  }
  function onSubmit(event) {
    event.preventDefault();
    grabQuestions();
  }

  const grabQuestions = async () => {
    let response = await axios.get('https://opentdb.com/api.php?amount=10')
    setQuestions(response.data.results)
  }
  
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