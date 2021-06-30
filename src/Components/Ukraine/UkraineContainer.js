import { getUkraineStatistics } from "../../store/Thunks";
import { connect } from "react-redux";
import style from "./Ukraine.module.css";
import Preloader from "../common/Preloader/preloader";
import React, { useEffect } from "react";

const Ukraine = ({
  NewConfirmed,
  TotalConfirmed,
  TotalDeaths,
  NewRecovered,
  isLoading,
  getStat,
}) => {
  useEffect(() => {
    getStat();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={style.statistics}>
          <div className={style.item}>Ukraine COVID19 statisctic</div>
          <div className={style.item}>New Confirmed: {NewConfirmed}</div>
          <div className={style.item}>Total Confirmed: {TotalConfirmed}</div>
          <div className={style.item}>Total Deaths: {TotalDeaths}</div>
          <div className={style.item}>New Recovered: {NewRecovered}</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    NewConfirmed: state.ukraine.NewConfirmed,
    TotalConfirmed: state.ukraine.TotalConfirmed,
    TotalDeaths: state.ukraine.TotalDeaths,
    NewRecovered: state.ukraine.NewRecovered,
    isLoading: state.ukraine.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => {
      dispatch(getUkraineStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ukraine);
