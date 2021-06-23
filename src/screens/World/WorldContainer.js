import React from "react";
import World from "./World";
import { getWorldStatistics } from "../../store/worldReducer";
import { connect } from "react-redux";
import Preloader from "./../common/Preloader/preloader";

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
          <World
            NewConfirmed={this.props.NewConfirmed}
            TotalConfirmed={this.props.TotalConfirmed}
            TotalDeaths={this.props.TotalDeaths}
            NewRecovered={this.props.NewRecovered}
          />
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

let mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => {
      dispatch(getWorldStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldContainer);
