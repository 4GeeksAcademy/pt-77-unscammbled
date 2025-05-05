export const signup = async (dispatch, payload) => {
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
  export const login = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
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
  
    // Dispatch the agenda data to the global state
    dispatch({
      type: "set_user",
      payload: { user: data.user, access_token: data.access_token },
    });
  };
  export const getUser = async (dispatch, payload) => {
    let response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/private", {
        method: "GET",
        headers: { "Authorization": "Bearer " + payload },
      }
    );
    let data = await response.json();
  
    // Dispatch the agenda data to the global state
    dispatch({
      type: "set_user",
      payload: { user: data.user, access_token: payload },
    });
  };