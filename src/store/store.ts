import { createStore, combineReducers } from 'redux';
import { taskReducer } from '../redux/reducers/taskReducer';
import { userReducer } from '../redux/reducers/userReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
});

// Create the Redux store
export const store = createStore(rootReducer);

// Define the AppDispatch and RootState types if needed
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
