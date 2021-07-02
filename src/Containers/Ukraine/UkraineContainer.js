import React, { useEffect } from "react";
//store
import { getUkraineStatistics } from "../../store/UkraineStatisctics/Thunks";
import { connect } from "react-redux";
//utils
import Preloader from "../../Components/common/Preloader/preloader";
//styles
import style from "./Ukraine.module.css";

const Ukraine = ({
  NewConfirmed,
  TotalConfirmed,
  TotalDeaths,
  NewRecovered,
  isLoading,
  isError,
  getStat,
}) => {
  useEffect(() => {
    getStat();
  }, []);

  return (
    <div>
    {isError ? (<div className={style.error}>Something Wrong</div>): null}
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
    NewConfirmed: state?.ukraine?.NewConfirmed,
    TotalConfirmed: state?.ukraine?.TotalConfirmed,
    TotalDeaths: state?.ukraine?.TotalDeaths,
    NewRecovered: state?.ukraine?.NewRecovered,
    isLoading: state?.ukraine?.isLoading,
    isError: state?.ukraine?.isError,
    errorMessage: state?.ukraine?.errorMessage
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
