import { applyMiddleware, combineReducers, createStore } from "redux";
import CovidStatisticsReducer from "./CovidStatistic/CovidStatisticsReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
  covid: CovidStatisticsReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
