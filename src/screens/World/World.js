import React from "react";
import style from "./World.module.css";
const World = (props) => {
  return (
    <div className={style.statistics}>
      <div className={style.item}>Global COVID19 statisctic</div>
      <div className={style.item}>New Confirmed: {props.NewConfirmed}</div>
      <div className={style.item}>Total Confirmed: {props.TotalConfirmed}</div>
      <div className={style.item}>Total Deaths: {props.TotalDeaths}</div>
      <div className={style.item}>New Recovered: {props.NewRecovered}</div>
    </div>
  );
};

export default World;
