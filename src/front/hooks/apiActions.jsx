export const fetchRecipes = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    let data = await response.json();
  
    // error handling
    // if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
    //     createAgenda(); // Call function to create agenda
    // }
  };