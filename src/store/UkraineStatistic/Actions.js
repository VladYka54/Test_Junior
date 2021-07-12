import { createAction } from "redux-actions";
import {
  IS_UKRAINE_LOADING_SUCCESS,
  IS_UKRAINE_ERROR,
  SET_UKRAINE_STATISTICS_START,
} from "./Constants";

export const setUkraineStatisticStart = createAction(
  SET_UKRAINE_STATISTICS_START
);
export const isUkraineLoadingSuccess = createAction(IS_UKRAINE_LOADING_SUCCESS);
export const setUkraineError = createAction(IS_UKRAINE_ERROR);
