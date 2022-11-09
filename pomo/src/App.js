import React, { useState, useEffect } from 'react';
import TimerOptions from './components/TimerOptions';

function App() {

  const [timer, setTimer] = useState('50:00');
  const [flag, setFlag] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  useEffect(() => {
    let timerMinutes = timer.slice(0, 2);
    setMinutes(parseInt(timerMinutes))
    let timerSeconds = timer.slice(3,6);
    setSeconds(parseInt(timerSeconds));
  }, [timer])


  useEffect(() => {
    let interval = null;

    if (flag) {
      interval = setInterval(() => {
        if (seconds === 0 && minutes !== 0) {
          setSeconds(60);
          setMinutes(minutes -1);
        }
        else if (seconds === 1 && minutes === 0) {
          setFlag(!flag);
        }
        setSeconds(seconds => seconds - 1);
      }, 100);
    } 
    return () => clearInterval(interval);
  }, [flag, seconds, minutes]);


  return (
    <div style={{display: 'flex', alignItems:'center', flexDirection:'column', border: '1px solid black', width: '80%', margin:'0 auto', padding: '5rem', gap:'2.5rem'}}>
      <h2>Pomofocus</h2>
      <TimerOptions setTimer={setTimer}/>
      {
        flag === false ? <button onClick={() => setFlag(!flag)} >Start</button> : <button onClick={() => setFlag(!flag)}>Stop</button>
      }
      <div>
        {
          seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
        }
      </div>
    </div>
  );
}

export default App;
