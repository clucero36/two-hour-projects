import React from 'react';

// List functional component
//   
// Props: list & setList()
//  displays the list & updates list if a todo is deleted
const List = ({list, setList}) => {

  // maps through list & displays each todo
  let renderedList = list.map((listItem, index) => {
    return (
      <div style={{display:'flex', width:'100%', justifyContent:'space-between'}} key={index}>
        <p>{index+1}: {listItem}</p>
        <button value={listItem} onClick={updateList} style={{height:'1.5rem', alignSelf:'center'}}>x</button>
      </div>
    )
  })

  // deletes a todo from list
  function updateList(item) {
    return setList((prev) => {
      return [...prev].filter((a) => a !== item.target.value)
    })
  }

  // list displayed to user
  return (
    <div style={{margin:'1rem auto', width:'25%'}} >
      {renderedList}
    </div>
  )
}

export default List;
