import React from "react";
//store
import { getWorldStatistics } from "../../store/WorldStatictics/Thunks";
import { connect } from "react-redux";
//utils
import Preloader from "../../Components/common/Preloader/preloader";
//styles
import style from "./World.module.css";

class WorldContainer extends React.Component {
  constructor(props){
    super(props);
    this.props.getStat();
  }

  render() {
    return (
      <>
        {this.props.isError ? (
          <div className={style.error}>Something Wrong</div>
        ) : null}
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <div className={style.statistics}>
            <div className={style.item}>Global COVID19 statisctic</div>
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
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    NewConfirmed: state?.world?.NewConfirmed,
    TotalConfirmed: state?.world?.TotalConfirmed,
    TotalDeaths: state?.world?.TotalDeaths,
    NewRecovered: state?.world?.NewRecovered,
    isLoading: state?.world?.isLoading,
    isError: state?.world?.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => {
      dispatch(getWorldStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldContainer);
