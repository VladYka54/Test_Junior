import {
  SET_UKRAINE_STATISTICS_START,
  IS_UKRAINE_LOADING_SUCCESS,
  IS_UKRAINE_ERROR,
} from "./Constants";
import { handleActions as ukraineReducer } from "../../utils/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
  isError: false,
};

export default ukraineReducer({
  [SET_UKRAINE_STATISTICS_START]: (state, action) => {    
    return {
      ...state,
      isLoading: true,
    };
  },
  [IS_UKRAINE_LOADING_SUCCESS]: (state, action) => {    
    const responce = action.payload.data;
    const statistic = responce.Countries.filter((c) => c.Country === "Ukraine");
    return {
      ...state,
      NewConfirmed: statistic[0].NewConfirmed,
      TotalConfirmed: statistic[0].TotalConfirmed,
      TotalDeaths: statistic[0].TotalDeaths,
      NewRecovered: statistic[0].NewRecovered,
      isLoading: false,
    };
  },
  [IS_UKRAINE_ERROR]: (state, action) => {
    return {
      ...state,
      isError: action.payload,
    };
  },
});
