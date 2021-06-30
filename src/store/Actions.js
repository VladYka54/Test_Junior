import { createAction } from "redux-actions";
import {
  SET_UKRAINE_STATISTICS,
  SET_WORLD_STATISTICS,
  IS_LOADING,
} from "./Constants";

export const setLoading = createAction(IS_LOADING);
export const setUkraineStatistics = createAction(SET_UKRAINE_STATISTICS);
export const setWorldStatistics = createAction(SET_WORLD_STATISTICS);
