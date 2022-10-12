import React, { useState } from 'react';
import InputBox from './components/InputBox';
import List from './components/List';

function App() {
  const [list, setList] = useState([])

  return (
    <div style={{border: '1px solid black'}}>
      <div style={{display:'flex', justifyContent:'space-around', marginTop:'3rem'}}>
        To-Do List
      </div>
      <InputBox setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
