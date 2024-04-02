import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import "./TaskInput.css";

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(taskText.trim() == ''){
        alert("Enter the valid task");
        return;
    }
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a task..."

        className="task-input"
      />
      <button onClick={handleAddTask} className="task-input-button">Add Task</button>
    </div>
  );
};

export default TaskInput;
