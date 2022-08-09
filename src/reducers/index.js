const itemReducer = (items, action) => {
  switch(action.type) {
    case 'ADD':
      return [...items, {
        id: action.id,
        todo: action.todo,
        completed: false,
      }];
    case 'REMOVE':
      return items.filter((item) => {
        return item.id !== action.id
      });
    case 'COMPLETE':
      return items.map((item) => {
      return item.id === action.id ? {...item, completed: !item.completed} : item
    });
    default:
      return items;
  };
};

export {
  itemReducer
};