import axios from "axios";

export const LOGIN_START = "LOGIN_START";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("/api/login", creds)
    .then(res => console.log(res))
    .catch(err => console.log("YOU HAVE AN ERROR"));
};
