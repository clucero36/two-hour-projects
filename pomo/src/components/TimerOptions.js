import React from 'react';


const TimerOptions = ({setTimer}) => {

  function handleWorkClick() {
    setTimer('50:00');
  }
  function handleShortBreakClick() {
    setTimer('5:00');
  }
  function handleLongBreakClick() {
    setTimer('25:00');
  }

  return (
    <div style={{}}>
      <button onClick={handleWorkClick}>Work</button>
      <button onClick={handleShortBreakClick}>Short Break</button>
      <button onClick={handleLongBreakClick}>Long Break</button>
    </div>
  )
}


export default TimerOptions;