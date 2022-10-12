import React, { useState } from 'react';


// Input Box Controlled Component
//
// Props: setList()
//    when input is submitted, list is updated through setList
//
// State: input, setInput
//    input is updated whenever user types in text box

const InputBox = ({setList}) => {
  // user todo input
  const [input, setInput] = useState('')

  // work to be done after form is submitted
  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  // adds a todo to the list
  function updateList(value) {
    return setList((prev) => {
      return [...prev].concat(value);
    })
  }
  
  // form collects user todo
  return (
    <form onSubmit={onFormSubmit}>
      <div style={{display: 'flex', justifyContent:'space-around', width:'15%', margin: '1rem auto'}}>
        <input 
          type='text'
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {updateList(input)}}>
          submit
        </button>
      </div>
    </form>
  )
}

export default InputBox;