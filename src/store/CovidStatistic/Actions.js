import { createAction } from "redux-actions";
import {
  SET_STATISTICS_START,
  IS_UKRAINE_LOADING_SUCCESS,
  IS_WORLD_LOADING_SUCCESS,
  IS_ERROR,
} from "./Constants";

export const isUkraineLoadingSuccess = createAction(IS_UKRAINE_LOADING_SUCCESS);
export const isWorldLoadingSuccess = createAction(IS_WORLD_LOADING_SUCCESS);
export const setError = createAction(IS_ERROR);
export const setStatisticsStart = createAction(SET_STATISTICS_START);
