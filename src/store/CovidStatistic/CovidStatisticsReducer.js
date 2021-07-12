import {
  IS_WORLD_LOADING_SUCCESS,
  IS_UKRAINE_LOADING_SUCCESS,
  SET_STATISTICS_START,
  IS_ERROR,
} from "./Constants";
import { handleActions as CovidStatisticsReducer } from "../../utils/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
  isError: false,
};

export default CovidStatisticsReducer({
  [SET_STATISTICS_START]: (state, action) => {    
    return {
      ...state,
      isLoading: true,
    };
  },
  [IS_WORLD_LOADING_SUCCESS]: (state, action) => {
    const responce = action.payload.data.Global;
    return {
      ...state,
      NewConfirmed: responce.NewRecovered,
      TotalConfirmed: responce.TotalConfirmed,
      TotalDeaths: responce.TotalDeaths,
      NewRecovered: responce.NewRecovered,
      isLoading: false,
    };
  },
  [IS_UKRAINE_LOADING_SUCCESS]: (state, action) => {
    const responce = action.payload.data.Countries.filter(
      (c) => c.Country === "Ukraine"
    );
    return {
      ...state,
      NewConfirmed: responce[0].NewConfirmed,
      TotalConfirmed: responce[0].TotalConfirmed,
      TotalDeaths: responce[0].TotalDeaths,
      NewRecovered: responce[0].NewRecovered,
      isLoading: false,
    };
  },
  [IS_ERROR]: (state, action) => {
    return {
      ...state,
      isError: action.payload,
    };
  },
});
