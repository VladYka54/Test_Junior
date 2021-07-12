import { createAction } from "redux-actions";
import {
  SET_UKRAINE_STATISTICS_START,
  IS_LOADING_SUCCESS,
  IS_ERROR,
} from "./Constants";

export const isLoadingSuccess = createAction(IS_LOADING_SUCCESS);
export const setError = createAction(IS_ERROR);
export const setUkraineStatisticsStart = createAction(SET_UKRAINE_STATISTICS_START);
