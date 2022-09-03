import { combineReducers } from "redux";
import MessageReducer from "./MessageReducer";

const reducers = combineReducers({ message: MessageReducer });
export default reducers;
