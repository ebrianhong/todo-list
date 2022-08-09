import React, { useContext } from 'react';
import ItemsContext from '../contexts/ItemsContext';
import Item from './Item';

const List = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div id="list">
      <ul>
        {items.map((item) => {
          return <Item key={item?.id} item={item}/>
        })}
      </ul>
    </div>
  )
}

export default List;