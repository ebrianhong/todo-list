import React, { useContext } from 'react';
import ItemsContext from '../contexts/ItemsContext';

const Item = ({ item }) => {
  const { dispatch } = useContext(ItemsContext);

  const toggleComplete = (e) => {
    // e.preventDefault();
    dispatch({
      type: 'COMPLETE',
      id: item.id,
    });
  }

  const deleteItem = (e) => {
    // e.preventDefault();
    dispatch({
      type: 'REMOVE',
      id: item.id,
    });
  }

  return (
    <>
      <div id="item" 
        onClick={(e) => {toggleComplete(e)}}
        className={item.completed ? 'checked' : 'unchecked'}
        style={{
          textDecoration: item.completed ? 'line-through' : '',
          cursor: 'pointer'
        }}
      >
        <input 
          type="checkbox" 
          checked={item.completed}
          readOnly
          style={{
            cursor: 'pointer'
          }}
        ></input>
        <span>{item.todo}</span>
      </div>
      <button 
        onClick={(e) => {deleteItem(e)}}
      >delete</button>
    </>
  )
}

export default(Item);