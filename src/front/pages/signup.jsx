import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import UserHabitQuiz from '../components/userHabitQuiz.jsx';
import UserGoalQuiz from '../components/userGoalQuiz.jsx';
import CuisineRatings from '../components/cuisineRatings.jsx';
import { useNavigate } from 'react-router-dom';
import { CountrySelect, StateSelect, CitySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function Signup() {
    const { store, dispatch, signup } = useGlobalReducer()
    const [display, setDisplay] = useState("form")
    const [country, setCountry] = useState({capital: "Washington", currency: "USD", currency_name: "United States dollar", currency_symbol: "$", emoji: "🇺🇸", hasStates: true, id: 233, iso2: "US", iso3: "USA", latitude: "38.00000000", longitude: "-97.00000000", name: "United States", native: "United States", numeric_code: "840", phone_code: "1", region: "Americas", subregion: "Northern America", tld: ".us"});
    const [currentState, setCurrentState] = useState(null);
    const [currentCity, setCurrentCity] = useState(null);
    const [user, setUser] = useState({"state": currentState.name, "city": currentCity.name})
    const [habits, setHabits] = useState({})
    const [goals, setGoals] = useState({})
    const [cuisinePrefences, setCuisinePrefences] = useState({})


    const handleSignup = () => {
        signup(user, habits, goals, cuisinePrefences)
        navigate("/")
    }

    return (
        <div>
            {display == "form" && (
                <div className='w-75 mx-auto'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                        <input type="text" className="form-control" onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                        <input type="text" className="form-control" onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input type="text" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">State</span>
                        <StateSelect
                            countryid={country?.id}
                            containerClassName="form-group"
                            inputClassName=""
                            onChange={(_state) => setCurrentState(_state)}
                            defaultValue={currentState}
                            placeHolder="Select State"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">City</span>
                        {/* make this a dropdown that populates after picking state */}
                        <CitySelect
                            countryid={country?.id}
                            stateid={currentState?.id}
                            onChange={(_city) => setCurrentCity(_city)}
                            defaultValue={currentCity}
                            placeHolder="Select City"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Zip</span>
                        <input type="text" className="form-control" onChange={(e) => setUser({ ...user, zip: e.target.value })} />
                    </div>
                    <div className="input-group mb-3">
                        {/* add confirm password */}
                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                        <input
                            type="password"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-info' onClick={() => setDisplay("habits")}>Continue</button>
                </div>
            )}
            {display == 'habits' && (
                <UserHabitQuiz setDisplay={setDisplay} habits={habits} setHabits={setHabits} />
            )}
            {display == 'goals' && (
                <UserGoalQuiz setDisplay={setDisplay} goals={goals} setGoals={setGoals} />
            )}
            {display == 'cuisine' && (
                <CuisineRatings setDisplay={setDisplay} cuisinePrefences={cuisinePrefences} setCuisinePrefences={setCuisinePrefences} />
            )}
            {display == 'verifying' && (
                // give option to edit
                <div>
                    <p>would you like to continue?</p>
                    <button onClick={handleSignup()} className='btn btn-info'>Continue</button>
                </div>
            )}
        </div>
    )
}
