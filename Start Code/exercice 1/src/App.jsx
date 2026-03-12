import React from "react";
import { useState } from "react";
export default function App() {
  const [score, setScore] = useState(0);
  const getScoreBarStyle = () => {
    // 1- Compute width
    if(score < 0 || score > 10) return;
    const scoreWidth = `${score*10}%`;

    // 2- Compute color (optional)
    let scoreColor = `rgb(${255 - score*25.5}, ${score*25.5}, 0)`; 

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
