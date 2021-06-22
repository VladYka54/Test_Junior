import { ukraineAPI } from "../api/ukraineAPI";

const SET_STATISTICS = "SET-STATISTICS";

let initialState = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
};

const ukraineReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case SET_STATISTICS:
      return {
        ...state,
        NewConfirmed: action.NewConfirmed,
        TotalConfirmed: action.TotalConfirmed,
        TotalDeaths: action.TotalDeaths,
        NewRecovered: action.NewRecovered,
      };
    default:
      return state;
  }
};

export let setUkraineStatistics = (
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

export const getUkraineStatistics = () => async (dispatch) => {
  let responce = await ukraineAPI.getStatistics();
  dispatch(
    setUkraineStatistics(
      responce[0].NewConfirmed,
      responce[0].TotalConfirmed,
      responce[0].TotalDeaths,
      responce[0].NewRecovered
    )
  );
};

export default ukraineReducer;
