import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ukraineReducer from "./UkraineStatistic/ukraineReducer";
import worldReducer from "./WorldStatitic/worldReducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
  ukraine: ukraineReducer,
  world: worldReducer,
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//let store = createStore(reducers, applyMiddleware(thunk));
export default store;
