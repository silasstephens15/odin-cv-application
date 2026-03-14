import { useState } from "react";
import "./styles/App.css";
import { BiographicInfo, JobSection } from "./components";

function App() {
  return (
    <>
      <BiographicInfo />
      <JobSection />
    </>
  );
}

export default App;
