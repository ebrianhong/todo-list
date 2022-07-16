import React from 'react';

const Item = ({item, items, setItems}) => {
  if (item.id === 1) console.log(item.completed)
  const handleClick = (e) => {
    const newItems = items.map((curr) => {
      return curr.id === item.id ? {...curr, completed: !curr.completed} : {...curr};
    })
    setItems(newItems);
  }
  return (
    <div id="item">
      <input 
        type="checkbox" 
        onChange={(e) => {handleClick(e)}}
        checked={item.completed}
      ></input>
      <span>{item.todo}</span>
    </div>
  )
}

export default(Item);