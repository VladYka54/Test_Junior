import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import NewConfirmedReducer, { TotalConfirmed1Reducer } from './NewConfirmedReducer';

let reducers = combineReducers({
  NewConfirmed:NewConfirmedReducer,
  TotalConfirmed:TotalConfirmed1Reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers (
  applyMiddleware(thunkMiddleware)
  ));

window.__store__ = store;

export default store;
// dispatch(action){
//   this._state.Global.NewConfirmed = NewConfirmedReducer(this._state.Global.NewConfirmed,action)
// }

