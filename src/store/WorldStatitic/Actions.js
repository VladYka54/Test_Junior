import { createAction } from "redux-actions";
import {
  IS_WORLD_LOADING_SUCCESS,
  IS_WORLD_ERROR,
  SET_WORLD_STATISTICS_START,
} from "./Constants";

export const setWorldStatisticStart = createAction(SET_WORLD_STATISTICS_START);
export const isWorldLoadingSuccess = createAction(IS_WORLD_LOADING_SUCCESS);
export const setWorldError = createAction(IS_WORLD_ERROR);
