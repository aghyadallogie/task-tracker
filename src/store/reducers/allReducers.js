import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducers";
import { usersReducer } from "./usersReducers";

export const allReducers = combineReducers({
  tasks: tasksReducer,
  user: usersReducer,
});
