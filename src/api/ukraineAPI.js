import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com/summary",
});

export const ukraineAPI = {
  getStatistics() {
    return instance.get(``).then((responce) => {
      return responce.data.Countries.filter((c) => c.Country === "Ukraine");
    });
  },
};
