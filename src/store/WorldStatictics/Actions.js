import { createAction } from "redux-actions";
import { SET_WORLD_STATISTICS, IS_LOADING, IS_ERROR } from "./Constants";

export const setLoading = createAction(IS_LOADING);
export const setError = createAction(IS_ERROR);
export const setWorldStatistics = createAction(SET_WORLD_STATISTICS);
