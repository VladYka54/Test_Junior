import { SET_WORLD_STATISTICS, IS_LOADING } from "./Constants";
import { handleActions as worldReducer}  from "../store/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
};

export default worldReducer({
  [SET_WORLD_STATISTICS]: (
    state,
    action 
  ) => {
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
      isLoading: action.payload
    };
  },
});
