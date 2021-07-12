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
  state = {
    NewConfirmed: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
  };
  newCountry = this.props.country;

  componentDidMount() {
    this.getStatistics();
    this.readStatistic();
  }

  isShowError() {
    if (this.props.WorldIsError || this.props.ukraineIsError) {
      return <div className={style.error}>Something Wrong</div>;
    } else {
      return null;
    }
  }

  isShowContent() {
    if (this.props.ukraineIsLoading || this.props.WorldIsLoading) {
      return <Preloader />;
    } else {
      return (
        <div className={style.statistics}>
          <div className={style.item}>{this.newCountry} COVID19 statisctic</div>
          <div className={style.item}>
            New Confirmed:
            {this.state.NewConfirmed}        
          </div>
          <div className={style.item}>
            Total Confirmed:
            {this.state.TotalConfirmed}{" "}
          </div>
          <div className={style.item}>
            Total Deaths:
            {this.state.TotalDeaths}
          </div>
          <div className={style.item}>
            New Recovered:
            {this.state.NewRecovered}
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

  getStatistics = () => {
    if (this.newCountry === "Ukraine") {
      this.props.getUkraineStatistic();
    } else {
      this.props.getWorldStatistic();
    }
  };

  readStatistic = () => {
    if (this.newCountry === "Ukraine") {
      this.setState({
        NewConfirmed: this.props.ukraineNewConfirmed,
        TotalConfirmed: this.props.ukraineTotalConfirmed,
        TotalDeaths: this.props.ukraineTotalDeaths,
        NewRecovered: this.props.ukraineNewRecovered,
      });
    } else {
      this.setState({
        NewConfirmed: this.props.worldNewConfirmed,
        TotalConfirmed: this.props.worldTotalConfirmed,
        TotalDeaths: this.props.worldTotalDeaths,
        NewRecovered: this.props.worldNewRecovered,
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    ukraineNewConfirmed: state?.ukraine?.NewConfirmed,
    ukraineTotalConfirmed: state?.ukraine?.TotalConfirmed,
    ukraineTotalDeaths: state?.ukraine?.TotalDeaths,
    ukraineNewRecovered: state?.ukraine?.NewRecovered,
    ukraineIsLoading: state?.ukraine?.isLoading,
    ukraineIsError: state?.ukraine?.isError,
    worldNewConfirmed: state?.world?.NewConfirmed,
    worldTotalConfirmed: state?.world?.TotalConfirmed,
    worldTotalDeaths: state?.world?.TotalDeaths,
    worldNewRecovered: state?.world?.NewRecovered,
    worldIsLoading: state?.world?.isLoading,
    worldIsError: state?.world?.isError,
  };
};

const mapDispatchToProps = {
  getUkraineStatistic,
  getWorldStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidStatistic);
