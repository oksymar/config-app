import axios from "axios";
import { Dispatch } from "redux";

export enum ActionEnum {
  CUSTOM_COMMAND = "CUSTOM_COMMAND"
}

export type ActionType = { type: ActionEnum; payload: any };

export const sendCommand = (command: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  const res = await axios.post("/api/command/custom", command);

  dispatch({ type: ActionEnum.CUSTOM_COMMAND, payload: res.data });
};
