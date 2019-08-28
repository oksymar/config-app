import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import commandReducer from "./command-reducer";

export type RootState = StateType<ReturnType<typeof import(".").default>>;

export default combineReducers({
  command: commandReducer
});
