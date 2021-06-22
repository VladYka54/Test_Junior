import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ukraineReducer from './ukraineReducer'

let reducers = combineReducers({
  ukraine: ukraineReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
