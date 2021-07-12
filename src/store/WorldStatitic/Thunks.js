import { requestCovidStatistics } from "../../api/requestCovidStatistics";
import {
  setWorldStatisticStart,
  isWorldLoadingSuccess,
  setWorldError,
} from "./Actions";

export const getWorldStatistic = () => async (dispatch) => {
  try {
    dispatch(setWorldStatisticStart());
    const responce = await requestCovidStatistics();
    dispatch(isWorldLoadingSuccess(responce));
  } catch (error) {
    dispatch(setWorldError(true));
  }
};
