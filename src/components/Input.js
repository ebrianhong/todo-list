import React, {useContext, useState} from 'react';
import ItemsContext from '../contexts/ItemsContext';

const Input = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(ItemsContext);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      id: JSON.stringify(new Date()),
      todo: input,
    })
    setInput('');
  }
  return (
    <form id="input" onSubmit={submitHandler}>
      <input 
        type="text" 
        placeholder='enter item here' 
        value={input}
        onChange={(e) => setInput(e.target.value)}  
      ></input>
    </form>
  )
}

export default Input;