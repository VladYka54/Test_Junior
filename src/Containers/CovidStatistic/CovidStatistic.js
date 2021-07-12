import React from "react";
//store
import { getCovidStatistics } from "../../store/CovidStatistic/Thunks";
import { connect } from "react-redux";
//utils
import Preloader from "../../Components/common/Preloader/preloader";
//styles
import style from "./CovidStatistic.module.css";

class CovidStatistic extends React.Component {
  constructor(props) {
    super(props);
    this.props.getStat(this.props.country);
  }

  isShowError() {
    if (this.props.isError) {
      return <div className={style.error}>Something Wrong</div>;
    } else {
      return null;
    }
  }

  isShowContent() {
    if (this.props.isLoading) {
      return <Preloader />;
    } else {
      return (
        <div className={style.statistics}>
          <div className={style.item}>
            {this.props.country} COVID19 statisctic
          </div>
          <div className={style.item}>
            New Confirmed: {this.props.NewConfirmed}
          </div>
          <div className={style.item}>
            Total Confirmed: {this.props.TotalConfirmed}
          </div>
          <div className={style.item}>
            Total Deaths: {this.props.TotalDeaths}
          </div>
          <div className={style.item}>
            New Recovered: {this.props.NewRecovered}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        {this.isShowError()}
        {this.isShowContent()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    NewConfirmed: state?.covid?.NewConfirmed,
    TotalConfirmed: state?.covid?.TotalConfirmed,
    TotalDeaths: state?.covid?.TotalDeaths,
    NewRecovered: state?.covid?.NewRecovered,
    isLoading: state?.covid?.isLoading,
    isError: state?.covid?.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: (country) => {
      dispatch(getCovidStatistics(country));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidStatistic);
