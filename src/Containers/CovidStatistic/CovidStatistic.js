import React from "react";
//store
import { getUkraineStatistic } from "../../store/UkraineStatistic/Thunks";
import { getWorldStatistic } from "../../store/WorldStatitic/Thunks";
import { connect } from "react-redux";
//utils
import Preloader from "../../Components/common/Preloader/preloader";
//styles
import style from "./CovidStatistic.module.css";

class CovidStatistic extends React.Component {
  newCountry = this.props.country;

  getStatistics = () => {
    if (this.newCountry === "Ukraine") {
       this.props.getUkraineStatistic();
    } else {
      this.props.getWorldStatistic();
    }
  };

  componentDidMount() {
    this.getStatistics();
  }

  isShowError() {
    if (this.props.WorldIsError || this.props.UkraineIsError) {
      return <div className={style.error}>Something Wrong</div>;
    } else {
      return null;
    }
  }

  isShowContent() {
    if (this.props.UkraineIsLoading || this.props.WorldIsLoading) {
      return <Preloader />;
    } else {
      return (
        <div className={style.statistics}>
          <div className={style.item}>{this.newCountry} COVID19 statisctic</div>
          <div className={style.item}>
            New Confirmed:
            {this.newCountry === "Ukraine"
              ? this.props.UkraineNewConfirmed
              : this.props.WorldNewConfirmed}
          </div>
          <div className={style.item}>
            Total Confirmed:{" "}
            {this.newCountry === "Ukraine"
              ? this.props.UkraineTotalConfirmed
              : this.props.WorldTotalConfirmed}
          </div>
          <div className={style.item}>
            Total Deaths:{" "}
            {this.newCountry === "Ukraine"
              ? this.props.UkraineTotalDeaths
              : this.props.WorldTotalDeaths}
          </div>
          <div className={style.item}>
            New Recovered:{" "}
            {this.newCountry === "Ukraine"
              ? this.props.UkraineNewRecovered
              : this.props.WorldNewRecovered}
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
    UkraineNewConfirmed: state?.ukraine?.NewConfirmed,
    UkraineTotalConfirmed: state?.ukraine?.TotalConfirmed,
    UkraineTotalDeaths: state?.ukraine?.TotalDeaths,
    UkraineNewRecovered: state?.ukraine?.NewRecovered,
    UkraineIsLoading: state?.ukraine?.isLoading,
    UkraineIsError: state?.ukraine?.isError,
    WorldNewConfirmed: state?.world?.NewConfirmed,
    WorldTotalConfirmed: state?.world?.TotalConfirmed,
    WorldTotalDeaths: state?.world?.TotalDeaths,
    WorldNewRecovered: state?.world?.NewRecovered,
    WorldIsLoading: state?.world?.isLoading,
    WorldIsError: state?.world?.isError,
  };
};

const mapDispatchToProps = {
  getUkraineStatistic,
  getWorldStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidStatistic);
