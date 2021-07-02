import { applyMiddleware, combineReducers, createStore } from "redux";
import ukraineReducer from "./UkraineStatisctics/ukraineReducer";
import worldReducer from "./WorldStatictics/worldReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
  ukraine: ukraineReducer,
  world: worldReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
