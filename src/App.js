import React from "react";
import UkraineContainer from "./screens/Ukraine/UkraineContainer";
import WorldContainer from "./screens/World/WorldContainer";
import Header from "./screens/Header/Header";
import { Route } from "react-router";
import style from './App.module.css'

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper__content}>
        <Route path="/Ukraine" render={() => <UkraineContainer />} />
        <Route path="/World" render={() => <WorldContainer />} />
      </div>
    </div>
  );
}

export default App;
