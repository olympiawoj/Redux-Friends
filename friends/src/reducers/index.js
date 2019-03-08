import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        deletingFriend: false,
        fetchingFriends: false,
        friends: [],
        loggingIn: true,
        savingFriends: false,
        updatingFriend: false,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        fetchingFriends: false,
        friends: action.payload,
        loggingIn: false,
        savingFriends: false,
        updatingFriend: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        deletingFriend: false,
        fetchingFriends: false,
        friends: [],
        loggingIn: false,
        savingFriends: false,
        updatingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
