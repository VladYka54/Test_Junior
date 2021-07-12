import { requestCovidStatistics } from "../../api/requestCovidStatistics";
import {
  setUkraineStatisticStart,
  isUkraineLoadingSuccess,
  setUkraineError,
} from "./Actions";
export const getUkraineStatistic = () => async (dispatch) => {
  try {
    dispatch(setUkraineStatisticStart());
    const responce = await requestCovidStatistics();
    dispatch(isUkraineLoadingSuccess(responce));
  } catch (error) {
    dispatch(setUkraineError(true));
  }
};
