import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      getFriends();
    })
    .catch(err => {
      console.log(err =>
        dispatch({
          type: LOGIN_FAILURE,
          payload: "You have an error fetching data"
        })
      );
    });
};

// //Axios get request to return a list of friends
export const getFriends = () => {
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => console.log("getFriends Response:", res.data))
    .catch(err => console.log(err.data));
};
