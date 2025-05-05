import React, { useState, useEffect } from "react";
import Slider from "./slider";

function UserHabitQuiz({ setDisplay, habits, setHabits }) {
  const [showOther, setShowOther] = useState(false);
  const [allergies, setAllergies] = useState({ egg: false, lactose: false, soy: false, peanut: false, treenut: false, shellfish: false, sesame: false, other: "" })
  //this is hidous and needs to feed back to the user info

  const handleUserHabits = () => {
    setHabits({ ...habits, allergies })
    setDisplay("goals")
  }

  return (
    <div className="App mx-auto w-75">
      <div className="questionGroup">
        <h1>How often do you meal plan?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setHabits({ ...habits, planning_fequency: "constantly" })}><div className="one"><div className="whitespace">Every Week</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, planning_fequency: "regularly" })}><div className="two"><div className="whitespace">Most of the time</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, planning_fequency: "irregularly" })}><div className="three"><div className="whitespace">Often, but I don't stick to it</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, planning_fequency: "never" })}><div className="four"><div className="whitespace">Never</div></div></div>
        </div>

      </div>
      <div className="questionGroup">
        <h1>How often do you eat out?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setHabits({ ...habits, cooking_fequency: "constantly" })}><div className="one"><div className="whitespace">Most every meal</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, cooking_fequency: "regularly" })}><div className="two"><div className="whitespace">A few times a week</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, cooking_fequency: "irregularly" })}><div className="three"><div className="whitespace">A few times a month</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, cooking_fequency: "never" })}><div className="four"><div className="whitespace">Rarely</div></div></div>
        </div>
      </div>

      <div className="questionGroup">
        <h1>Do you currently garden?</h1>
        <div className="btn-square">
          <div className="mc-option" onClick={() => setHabits({ ...habits, gardening: "constantly" })}><div className="one"><div className="whitespace">Yes, I have a super green thumb</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, gardening: "regularly" })}><div className="two"><div className="whitespace">I got a few herbs in my window sil</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, gardening: "never" })}><div className="three"><div className="whitespace">No, and I have never tried</div></div></div>
          <div className="mc-option" onClick={() => setHabits({ ...habits, gardening: "irregularly" })}><div className="four"><div className="whitespace">No, because I kill all my plants</div></div></div>
        </div>
      </div>
      <div className="questionGroup">
        <h1>Do you have any of the following allergies?</h1>
        <div className="d-flex">
          <select onChange={(e) => {
            const value = e.target.value;
            if (value === "others") {
              setShowOther(true);
            } else {
              setAllergies(prev => ({ ...prev, [value]: !prev[value] }));
            }
          }}>
            <option value="eggs">Eggs</option>
            <option value="lactose">Lactose</option>
            <option value="soy">Soy</option>
            <option value="peanut">Peanut</option>
            <option value="treenut">Tree Nut</option>
            <option value="shellfish">Shellfish</option>
            <option value="sesame">Sesame</option>
            <option value="others">Others</option>
          </select>
          <input
            style={showOther ? { "display": "block" } : { "display": "none" }}
            type="text"
            name=""
            onChange={(e) => setAllergies({ ...allergies, other: e.target.value })}
            id="others-text"
            placeholder="User Input"
          />
        </div>
      </div>
      <button onClick={() => handleUserHabits()} className="btn btn-info">Continue</button>
    </div>
  );
}

export default UserHabitQuiz;