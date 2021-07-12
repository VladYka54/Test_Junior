import { instance } from "./api";

export const requestCovidStatistics = () => {
  return instance("get", "", null, {});
};
