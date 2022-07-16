import React, {useState} from 'react';

const Input = ({items, setItems}) => {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedItems = [
      ...items, 
      {
        id: Date.now(),
        todo: input,
        completed: false
      }
    ]
    setItems(updatedItems);
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