import produce from "immer";
import { handleActions as raHandleActions } from "redux-actions";
import { initialState } from "./ukraineReducer";

export const handleActions = (actions, state=initialState) =>
  raHandleActions(
    Object.keys(actions).reduce((acc, key) => {
      acc[key] = produce(actions[key]);
      return acc;
    }, {}),
    state
  );
