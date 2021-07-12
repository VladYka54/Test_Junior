import React from "react";
import CovidStatistic from "../Containers/CovidStatistic/CovidStatistic";
import Header from "../Components/Header/Header";
import { Route } from "react-router";
import style from "./App.module.css";
import StartUp from "../Containers/StartUp/StartUp";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper__content}>
        <Route
          path="/Ukraine"
          render={() => <CovidStatistic country="Ukraine" />}
        />
        <Route
          path="/World"
          render={() => <CovidStatistic country="World" />}
        />
        <Route exact path="/" render={() => <StartUp />} />
      </div>
    </div>
  );
}

export default App;
