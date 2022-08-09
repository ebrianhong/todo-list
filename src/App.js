import React, { useReducer } from 'react';
import Input from './components/Input';
import List from './components/List';
import ItemsContext from './contexts/ItemsContext';
import { itemReducer } from './reducers';

const App = () => {
  const [items, dispatch] = useReducer(itemReducer, [
    {
      id: JSON.stringify(new Date()),
      todo: 'item1',
      completed: false
    }
  ])

  return (
    <div id="app">
      <ItemsContext.Provider value={{
        items,
        dispatch
      }}>
        <Input />
        <List />
      </ItemsContext.Provider>
    </div>
  )
}

export default App;