import { useState } from "react";
import "./styles/App.css";
import { BiographicInfo, Section } from "./components";

function App() {
  return (
    <>
      <BiographicInfo />
      <Section type="Work" />
      <Section type="Education" />
    </>
  );
}

export default App;
