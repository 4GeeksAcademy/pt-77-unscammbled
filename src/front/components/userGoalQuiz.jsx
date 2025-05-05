import React, { useState, useEffect } from "react";
import Slider from "./slider";

function UserGoalQuiz({ setDisplay, goals, setGoals }) {
  const handleUserGoals = () => {
    setDisplay("cuisine")
  }

  return (
    <div className="App mx-auto w-75">
      <div className="questionGroup">
        <h1>How often would you like meal plan?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setGoals({ ...goals, planning_fequency: "constantly" })}><div className="one"><div className="whitespace">Every Week</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, planning_fequency: "regularly" })}><div className="two"><div className="whitespace">Most of the time</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, planning_fequency: "irregularly" })}><div className="three"><div className="whitespace">Often, but I don't stick to it</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, planning_fequency: "never" })}><div className="four"><div className="whitespace">Never</div></div></div>
        </div>

      </div>
      <div className="questionGroup">
        <h1>How often would you like to eat out?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setGoals({ ...goals, cooking_fequency: "constantly" })}><div className="one"><div className="whitespace">Most every meal</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, cooking_fequency: "regularly" })}><div className="two"><div className="whitespace">A few times a week</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, cooking_fequency: "irregularly" })}><div className="three"><div className="whitespace">A few times a month</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, cooking_fequency: "never" })}><div className="four"><div className="whitespace">Rarely</div></div></div>
        </div>
      </div>

      <div className="questionGroup">
        <h1>Would you like to learn more about gardening?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setGoals({ ...goals, gardening: "constantly" })}><div className="one"><div className="whitespace">Yes, I have a super green thumb</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, gardening: "regularly" })}><div className="two"><div className="whitespace">I got a few herbs in my window sil</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, gardening: "never" })}><div className="three"><div className="whitespace">No, and I have never tried</div></div></div>
          <div className="mc-option" onClick={() => setGoals({ ...goals, gardening: "irregularly" })}><div className="four"><div className="whitespace">No, because I kill all my plants</div></div></div>
        </div>
      </div>

      <button onClick={() => handleUserGoals()} className="btn btn-info">Continue</button>
    </div>
  );
}

export default UserGoalQuiz;