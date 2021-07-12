import { applyMiddleware, combineReducers, createStore } from "redux";
import ukraineReducer from "./UkraineStatistic/ukraineReducer";
import worldReducer from "./WorldStatitic/worldReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
  ukraine: ukraineReducer,
  world: worldReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
