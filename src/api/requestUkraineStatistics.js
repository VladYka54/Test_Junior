import { instance } from "./api";

export const requestUkraineStatistics = () => {
  return instance("get", "", null, {});
};
