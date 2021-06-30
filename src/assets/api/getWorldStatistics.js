import { instance } from "./api";

export const worldAPI = {
  getGlobalStatistics() {
    return instance.get(``).then((responce) => {
      return responce.data.Global;
    });
  },
};
