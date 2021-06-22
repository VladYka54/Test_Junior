import React from "react";
import "./App.css";
import UkraineContainer from "./screens/Ukraine/UkraineContainer";
import World from "./screens/World/World";
import Header from "./screens/Header/Header";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Route path="/Ukraine" render={() => <UkraineContainer />} />
      <Route path="/World" render={() => <World />} />
    </div>
  );
}

export default App;
