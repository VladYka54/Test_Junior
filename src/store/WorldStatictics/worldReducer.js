import { SET_WORLD_STATISTICS, IS_LOADING, IS_ERROR } from "./Constants";
import { handleActions as worldReducer } from "../utils/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
  isError: false,
};

export default worldReducer({
  [SET_WORLD_STATISTICS]: (state, action) => {
    return {
      ...state,
      NewConfirmed: action.payload.NewRecovered,
      TotalConfirmed: action.payload.TotalConfirmed,
      TotalDeaths: action.payload.TotalDeaths,
      NewRecovered: action.payload.NewRecovered,
    };
  },
  [IS_LOADING]: (state, action) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
  [IS_ERROR]: (state, action) => {
    return {
      ...state,
      isError: action.payload,
    };
  },
});
