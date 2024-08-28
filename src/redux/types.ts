export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  category?: 'Personal' | 'Work' | 'Projects';
  status?: 'To Do' | 'In Progress' | 'Completed';
  date: string;
  completed: boolean;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number; // Task ID
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type TaskActionTypes = AddTaskAction | EditTaskAction | DeleteTaskAction;
export type UserActionTypes = SetUserAction | LogoutUserAction;
