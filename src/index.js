import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import SecondComponent from './SecondComponent/SecondComponent';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
   <Header/>
    <Route path = '/Ukraine'
        render = {()=> <App/>}/>
       <Route path = '/Global'
        render = {()=> <SecondComponent/>}/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
