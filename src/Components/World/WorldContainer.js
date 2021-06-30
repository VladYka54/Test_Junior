import React from "react";
import { getWorldStatistics } from "../../store/Thunks";
import { connect } from "react-redux";
import Preloader from "./../common/Preloader/preloader";
import style from "./World.module.css";

class WorldContainer extends React.Component {
  componentDidMount() {
    this.props.getStat();
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <div className={style.statistics}>
          <div className={style.item}>Global COVID19 statisctic</div>
          <div className={style.item}>New Confirmed: {this.props.NewConfirmed}</div>
          <div className={style.item}>Total Confirmed: {this.props.TotalConfirmed}</div>
          <div className={style.item}>Total Deaths: {this.props.TotalDeaths}</div>
          <div className={style.item}>New Recovered: {this.props.NewRecovered}</div>
        </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    NewConfirmed: state.world.NewConfirmed,
    TotalConfirmed: state.world.TotalConfirmed,
    TotalDeaths: state.world.TotalDeaths,
    NewRecovered: state.world.NewRecovered,
    isLoading: state.world.isLoading,
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
