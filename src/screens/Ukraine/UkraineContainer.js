import Ukraine from "./Ukraine";
import {
  getUkraineStatistics,
} from "../../store/ukraineReducer";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    NewConfirmed: state.ukraine.NewConfirmed,
    TotalConfirmed: state.ukraine.TotalConfirmed,
    TotalDeaths: state.ukraine.TotalDeaths,
    NewRecovered: state.ukraine.NewRecovered,
    isLoading: state.ukraine.isLoading
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => {
      dispatch(getUkraineStatistics());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ukraine);
