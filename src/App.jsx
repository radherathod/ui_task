import React from "react";
import Stepper from "./components/Stepper";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Stepper />
      </header>
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
