import React, { useEffect } from "react"
import LoginModal from "../components/loginModal.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../hooks/apiActions.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// useEffect(()=> {
	// 	fetchRecipes()
	// }, [])

	// const fetchRecipes = async() => {
	// 	const response = await fetch("https://api.edamam.com/api/recipes/v2")
	// }
	
	return (
		<div className="text-center mt-5">
			<h3>Returning Users</h3>
			<LoginModal/>

			<h3>New Users</h3>
			<Link to={"/create-user"}>Sign up</Link>
		</div>
	);
}; 