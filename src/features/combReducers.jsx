import { combineReducers } from "redux";
import authReducer from "./auth/AuthSlice";
import jobReducer from './jobs/jobSlice'

const rootReducer = combineReducers({
  user: authReducer,
  job:jobReducer,
});

export default rootReducer;
