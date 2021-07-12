import { createAction } from "redux-actions";
import {
  SET_WORLD_STATISTICS_START,
  IS_LOADING_SUCCESS,
  IS_ERROR,
} from "./Constants";

export const isLoadingSuccess = createAction(IS_LOADING_SUCCESS);
export const setError = createAction(IS_ERROR);
export const setWorldStatisticsStart = createAction(SET_WORLD_STATISTICS_START);
