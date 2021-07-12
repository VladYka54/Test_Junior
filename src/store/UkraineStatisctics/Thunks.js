import {
  setUkraineStatisticsStart,
  isLoadingSuccess,
  setError,
} from "./Actions";
import { requestUkraineStatistics } from "../../api/requestUkraineStatistics";

export const getUkraineStatistics = () => async (dispatch) => {
  try {
    dispatch(setUkraineStatisticsStart());
    const responce = await requestUkraineStatistics();
    dispatch(isLoadingSuccess(responce));
  } catch (error) {
    dispatch(setError(true));
  }
};
