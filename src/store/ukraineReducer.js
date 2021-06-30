import { SET_UKRAINE_STATISTICS, IS_LOADING } from "./Constants";
import { handleActions as ukraineReducer}  from "../store/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
};

export default ukraineReducer({
  [SET_UKRAINE_STATISTICS]: (
    state,
    action 
  ) => {
    debugger;
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
});
