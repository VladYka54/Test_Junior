import { instance } from "./api";
export const requestUkraineStatistics = () => {
  /* return instance.get(``).then((responce) => {
    return responce.data.Countries.filter((c) => c.Country === "Ukraine");
  });*/

  return instance("get", "", null, {});
};
