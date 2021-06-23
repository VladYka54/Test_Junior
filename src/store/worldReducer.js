import { worldAPI } from "../api/api";

const SET_STATISTICS = "SET-STATISTICS";
const IS_LOADING = "IS-LOADING";
let initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  isLoading: false,
};

const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATISTICS:
      return {
        ...state,
        NewConfirmed: action.NewConfirmed,
        TotalConfirmed: action.TotalConfirmed,
        TotalDeaths: action.TotalDeaths,
        NewRecovered: action.NewRecovered,
      };
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export let setWorldStatistics = (
  NewConfirmed,
  TotalConfirmed,
  TotalDeaths,
  NewRecovered
) => {
  return {
    type: SET_STATISTICS,
    NewConfirmed,
    TotalConfirmed,
    TotalDeaths,
    NewRecovered,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: IS_LOADING,
    isLoading,
  };
};

export const getWorldStatistics = () => async (dispatch) => {
  dispatch(setLoading(true));
  let responce = await worldAPI.getGlobalStatistics();
 dispatch(setLoading(false));
  dispatch(
    setWorldStatistics(
      responce.NewConfirmed,
      responce.TotalConfirmed,
      responce.TotalDeaths,
      responce.NewRecovered
    )
  );
 
};

export default worldReducer;
