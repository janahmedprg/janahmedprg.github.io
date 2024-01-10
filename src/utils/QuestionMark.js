import React from "react";
import "../css/QuestionMark.css";

const QuestionMark = ({ tooltipText }) => (
  <div className="question-mark-container">
    <div className="question-mark">
      ?<div className="instructions">{tooltipText}</div>
    </div>
  </div>
);

export default QuestionMark;
