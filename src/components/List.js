import React from 'react';
import Item from './Item';

const List = ({items, setItems}) => {
  return (
    <div id="list">
      <ul>
        {items.map((item, i) => {
          return <Item key={i} item={item} items={items} setItems={setItems} />
        })}
      </ul>
    </div>
  )
}

export default List;