import React from "react";
import { connect } from "react-redux";

const Protected = props => (
  <>
    {props.fetchingFriends && <h2>Loading!</h2>}
    {props.friends.map(friend => (
      <p>{friend.name}</p>
    ))}
  </>
);

const mstp = state => {
  return { friends: state.friends, fetchingFriends: state.fetchingFriends };
};
export default connect(mstp)(Protected);
