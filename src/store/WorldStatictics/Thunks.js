import { requestWorldStatistics } from "../../api/requestWorldStatistics";
import {
  setWorldStatisticsStart,
  isLoadingSuccess,
  setError,
} from "./Actions";

export const getWorldStatistics = () => async (dispatch) => {
  try {
    dispatch(setWorldStatisticsStart(true));
    const responce = await requestWorldStatistics();
    dispatch(isLoadingSuccess(responce));
  } catch (error) {
    dispatch(setError(true));
  }
};
