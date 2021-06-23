import React, { useEffect } from "react";
import style from "./Ukraine.module.css";
import Preloader from "../common/Preloader/preloader";

const Ukraine = (props) => {
  useEffect(() => {
    props.getStat();
  }, []);
  return (
    <div>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <div className={style.statistics}>
          <div className={style.item}>Ukraine COVID19 statisctic</div>
          <div className={style.item}>New Confirmed: {props.NewConfirmed}</div>
          <div className={style.item}>
            Total Confirmed: {props.TotalConfirmed}
          </div>
          <div className={style.item}>Total Deaths: {props.TotalDeaths}</div>
          <div className={style.item}>New Recovered: {props.NewRecovered}</div>
        </div>
      )}
    </div>
  );
};

export default Ukraine;
