import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ukraineReducer from "./ukraineReducer";
import worldReducer from './worldReducer'

let reducers = combineReducers({
  ukraine: ukraineReducer,
  world: worldReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
