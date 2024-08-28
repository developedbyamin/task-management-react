import { ADD_TASK, EDIT_TASK, DELETE_TASK, TaskActionTypes, Task } from '../types';

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task: Task): TaskActionTypes => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (id: number): TaskActionTypes => ({
  type: DELETE_TASK,
  payload: id,
});
