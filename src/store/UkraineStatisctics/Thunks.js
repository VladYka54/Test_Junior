import { setUkraineStatistics, setLoading, setError } from "./Actions";
import { requestUkraineStatistics } from "../../api/requestUkraineStatistics";

export const getUkraineStatistics = () => async (dispatch) => {
  try {
    dispatch(setError(false));
    dispatch(setLoading(true));
    let res = await requestUkraineStatistics();
    res = res.data.Countries.filter((c) => c.Country === "Ukraine");
    dispatch(
      setUkraineStatistics({
        NewConfirmed: res[0].NewConfirmed,
        TotalConfirmed: res[0].TotalConfirmed,
        TotalDeaths: res[0].TotalDeaths,
        NewRecovered: res[0].NewRecovered,
      })
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));
  }
};
