import { ActionEnum, ActionType } from "../actions";

const initialState = {
  customCommand: ""
};

export default function(state = initialState, action: ActionType) {
  switch (action.type) {
    case ActionEnum.CUSTOM_COMMAND:
      return action.payload;
    default:
      return state;
  }
}
