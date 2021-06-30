import { setUkraineStatistics, setLoading } from "./Actions";
import { requestUkraineStatistics } from "../api/requestUkraineStatistics";
import { requestWorldStatistics } from "../api/requestWorldStatistics";
import { setWorldStatistics } from "./Actions";

export const getUkraineStatistics = () => async (dispatch) => {
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
};

export const getWorldStatistics = () => async (dispatch) => {
  dispatch(setLoading(true));
  let responce = await requestWorldStatistics();
  dispatch(setLoading(false));
  dispatch(
    setWorldStatistics({
      NewConfirmed: responce.data.Global.NewConfirmed,
      TotalConfirmed: responce.data.Global.TotalConfirmed,
      TotalDeaths: responce.data.Global.TotalDeaths,
      NewRecovered: responce.data.Global.NewRecovered
    }
    )
  );
};
