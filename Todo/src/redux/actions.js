export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: { id: new Date().getTime(), text },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });
  