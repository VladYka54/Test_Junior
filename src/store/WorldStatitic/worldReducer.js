import {
  IS_WORLD_LOADING_SUCCESS,
  IS_WORLD_ERROR,
  SET_WORLD_STATISTICS_START,
} from "./Constants";
import { handleActions as worldReducer } from "../../utils/redux-actions";

export const initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
  isError: false,
};

export default worldReducer({
  [SET_WORLD_STATISTICS_START]: (state, action) => {
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
  [IS_WORLD_ERROR]: (state, action) => {
    return {
      ...state,
      isError: action.payload,
    };
  },
});
