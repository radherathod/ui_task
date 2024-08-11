import React from "react";
import "./Stepper.css";

const Stepper = () => {
  return (
    <div className="stepper">
      <div className="step active">Assessment</div>
      <div className="step">Scoring</div>
      <div className="step">Maturity & Risk</div>
      <div className="step">CounterMeasures</div>
      <div className="step">Projects</div>
      <div className="step">Strategy/Roadmap</div>
    </div>
  );
};

export default Stepper;
