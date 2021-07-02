import { requestWorldStatistics } from "../../api/requestWorldStatistics";
import { setWorldStatistics, setLoading, setError } from "./Actions";

export const getWorldStatistics = () => async (dispatch) => {
  try {
    dispatch(setError(false));
    dispatch(setLoading(true));
    let responce = await requestWorldStatistics();
    dispatch(setLoading(false));
    dispatch(
      setWorldStatistics({
        NewConfirmed: responce.data.Global.NewConfirmed,
        TotalConfirmed: responce.data.Global.TotalConfirmed,
        TotalDeaths: responce.data.Global.TotalDeaths,
        NewRecovered: responce.data.Global.NewRecovered,
      })
    );
  } catch (error) {
    dispatch(setError(true));
  }
};
