import { instance } from "./api";

export const requestWorldStatistics = () => {
  return instance("get", "", null, {});
};
