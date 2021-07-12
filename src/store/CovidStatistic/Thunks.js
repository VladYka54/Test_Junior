import { requestCovidStatistics } from "../../api/requestCovidStatistics";
import {
  isUkraineLoadingSuccess,
  isWorldLoadingSuccess,
  setError,
  setStatisticsStart,
} from "./Actions";

export const getCovidStatistics = (country) => async (dispatch) => {
  try {
    dispatch(setStatisticsStart());
    const responce = await requestCovidStatistics();
    if (country === "Ukraine") {
      dispatch(isUkraineLoadingSuccess(responce));
    } else {
      dispatch(isWorldLoadingSuccess(responce));
    }
  } catch (error) {
    dispatch(setError(true));
  }
};
