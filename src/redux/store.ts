import { createStore, combineReducers, Store } from "redux";
import { taskReducer } from "../redux/reducers/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
