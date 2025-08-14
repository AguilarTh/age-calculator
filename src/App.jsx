import { useState } from "react";
import "./App.css";

import InputBox from "./components/InputBox";
import MiddleDivider from "./components/MiddleDivider";
import AgeDisplay from "./components/AgeDisplay";

function App() {
  return (
    <div className="container">
      <InputBox />
      <MiddleDivider />
      <AgeDisplay />
    </div>
  );
}

export default App;
