import React, { useState } from 'react';


const SearchBar = ({setLocation, label}) => {

  const [input, setInput] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{width:'50%', margin:'1rem auto'}}>
      <form onSubmit={onFormSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem'}}>
        <label>Search {label}</label>
        <div>
          <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => setLocation(input)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;