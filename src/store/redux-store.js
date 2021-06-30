import { applyMiddleware, combineReducers, createStore } from "redux";
import ukraineReducer from "./ukraineReducer";
import worldReducer from "./worldReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
  ukraine: ukraineReducer,
  world: worldReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
