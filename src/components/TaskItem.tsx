// src/components/TaskItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';
import { Task } from '../redux/types';
import { AppDispatch } from '../redux/store';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Correctly typed dispatch
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
