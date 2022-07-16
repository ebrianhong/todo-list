import React, {useState} from 'react';
import Input from './components/Input';
import List from './components/List';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      todo: 'dummy1',
      completed: true
    },
    {
      id: 2,
      todo: 'dummy2',
      completed: false
    }
  ]);

  return (
    <div id="app">
      <Input items={items} setItems={setItems} />
      <List items={items} setItems={setItems} />
    </div>
  )
}

export default App;