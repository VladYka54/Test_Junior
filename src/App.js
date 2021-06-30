import React from "react";
import UkraineContainer from "./Components/Ukraine/UkraineContainer";
import WorldContainer from "./Components/World/WorldContainer";
import Header from "./Components/Header/Header";
import { Route } from "react-router";
import style from './App.module.css'
import StartUp from './Components/StartUp/StartUp'
function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper__content}>
        <Route path="/Ukraine" render={() => <UkraineContainer />} />
        <Route path="/World" render={() => <WorldContainer />} />
        <Route exact path="/" render={()=> <StartUp/>}/>    
      </div>
    </div>
  );
}

export default App;
